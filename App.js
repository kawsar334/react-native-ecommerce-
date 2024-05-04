


import React, { useEffect } from 'react';
import { StatusBar, SafeAreaView, StyleSheet, View } from 'react-native';
import Login from './src/pages/login';
import Register from './src/pages/Register';
import Home from './src/pages/Home';
import Details from './src/pages/Details';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from './src/pages/Products';
import Cart from './src/pages/Cart';
import { Alert } from 'react-native';
import Otp from './src/pages/Otp';

export default function App() {
  const Stack = createNativeStackNavigator();
  useEffect(()=>{

    Alert.alert(
      'Title',
      'Message',
      [
        {
          text: 'are you OK',
          onPress: () => console.log('OK Pressed')
        }
      ],
      { cancelable: false }
    );

  },[])
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='home'
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="/home" options={{ title: 'Home' }} component={Home} />
            <Stack.Screen name="/login" component={Login} />
            <Stack.Screen name="/register" component={Register} />
            <Stack.Screen name="/details" component={Details} />
            <Stack.Screen name="/products" component={Products} />
            <Stack.Screen name='/cart' component={Cart} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    flexDirection: "row",
  },
});

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import Login from './src/pages/login';
// import Register from './src/pages/Register';
// import Home from './src/pages/Home';
// import Details from './src/pages/Details';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Products from './src/pages/Products';
// import { ScrollView } from 'react-native-gesture-handler';
// import Car from './src/pages/Car';
// export default function App() {
//   const Stack = createNativeStackNavigator();
//   return (
//       <NavigationContainer>
//     <View style={styles.container}>
//       <StatusBar style="auto" />
//         <Stack.Navigator 
//         initialRouteName='home'
//         screenOptions={{ headerShown: false }}
//         >
//           <Stack.Screen name="/home" options={{ title: 'Home' }} component={Home} />
//           <Stack.Screen name="/login" component={Login} />
//           <Stack.Screen name="/register" component={Register} />
//           <Stack.Screen name="/details" component={Details} />
//           <Stack.Screen name="/products" component={Products} />
//           <Stack.Screen name='/cart' component={Car}/>
//         </Stack.Navigator>
//     </View>
          
//       </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'lightgray',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     flexDirection:"row",
//   },
//   text: {
//     fontSize: "50px",
//   }
// });
