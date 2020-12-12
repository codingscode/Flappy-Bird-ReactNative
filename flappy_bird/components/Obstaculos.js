import React from 'react'
import { View } from 'react-native'



export default Obstaculos = ({ cor, larguraObstaculo, alturaObstaculo, intervalo, esquerdoDoObstaculo }) => {
    

      return (
          <>
              <View style={{ position: 'absolute',
                    backgroundColor: cor,
                    width: larguraObstaculo,
                    height: alturaObstaculo,
                    left: esquerdoDoObstaculo,
                    bottom: 0 + alturaObstaculo + intervalo }}/>
              <View style={{ position: 'absolute',
                    backgroundColor: cor,
                    width: larguraObstaculo,
                    height: alturaObstaculo,
                    left: esquerdoDoObstaculo,
                    bottom: 0}}/>
          </>
      )
     
}
