
import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { URL } from '../url';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const res = await fetch(`${URL}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();
            if (data?.success) {
                console.log("Success");
                navigation.navigate("/home");
             
                await AsyncStorage.setItem('user', JSON.stringify(data.others._id));
            
            } else {
                navigation.navigate("/login");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <View style={styles.logincontainer}>
            <View style={styles.login}>
                <StatusBar style="auto" />
                <Text style={styles.header}>Login</Text>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    placeholder='Enter your Email'
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry
                    placeholder='Enter your Password'
                />
                <TouchableOpacity onPress={handleLogin}>
                    <Text style={styles.button}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("/register")}>
                    <Text style={styles.link}>Don't have an account? Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    logincontainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
    login: {
        width: "80%",
        backgroundColor: "white",
        marginTop: 50,
        padding: 20,
    },
    header: {
        fontSize: 25,
        textAlign: "center",
        fontWeight: "700",
    },
    label: {
        color: "gray",
        fontWeight: "700",
    },
    input: {
        borderWidth: 2,
        borderColor: "lightgray",
        borderRadius: 20,
        padding: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: "rebeccapurple",
        color: "white",
        textAlign: "center",
        padding: 10,
        borderRadius: 20,
        fontWeight: "700",
    },
    link: {
        fontSize: 18,
        fontWeight: "700",
        color: "blue",
        textAlign: "center",
        marginTop: 10,
    },
});

export default Login;



