import React from 'react'
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen'
import DetailScreen from './DetailScreen'

const Stack = createStackNavigator();

const App = () => {

  const deepLinking ={
    prefixes: ['http://hereos.dev.br', 'navigs://'],
    config:{
      HomeScreen:'HomeScreen',
      DetailScreen:{
        path:'DetailScreen',
      }
    }
  }

  return (
    <NavigationContainer linking={deepLinking}>
      <Stack.Navigator initialRouteName={HomeScreen}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
