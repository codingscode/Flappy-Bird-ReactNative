import React from 'react'
import { View } from 'react-native'



export default Obstaculos = ({ larguraObstaculo, alturaObstaculo, intervalo, esquerdoDoObstaculo }) => {
    

      return (
          <>
              <View style={{ position: 'absolute',
                    backgroundColor: 'green',
                    width: larguraObstaculo,
                    height: alturaObstaculo,
                    left: esquerdoDoObstaculo,
                    bottom: 0 + alturaObstaculo + intervalo }}/>
              <View style={{ position: 'absolute',
                    backgroundColor: 'green',
                    width: larguraObstaculo,
                    height: alturaObstaculo,
                    left: esquerdoDoObstaculo,
                    bottom: 0}}/>
          </>
      )
     
}
