import { Text, View,StyleSheet } from 'react-native'
import React, { Component } from 'react'
import Navbar from '../components/Navbar'

export class Car extends Component {
  render() {
    return (
      <View>
        <Navbar/>
        <Text style={styles.text}>Car</Text>     

      </View>
    )
  }
}



const styles = StyleSheet.create({
  text:{
    fontSize:"35px",
  }

})
export default Car