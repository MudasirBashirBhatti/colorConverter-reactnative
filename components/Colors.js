import { View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import { useState } from 'react'
import axios from 'axios'
const Colors = () => {
  const [hexToHsl, sethexToHsl] = useState([])
  const [ccolor, setccolor] = useState(`#${hexToHsl}0`)
  const [myData, setmyData] = useState()
  const [hexToRgb, sethexToRgb] = useState()
  

    function Validate() {
      if(hexToHsl.includes('hsl')){
        setccolor(`${axios.get(`https://x-colors.yurace.pro/api/hsl2hex?value=${hexToHsl}`)
        .then(response => {
          setccolor(response.data.hex);
        })
        .catch(error => {
          console.log(error);
        })}`)
      }
      
      else if(hexToHsl.includes('rgb')){
        setccolor(`${axios.get(`https://x-colors.yurace.pro/api/rgb2hex?value=${hexToHsl}`)
        .then(response => {
          setccolor(response.data.hex)
        })
        .catch(error => {
          console.log(error);
        })}`)
      }else{
        setccolor(`#${hexToHsl}0`)
      }

    if (!hexToHsl.includes('hsl', 'rgb')) {
      axios.get(`https://x-colors.yurace.pro/api/hex2hsl?value=${hexToHsl}0`)
        .then(response => {
          setmyData(response.data.hsl);
        })
        .catch(error => {
          console.log(error);
        });

      axios.get(`https://x-colors.yurace.pro/api/hex2rgb?value=${hexToHsl}0`)
        .then(response => {
          sethexToRgb(response.data.rgb)
        }).catch(error => {
          console.log(error);
        });

        // hsl to other conversions 
    } 
    if(hexToHsl.includes('hsl')) {
      axios.get(`https://x-colors.yurace.pro/api/hsl2hex?value=${hexToHsl}`)
        .then(response => {
          setmyData(response.data.hex);
        })
        .catch(error => {
          console.log(error);
        });


      axios.get(`https://x-colors.yurace.pro/api/hsl2rgb?value=${hexToHsl}`)
        .then(response => {
          sethexToRgb(response.data.rgb);
        })
        .catch(error => {
          console.log(error);
        });
          // rgb to other color conversions 
    } 
    
    if(hexToHsl.includes('rgb')) {
      axios.get(`https://x-colors.yurace.pro/api/rgb2hsl?value=${hexToHsl}`)
        .then(response => {
          setmyData(response.data.hsl)
        })
        .catch(error => {
          console.log(error);
        });

      axios.get(`https://x-colors.yurace.pro/api/rgb2hex?value=${hexToHsl}`)
        .then(response => {
          sethexToRgb(response.data.hex)
        })
        .catch(error => {
          console.log(error);
        });


    }

  }

  
  return (
    <View style={[MyApi.parent, { backgroundColor: ccolor}]}>
      <View style={MyApi.insideParent}>
        <Text style={[MyApi.Heading]}>Your Favourite Color Converter</Text>
      <TextInput style={[MyApi.myInput, { marginVertical: 20}]} placeholder='Enter color in HSL , RGB, HEX' onChangeText={text=>sethexToHsl(text)} onChange={Validate} />
      {/* <TouchableOpacity style={[MyApi.touchbtn]}>
        <Text onPress={Validate} style={{color:'white'}}>Get Color Codes</Text>
      </TouchableOpacity> */}

      <Text style={MyApi.colorCodes}>{myData}</Text>
      <Text style={MyApi.colorCodes}>{hexToRgb}</Text>
      </View>


    </View>
  )

}
const MyApi = StyleSheet.create({
  parent: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: "center",
  },
  insideParent:{
    backgroundColor:'white',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:'7%',
    paddingVertical:'14%',
  },
  Heading:{
    fontSize:30,
    textAlign:'center',
    color:'black'
  },
  myInput: {
    borderWidth: 2,
    textAlign: 'center',
    paddingVertical: 2,
    paddingHorizontal: 20,

  },
  touchbtn: {
    paddingHorizontal: 30,
    paddingVertical: 7,
    borderRadius: 40,
    backgroundColor:'black',
    marginBottom:20
  },
  btn: {
    color: 'white',
  },
  colorCodes:{
    color:'black',
    paddingVertical:3
  }
})

export default Colors;