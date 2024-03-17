import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Menu = ({ navigation }) => {
    console.log(navigation)
    return (
        <View style={styles.menu}>
           
            <TouchableOpacity style={styles.menulink}>
                <Text style={styles.menutext} onPress={() => navigation.navigation.navigate('/register')}  >
                    Home
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menulink}>
                <Text style={styles.menutext} onPress={() => navigation.navigation.navigate('/products')}  >
                    Products
                </Text>
            </TouchableOpacity>
                <TouchableOpacity style={styles.menulink} >
                    <Text style={styles.menutext} onPress={() => navigation.navigation.navigate('/login')} >
                        Login
                    </Text>
                </TouchableOpacity>
            <TouchableOpacity style={styles.menulink}>
                <Text style={styles.menutext} onPress={() => navigation.navigation.navigate('/register')}  >
                    Register
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menulink}>
                <Text style={styles.menutext} onPress={() => navigation.navigation.navigate('/login')}  >
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