import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Bird from './components/Bird.js'


export default function App() {
    
    return (
      <View style={estilos.container}>
        <Text>React Native!</Text>
        <Bird />
      </View>
    )

}

const estilos = StyleSheet.create({
      container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
      },
})
