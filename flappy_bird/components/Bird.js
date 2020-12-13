import React from 'react'
import { View } from 'react-native'

const Passaro = ({ fundoDoPassaro, esquerdoDoPassaro }) => {
      const passaroLargura = 50
      const passaroAltura = 60

      return (
          <View style={{
              position: 'absolute',
              backgroundColor: 'blue',
              width: passaroLargura,
              height: passaroAltura,
              left: esquerdoDoPassaro - (passaroLargura/2),
              bottom: fundoDoPassaro - (passaroAltura/2)
               }} />
      )
     
}
export default Passaro