import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Dimensions, TouchableWithoutFeedback } from 'react-native'
import Bird from './components/Bird.js'
import Obstaculos from './components/Obstaculos'

export default function App() {
    const larguraTela = Dimensions.get('screen').width
    const alturaTela = Dimensions.get('screen').height
    //console.log(larguraTela, alturaTela)

    const esquerdoDoPassaro = larguraTela / 2
    const [fundoDoPassaro, setFundoDoPassaro] = useState(alturaTela / 2)
    const [esquerdoDoObstaculo, setEsquerdoDoObstaculo] = useState(larguraTela)
    const [esquerdoDoObstaculo2, setEsquerdoDoObstaculo2] = useState(larguraTela*1.5 + 30)
    const [alturaNegativaObstaculos, setAlturaNegativaObstaculos] = useState(0)
    const [alturaNegativaObstaculos2, setAlturaNegativaObstaculos2] = useState(0)
    const gravidade = 3
    let larguraObstaculo = 60
    let alturaObstaculo = 300
    let intervalo = 200
    let gameTimerId
    let obstaculoTimerId
    let obstaculoTimerId2
    let [jogoTerminado, setJogoTerminado] = useState(false)
    const [pontuacao, setPontuacao] = useState(0)
  
    //iniciar pássaro caindo
    useEffect(() => {
      if (fundoDoPassaro > 0) {
        gameTimerId = setInterval(() => {
          setFundoDoPassaro(fundoDoPassaro => fundoDoPassaro - gravidade)
        }, 30)
  
        return () => {
           clearInterval(gameTimerId)
        }
      }
    }, [fundoDoPassaro])
    
    //console.log(fundoDoPassaro)
  
    const pular = () => {
      if (!jogoTerminado && (fundoDoPassaro < alturaTela) ) {
         setFundoDoPassaro(fundoDoPassaro => fundoDoPassaro + 50 )
         console.log('pulou')
      }
    }

    // iniciar primeiros obstaculos
    useEffect(() => {
      if (esquerdoDoObstaculo > -larguraObstaculo) {
          obstaculoTimerId = setInterval(() => {
            setEsquerdoDoObstaculo(esquerdoDoObstaculo => esquerdoDoObstaculo - 5)
          }, 30)
          return () => { clearInterval(obstaculoTimerId) }
      }
      else {
          setEsquerdoDoObstaculo(larguraTela)
          setAlturaNegativaObstaculos(-Math.random() * 100)
          setPontuacao(pontuacao => pontuacao + 1)
      }
    }, [esquerdoDoObstaculo])

    // iniciar segundos obstaculos
    useEffect(() => {
      if (esquerdoDoObstaculo2 > -larguraObstaculo) {
        obstaculoTimerId2 = setInterval(() => {
          setEsquerdoDoObstaculo2(esquerdoDoObstaculo2 => esquerdoDoObstaculo2 - 5)
        }, 30)
        return () => { clearInterval(obstaculoTimerId2) }
      }
      else {
          setEsquerdoDoObstaculo2(larguraTela)
          setAlturaNegativaObstaculos2(-Math.random() * 100)
          setPontuacao(pontuacao => pontuacao + 1)
      }

    }, [esquerdoDoObstaculo2])

    // checar colisão
    useEffect(() => {
       
      if (
      ((fundoDoPassaro < (alturaNegativaObstaculos + alturaObstaculo + 30) ||
        fundoDoPassaro > (alturaNegativaObstaculos + alturaObstaculo + intervalo -30)) &&
        (esquerdoDoObstaculo > larguraTela/2 -30 && esquerdoDoObstaculo < larguraTela/2 + 30 )
        )
          || 
        ((fundoDoPassaro < (alturaNegativaObstaculos2 + alturaObstaculo + 30) ||
        fundoDoPassaro > (alturaNegativaObstaculos2 + alturaObstaculo + intervalo -30)) &&
        (esquerdoDoObstaculo2 > larguraTela/2 -30 && esquerdoDoObstaculo2 < larguraTela/2 + 30 )
        )
        ) 
        {
           console.log('fim de jogo')
           fimDeJogo()
        }
    })

    const fimDeJogo = () => {
      clearInterval(gameTimerId)
      clearInterval(obstaculoTimerId)
      clearInterval(obstaculoTimerId2)
      setJogoTerminado(true)
    }
  

    return (
        <TouchableWithoutFeedback onPress={pular}>
            <View style={estilos.container}>
              {jogoTerminado && <Text style={{zIndex: 30}}>{`pontuação: ${pontuacao}`}</Text>}
                <Bird fundoDoPassaro={fundoDoPassaro} esquerdoDoPassaro={esquerdoDoPassaro} />
                <Obstaculos cor={'green'} esquerdoDoObstaculo={esquerdoDoObstaculo} larguraObstaculo={larguraObstaculo} 
                        alturaObstaculo={alturaObstaculo} intervalo={intervalo} fundoAleatorio={alturaNegativaObstaculos} />
                <Obstaculos cor={'purple'} esquerdoDoObstaculo={esquerdoDoObstaculo2} larguraObstaculo={larguraObstaculo} 
                        alturaObstaculo={alturaObstaculo} intervalo={intervalo} fundoAleatorio={alturaNegativaObstaculos2} />
            </View>
        </TouchableWithoutFeedback>
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
