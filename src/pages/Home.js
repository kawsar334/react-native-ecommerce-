import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductList from '../components/ProductList'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Slider from '../components/Slider';
import { URL } from '../url';

const Home = (props) => {
    const [products, setProducts] = useState([])


    useEffect(() => {
        fetchData();
    }, []);
// GETTING DATA FROM BACKEND
    const fetchData = async () => {
        try {
            const response = await fetch(`${URL}/product/`);
            const jsonData = await response.json();
            setProducts(jsonData.products);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <View style={styles.home}>
            <Navbar navigation={props} />
            <ScrollView>

            <Slider products={products}/>
            <ProductList products={products} setProducts={setProducts} navigation={props.navigation}/>
                </ScrollView>
       <Footer/>
        </View>
    )
}


const styles = StyleSheet.create({
    home: {
        width: "100%",
        backgroundColor: "white",
        height: "100%",
        flex:1,
        
    },
    bottomnav:{
       

    }
})

export default Home 