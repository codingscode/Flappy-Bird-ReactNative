import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import Bird from './components/Bird.js'


export default function App() {
    const larguraTela = Dimensions.get('screen').width
    const alturaTela = Dimensions.get('screen').height
    //console.log(larguraTela, alturaTela)

    const esquerdoDoPassaro = larguraTela / 2
    const [fundoDoPassaro, setFundoDoPassaro] = useState(alturaTela/2)
    const gravidade = 3
    
    //iniciar pássaro caindo
    useEffect(() => {
      if (fundoDoPassaro > 0) {
        setInterval(() => {
          setFundoDoPassaro(fundoDoPassaro => fundoDoPassaro - gravidade)
        }, 1000)
      }
    })
    
    //console.log(fundoDoPassaro)

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
