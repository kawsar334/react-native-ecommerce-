import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductList from '../components/ProductList'
import { URL } from '../url';
const Products = (props) => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetchData();
  }, []); 



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
    <View>
      <ProductList products={products} setProducts={setProducts} navigation={props.navigation} />
    </View>
  )
}

export default Products