

import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Menu from './Menu';
import menuImg from "../../assets/imgs/6.png";
import closeIcon from "../../assets/imgs/7.png";


const Navbar = ({ navigation }) => {
    const [open, setOpen] = useState(false)
    
    return (
        <View style={styles.navcontainer}>
        <View style={styles.navbar}>
            <View style={styles.navTop} >
                <TextInput placeholder='Search..' style={styles.searchInput} />
                <View style={styles.logocontainer}>
                    <TouchableOpacity>
                        <Text style={styles.logo} >Daraz Shoping.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                            {!open ? <Text onPress={() => setOpen(!open)}><Image style={styles.menuImg} source={{ uri: menuImg }} /> </Text> : <Text onPress={() => setOpen(!open)}><Image style={styles.menuImg} source={{ uri: closeIcon }} /> </Text> }
                    </TouchableOpacity>
                </View>
            </View>
        </View>
           {open && <View style={styles.menuContainer}>
                <Menu navigation={navigation }/>
        </View>}
           
        </View>
    )
}

export default Navbar

const styles = StyleSheet.create({
    navcontainer:{
        position:"relative",
        zIndex:999,
        paddingVertical:"10px"

    },
    navbar: {
        // backgroundColor: "#384256",
        height: "80px",
        width: "100%",
        padding: "10px",
    },
    navTop: {
        display: "flex",
        // flexDirection: "row",
        justifyContent: "center",
        gap: "10px",
        color: "white",
    },
    logocontainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    logo: {
        fontSize: "25px",
        color: "#384256",
        fontWeight: "700",
    },
    menu:{
        fontWeight:"700",
        color:"#384256"
    },
    menuImg:{
        width:"25px",
        height:"25px",
        backgroundColor:"white",
    },
    menuClose:{
            color:"crimson",
            fontWeight: "600",
            fontSize:"18px",
            textTransform:"capitalize"
    },
    searchInput: {
        border: "none",
        border: "2px solid gray",
        padding: "3px",
        borderRadius: "20px",
        color: "#384256",
        outline: "none",
        width: "80%",
        fontWeight: "700",
        margin: "auto"
    },
    menuContainer:{
        position:"absolute",
        right:"65px",
        top:"85px",
        border:"1px solid lightgray",
        padding:"10px",
        backgroundColor:"white",
        width:"200px",
        borderRadius:"20px",
        borderTopRightRadius:"0px",
        overflow:"hidden",  
    }
  
})