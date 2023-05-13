import 'react-native-gesture-handler';

import { Text, View } from 'react-native'

import { AuthProvider } from './src/context/AuthContext';
import { MenuLateral } from './src/navigator/MenuLateral';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { StackNavigator } from './src/navigator/StackNavigator';
import { Tabs } from './src/navigator/Taps';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator /> */}
        <MenuLateral />
        {/* <Tabs /> */}
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      { children }
    </AuthProvider>
  )
}


export default App;
