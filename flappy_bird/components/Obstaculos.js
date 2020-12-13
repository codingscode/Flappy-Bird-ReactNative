import React from 'react'
import { View } from 'react-native'



export default Obstaculos = ({ cor, larguraObstaculo, alturaObstaculo, intervalo, esquerdoDoObstaculo, fundoAleatorio }) => {
    

      return (
          <>
              <View style={{ position: 'absolute',
                    backgroundColor: cor,
                    width: larguraObstaculo,
                    height: alturaObstaculo,
                    left: esquerdoDoObstaculo,
                    bottom: fundoAleatorio + alturaObstaculo + intervalo }}/>
              <View style={{ position: 'absolute',
                    backgroundColor: cor,
                    width: larguraObstaculo,
                    height: alturaObstaculo,
                    left: esquerdoDoObstaculo,
                    bottom: fundoAleatorio}}/>
          </>
      )
     
}
