import React from 'react'
import { View } from 'react-native'

export default Passaro = ({ fundoDoPassaro, esquerdoDoPassaro }) => {
      const passaroLargura = 50
      const passaroAltura = 60

      return (
          <View style={{
              position: 'absolute',
              backgroundColor: 'blue',
              width: passaroLargura,
              height: passaroAltura,
              left: esquerdoDoPassaro - (passaroLargura/2),
              bottom: fundoDoPassaro
               }} />
      )
     
}
