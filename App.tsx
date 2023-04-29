import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Colors from './components/Colors'
import SplashScreen from 'react-native-splash-screen'

export class App extends Component {
  componentDidMount() {
    SplashScreen.hide()
  }
  render() {
    return (
      <View>
        <Colors/>
      </View>
    )
  }
}

export default App