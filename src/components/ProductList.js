import { View, Text, StyleSheet, Button, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { navbarItems } from './data';
import Icon from 'react-native-vector-icons/FontAwesome';
import { URL } from '../url';


const ProductList = ({ products, setProducts , navigation}) => {

  const handleCat = async(item)=>{ 
      try {
        const response = await fetch(`${URL}/product/cat?cat=${item}`);
        const jsonData = await response.json();
        setProducts(jsonData.products);
        console.log(jsonData.products);
      } catch (error) {
        console.log(error);
      }
  };

  
  return (
    <View style={styles.productList}>
      <View style={styles.productNav}>
        <FlatList data={navbarItems}
          horizontal
          renderItem={(element) => {
            const { item } = element
            return (
              <TouchableOpacity key={item.id} onPress={()=>handleCat(item.name)}>
                <Text style={styles.name}>{item.name}</Text>
              </TouchableOpacity>
            )
          }} />
      </View>

      {/* items */}
      <View style={styles.items}>
        {
          products?.map((item) => (
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("/details", { id: item?._id })}>
              <Image style={styles.productImg} source={{
                uri: item?.images[0]
              }} />
              <Text style={styles.productTitle}>{item?.title.slice(0, 12)} ...</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.price}>${item?.price}</Text>
              <TouchableOpacity>
                  <Text style={styles.pBtn} onPress={() => navigation.navigate("/details", { id: item?._id })} >
                    See More
                  </Text>
              </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))
        }
      </View>
      {/* items */}

    </View>
  )
}

const styles = StyleSheet.create({
  productList: {
    width: "100%",
    display: "flex",
    marginBottom: "20px"

  },
  productNav: {
  },
  name: {
    fontSize: "16px",
    padding: "5px",
    margin: "13px",
    backgroundColor: "#384256",
    borderRadius: "20px",
    color: "white",
    textTransform: "capitalize",
    // backgroundColor:"red",
    transform: "skew(15deg)",


  },
  items: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    width: "170px",
    height: "230px",
    // border: "2px solid lightgray",
    margin: "3px",
    padding: "5px",
    borderRadius:"20px",
    overflow:"hidden",
    backgroundColor:"rgba(0,0,0,0.1)",

  },
  productImg: {
    width: "100%",
    height: "130px",
    objectFit: "cover"
  },
  productTitle: {
    color: "#384256",
    backgroundColor: "white",
    padding: "10px",
    width: "100%",
    fontWeight: "700",
    fontSize: "14px",
    textTransform:"capitalize",
    borderRadius:"20px",
    borderTopEndRadius:"0px",
    borderBottomEndRadius:"0px",
    transform:"skew(18deg)"



  },
  priceContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    margin:"5px",
  },
  price:{
    color:"#384256",
    fontWeight: "700",
    fontSize: "14px",
    textTransform: "capitalize",


  },
  pBtn:{
 
   backgroundColor:"#384256",
   color:"white",
    paddingVertical:"5px",
    paddingHorizontal:"5px",
    borderRadius:"30px",
    fontWeight: "700",
    fontSize: "14px",
    textTransform: "capitalize",

  }
})

export default ProductList

