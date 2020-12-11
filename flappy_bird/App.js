import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar'


export default function App() {
    
    return (
      <View style={estilos.container}>
        <Text>React Native!</Text>
        <StatusBar style="auto" />
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
