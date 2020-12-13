import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import Bird from './components/Bird.js'
import Obstaculos from './components/Obstaculos'


export default function App() {
    const larguraTela = Dimensions.get('screen').width
    const alturaTela = Dimensions.get('screen').height
    //console.log(larguraTela, alturaTela)

    const esquerdoDoPassaro = larguraTela / 2
    const [fundoDoPassaro, setFundoDoPassaro] = useState(alturaTela/2)
    const [esquerdoDoObstaculo, setEsquerdoDoObstaculo] = useState(larguraTela)
    const [esquerdoDoObstaculo2, setEsquerdoDoObstaculo2] = useState(larguraTela * 1.5 + 30)
    const [alturaNegativaObstaculos, setAlturaNegativaObstaculos] = useState(0)
    const [alturaNegativaObstaculos2, setAlturaNegativaObstaculos2] = useState(0)
    let esquerdoDoObstaculoTimerId
    let esquerdoDoObstaculoTimerId2
    const larguraObstaculo = 60
    const alturaObstaculo = 300
    const intervalo = 200
    const gravidade = 3
    let gameTimerId
    
    //iniciar pássaro caindo
    useEffect(() => {
      if (fundoDoPassaro > 0) {
        gameTimerId = setInterval(() => {
          setFundoDoPassaro(fundoDoPassaro => fundoDoPassaro - gravidade)
        }, 200)

        return () => {
           clearInterval(gameTimerId)
        }
      }
    }, [fundoDoPassaro])
    
    //console.log(fundoDoPassaro)

    // iniciar primeiros obstaculos
    useEffect(() => {
      if (esquerdoDoObstaculo > - larguraObstaculo) {
          esquerdoDoObstaculoTimerId = setInterval(() => {
              setEsquerdoDoObstaculo(esquerdoDoObstaculo => esquerdoDoObstaculo - 5)
          }, 30)

          return () => { clearInterval(esquerdoDoObstaculoTimerId) }
      }
      else {
          setEsquerdoDoObstaculo(larguraTela)
          setAlturaNegativaObstaculos(- Math.random() * 100)
      }

    }, [esquerdoDoObstaculo])
    
    // iniciar segundos obstaculos
    useEffect(() => {
      if (esquerdoDoObstaculo2 > - larguraObstaculo) {
          esquerdoDoObstaculoTimerId2 = setInterval(() => {
              setEsquerdoDoObstaculo2(esquerdoDoObstaculo2 => esquerdoDoObstaculo2 - 5)
          }, 30)

          return () => { clearInterval(esquerdoDoObstaculoTimerId2) }
      }
      else {
          setEsquerdoDoObstaculo2(larguraTela)
          setAlturaNegativaObstaculos2(- Math.random() * 100)
      }

    }, [esquerdoDoObstaculo2])



    return (
        <View style={estilos.container}>
            <Bird fundoDoPassaro={fundoDoPassaro} esquerdoDoPassaro={esquerdoDoPassaro} />
            <Obstaculos cor={'green'} esquerdoDoObstaculo={esquerdoDoObstaculo} larguraObstaculo={larguraObstaculo} 
                    alturaObstaculo={alturaObstaculo} intervalo={intervalo} fundoAleatorio={alturaNegativaObstaculos} />
            <Obstaculos cor={'purple'} esquerdoDoObstaculo={esquerdoDoObstaculo2} larguraObstaculo={larguraObstaculo} 
                    alturaObstaculo={alturaObstaculo} intervalo={intervalo} fundoAleatorio={alturaNegativaObstaculos2} />
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
