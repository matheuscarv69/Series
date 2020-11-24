import React from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import firebase from 'firebase';

import FormRow from "../components/FormRow";

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mail: "",
      password: "",
    };
  }
  componentDidMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyA-qekKsUlYP9jtabu4AtnqZ1FocfH8tl8",
      authDomain: "series-5baf2.firebaseapp.com",
      databaseURL: "https://series-5baf2.firebaseio.com",
      projectId: "series-5baf2",
      storageBucket: "series-5baf2.appspot.com",
      messagingSenderId: "906474762899",
      appId: "1:906474762899:web:48fbfbb9c6e61198539366",
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  onChangeHandler(field, value) {
    this.setState({
      [field]: value,
    });
  }

  tryLogin() {
    console.log(this.state);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="light" />
        <FormRow first>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={this.state.mail}
            onChangeText={(value) => this.onChangeHandler("mail", value)}
          />
        </FormRow>

        <FormRow last>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(value) => this.onChangeHandler("password", value)}
          />
        </FormRow>

        <Button title="Entrar" onPress={() => this.tryLogin()} />
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
