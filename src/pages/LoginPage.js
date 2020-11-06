import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default class LoginPage extends React.Component {
  render(){
    return(
      <View>
        <Text>Olá mundo</Text>
        <StatusBar style="light"/>
      </View>

    )
  }
}