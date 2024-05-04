import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Menu = ({ navigation }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userData = async () => {
            const userInfo = await AsyncStorage.getItem('user');
            if (userInfo !== null) {
                const userinformation = JSON.parse(userInfo);
                setUser(userinformation);
            }
        }
        userData()
    }, []);

// handling logout 
    const handleLogout = async () => {

        try {
            await AsyncStorage.removeItem('user');
            setUser(null);
            navigation.navigation.navigate('/login')

        } catch (err) {
            console.log("error logout ")
        }

    }

    return (
        <View style={styles.menu}>
            <TouchableOpacity style={styles.menulink}>
                <Text style={styles.menutext} onPress={() => navigation.navigation.navigate('/home')}  >
                    Home
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menulink}>
                <Text style={styles.menutext} onPress={() => navigation.navigation.navigate('/products')}  >
                    Products
                </Text>
            </TouchableOpacity>
            {user ?
                <TouchableOpacity style={styles.menulink} >
                    <Text style={styles.menutext} onPress={handleLogout} >
                        Logout
                    </Text>
                </TouchableOpacity> :
                <TouchableOpacity style={styles.menulink} > <Text style={styles.menutext} onPress={() => navigation.navigation.navigate('/login')}>Login </Text>
                </TouchableOpacity>}
            <TouchableOpacity style={styles.menulink}>
                <Text style={styles.menutext} onPress={() => navigation.navigation.navigate('/register')}  >
                    Register
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menulink}>
                <Text style={styles.menutext} onPress={() => navigation.navigation.navigate('#')}  >
                    Admin pannel
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menulink}>
                <Text style={styles.menutext} onPress={() => navigation.navigation.navigate('/cart')}  >
                    Your Cart
                </Text>
            </TouchableOpacity>


        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    menu: {
        width: "200px",

    },
    menulink: {
        marginVertical: "5px",

    },
    menutext: {
        fontSize: "18px",
        fontWeight: "700",
        textTransform: "capitalize",

    },
    close: {
        textAlign: "center",
        color: "crimson",
        marginLeft: "30px",
        fontSize: "30px",
        display: "none"

    }
})