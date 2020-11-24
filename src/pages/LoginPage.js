import React from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import FormRow from "../components/FormRow";

export default class LoginPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      mail: '',
      password: '',
    }

  }

  onChangeHandler(field, value){
    this.setState({
      [field]: value
    });
  }

  tryLogin(){
    console.log(this.state);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="light" />
        <FormRow>
          <TextInput 
          style={styles.input} 
          placeholder="Email" 
          value={this.state.mail}
          onChangeText={value => this.onChangeHandler('mail',value)}
          />
        </FormRow>
        <FormRow>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={value => this.onChangeHandler('password',value)}
          />
        </FormRow>
        <Button title="Entrar" 
            onPress={() => this.tryLogin()}/>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,

    marginLeft: 20,
    marginRight: 20,

    flex: 1,
    justifyContent: "center",
  },
  input: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
  },
});
