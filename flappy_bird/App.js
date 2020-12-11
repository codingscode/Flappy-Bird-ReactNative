import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import Bird from './components/Bird.js'


export default function App() {
    const larguraTela = Dimensions.get('screen').width
    const alturaTela = Dimensions.get('screen').height
    console.log(larguraTela, alturaTela)

    return (
      <View style={estilos.container}>
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
