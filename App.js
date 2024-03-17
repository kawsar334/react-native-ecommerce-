import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/login';
import Register from './src/pages/Register';
import Home from './src/pages/Home';
import Details from './src/pages/Details';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from './src/pages/Products';
import { ScrollView } from 'react-native-gesture-handler';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
        
      
    <View style={styles.container}>
      <StatusBar style="auto" />
        <Stack.Navigator 
        initialRouteName='home'
        screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="/home" options={{ title: 'Home' }} component={Home} />
          <Stack.Screen name="/login" component={Login} />
          <Stack.Screen name="/register" component={Register} />
          <Stack.Screen name="/details" component={Details} />
          <Stack.Screen name="/products" component={Products} />



        </Stack.Navigator>
    </View>
          
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection:"row"

  },
  text: {
    fontSize: "50px",

  }
});
