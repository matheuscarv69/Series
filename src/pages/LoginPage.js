import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import FormRow from "../components/FormRow";

export default class LoginPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="light" />
        <FormRow>
          <TextInput style={styles.input} placeholder="Email" />
        </FormRow>
        <FormRow>
          <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true}/>
        </FormRow>
        <Text>Entrar</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    paddingLeft: 10,
    paddingRight: 10,
    
    marginLeft: 20,
    marginRight: 20,
    
    flex:1,
    justifyContent: "center",
    
    
  },
  input: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
  },
});
