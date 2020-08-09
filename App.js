import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TicTacToe from './TicTacToe.js'
import Life from './Life.js'

export const GridContext = React.createContext({})

const TicTacToeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TicTacToe></TicTacToe>
    </View>
  )
}

const LifeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Life></Life>
    </View>
  )
}

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Life" component={LifeScreen} />
        <Tab.Screen name="TicTacToe" component={TicTacToeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
