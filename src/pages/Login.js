import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { URL } from '../url';


const login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")


    const handleLogin= async(e)=>{
        e.preventDefault()
       try{
           const res = await fetch(`${URL}/auth/login`, {
               method: "POST", 
               headers: {
                   "Content-Type": "application/json",
               },
               body: JSON.stringify({ email, password }),
           }
           );

           const data = await res.json();
           if(data?.success){
           console.log("sucess")
               navigation.navigate("/home")
               
           }else{
               navigation.navigate("/login")
           }

       }catch(err){
        console.log(err);
       }

    }

    


    return (
        <View style={styles.logincontainer}>
            <View style={styles.login}>
                <StatusBar style="auto" />
                <Text style={styles.header}>login</Text>
                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.input} 
                    onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your Email' />
                <Text style={styles.label}>Password</Text>
                <TextInput style={styles.input} onChange={(e) =>setPassword(e.target.value)} secureTextEntry placeholder='Enter your Password' />
                <TouchableOpacity>
                    <Text style={styles.button} onPress={handleLogin} >
                        Login
                    </Text>
                </TouchableOpacity>
                <Text style={styles.link} onPress={() => navigation.navigate("/register")}>
                    Don't have any account?
                    <a style={styles.a}>Register </a>
                </Text>
            </View>



        </View>
    )
}



const styles = StyleSheet.create({

    logincontainer: {
        width: "100%",
        flex: 1,
        display: "flex",
        alignItems: "center",
        backgroundColor:"white",

    },
    login: {
        width: "80%",
        backgroundColor: "white",
        marginTop: "50px",
        gap: "10px",
        padding: "20px",

    },
    header: {
        fontSize: "25px",
        textAlign: "center",
        textTransform: "capitalize",
        fontWeight: "600",
        fontWeight: "700",


    },
    label: {
        color: "gray",
        fontWeight: "700",

    },
    input: {
        border: "none",
        width: "100%",
        padding: "10px",
        border: "2px solid lightgray",
        borderRadius: "20px",
        fontWeight: "700",

    },
    link: {
        fontSize: "18px",
        fontWeight:"700"


    },
    a:{
        color:"blue"
    },
    button: {
       
        width: "100%",
        padding: "10px",
        border: "1px solid rebeccapurple",
        borderRadius: "20px",
        backgroundColor:"rebeccapurple",
        color:"white",
        textAlign:"center",
        fontWeight:"700",
    }

})

export default login