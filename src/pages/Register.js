import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { URL } from '../url';

const Register = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");




    const handleRegister = async(e)=>{
       
        e.preventDefault()
        try {
            const res = await fetch(`${URL}/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password, name }),
            }
            );

            const data = await res.json();
            console.log(data)
            if (data.success) {
                navigation.navigate("/login")
            }else{
                navigation.navigate("/register")
            }

        } catch (err) {
            console.log(err);
        }
    }

    
    return (
        <View style={styles.registerContainer}>
            <View style={styles.register}>
                <Text style={styles.registerHeader}>Register</Text>
                <Text style={styles.label}>Name</Text>
                <TextInput onChange={(e)=>setName(e.target.value)} style={styles.input} placeholder='Type your Name' />
                <Text style={styles.label}>Email</Text>
                <TextInput onChange={(e)=>setEmail(e.target.value)} style={styles.input} placeholder='Type your Email' />
                <Text style={styles.label}>Password</Text>
                <TextInput onChange={(e)=>setPassword(e.target.value)} style={styles.input} secureTextEntry placeholder='Type your Password' />
                <TouchableOpacity>
                <Text onPress={handleRegister} style={styles.registerBtn} >
                    Register
                </Text>
                </TouchableOpacity>
                <Text style={styles.link} onPress={()=>navigation.navigate("/login")}>Already have An account? <a  style={styles.a} >Login</a></Text>
            </View>
        </View>
    )
}




const styles = StyleSheet.create({
    registerContainer: {
        width: "100%",
        flex: 1,
        alignItems:"center",
        marginTop:"50px",
        backgroundColor: "white",

        
    },
    register:{
        width:"80%",
        padding:"30px",
        flexDirection:"column",
        gap:"10px",
        
    },
    registerHeader:{
        textAlign:"center",
        fontWeight: "700",
        fontSize:"25px ",


    },
    label:{
        fontWeight: "700",
        color:"gray"


    },
    input:{
        border:"2px solid lightgray",
        padding:"10px",
        borderRadius:"20px",
        outline:"none",
        textTransform:"capitalize",
        fontWeight: "700",
        borderRadius:"20px"

    },
    link:{
        fontWeight: "700",
        color:"gray",
        fontSize:"15px",

    },
    registerBtn:{
        border: "2px solid lightgray",
        padding: "10px",
        borderRadius: "20px",
        outline: "none",
        textTransform: "capitalize",
        fontWeight: "700",
        borderRadius: "20px",
        textAlign:"center",
        backgroundColor:"crimson",
        color:"white"


    },
    a:{
        color:"crimson"

    }



})
export default Register