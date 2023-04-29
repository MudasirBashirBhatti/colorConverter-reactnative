import React from "react";
import { View, Text , Button} from 'react-native'
import User from "./components/User";

export default function App() {
  return (
    <View>
      <Text style={{fontSize:30}}>hello I'm mudasir and this is my App</Text>
      <Text style={{fontSize:30}}>like share and subscribe</Text>
      <Button title="Click Me"></Button>
      <User/>
    </View>
  )
}