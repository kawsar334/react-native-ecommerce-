import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import img4 from "../../assets/imgs/4.png";
import { URL } from '../url';

const Details = ({ route, navigation }) => {
    const [product, setProduct] =useState({})
    const id = route.params.id;
    useEffect(()=>{
      id &&  fetchData();
    },[id])
    // fetching data from backend 
    const fetchData = async () => {
        try {
            const response = await fetch(`${URL}/product/find/${id}`);
            const jsonData = await response.json();
            setProduct(jsonData.product);
        } catch (error) {
            console.log(error);
        }
    }
   
    return (
        <View style={styles.details}>
            {/* <Navbar /> */}
            <View style={styles.detailsContainer}>
        {product?.images && <View style={styles.detailsTop} >
            <Image style={styles.detailsImg} source={{
                uri: product?.images[0]
            }}  alt='Loading...'/>
            
        </View>}
                {product?.images && <View style={styles.detailsTop} >
                    <Image style={styles.detailsImg} source={{
                        uri: product?.images[1]
                    }} alt='Loading...'/>

                </View>}
                <View style={styles.detailsBottom}>
                    <Text style={styles.dTitle}>{product?.title}</Text>
                    <Text style={styles.dDesc}>{product?.description}</Text>
                    <TouchableOpacity>
                        <View style={styles.dCounters}>
                            <Text style={styles.dDesc}>count:</Text>
                        <Text style={styles.cText}>+</Text>
                        <Text style={styles.cText}>01</Text>
                        <Text style={styles.cText}>-</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dBtn}>
                        <Text style={styles.dBtnText}> Add To Card</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    details: {
        width: "100%",
        flex: "1",
        
        
    },
    detailsContainer: {
        width: "100%",
        
        
    },
    detailsTop: {
        width: "100%",
        height: "150px",
        marginVertical: "10px",
        paddingBottom:"20px",
        marginBottom:"10px", 
        margin:"auto",
        
    },
    detailsImg: {
        width: "90%",
        backgroundColor:"white",
        border:"1px solid lightgray",
        height: "150px",
        borderRadius:"10px",
    },
    detailsBottom: {
        backgroundColor: "white",
        padding:"20px",
        fontWeight: "700",


    },
    dTitle:{
        marginVertical:"10px",
        fontSize:"20px",
        fontWeight:"700",
        textTransform:"capitalize",
    },
    dDesc:{
        fontSize:"16px",
        fontWeight: "700",
        transform:"skew(2deg)",
        textTransform: "capitalize",

        

    },
    dCounters:{
        display:"flex",
        flexDirection:"row",
        gap:"20px",
        alignItems:"center",
        fontSize:"20px",
        textTransform:"capitalize",
        fontWeight: "700",
        marginTop:"20px",
        textTransform: "capitalize",


    },
    cText:{
        fontSize:"20px",
        padding:"5px",
        fontWeight: "700",
        textTransform: "capitalize",
    },
    dBtn:{
        backgroundColor:"rebeccapurple",
        width:"150px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:"5px",
        color:"white",
        marginVertical:"20px",
        borderRadius:"20px",
  

    },
    dBtnText:{
        fontWeight: "700",
        color: "white",

    }
})

export default Details