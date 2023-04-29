import { View, Text, Button, TouchableOpacity, Touchable } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import extstyle from '../style'

export default function User() {
    const [first, setfirst] = useState(0)
    const increaseNum = ()=>{
        setfirst(first+1)
    }

    // for internal style 
    const myStyle = StyleSheet.create({
      hello:{
          color:'red',
      }
    })

  return (
    <View>
      <Text style={{textAlign:'center',fontSize:30}}>{first}</Text>
      <Button title='Increase' onPress={increaseNum}></Button>

{/* internal style  */}
      <Text style = {myStyle.hello}>internal style</Text>

      {/* external style  */}
      <TouchableOpacity>
      <Text style={extstyle.editBtn}>External Styles</Text>
      </TouchableOpacity>
    </View>



  )
}