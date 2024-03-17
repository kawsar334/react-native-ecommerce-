import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'

const Slider = ({ products }) => {
    const data = products?.slice(0, products.length - 1).reverse();
  return (
    <View>
      <FlatList
      horizontal
       data={data} 
       renderItem={(element)=>{
        const {item} = element
       return(
           <View style={styles.slider}>
              
            <Image 
                   style={styles.sliderImg}
            source={
                {
                    uri:item?.images[0]
                }
            }
            />
        </View>
       )
       
      }}/>
    </View>
  )
}

export default Slider

const styles = StyleSheet.create({
    slider:{
        width:"100%",
        height:"120px",
        backgroundColor:"#384256",
        marginVertical:"20px",

    },

    sliderImg:{
        width:"350px",
        height:"120px",
        objectFit:"cover",
        backgroundColor:"gray",
        transform: "skew(15deg)",

    }
})