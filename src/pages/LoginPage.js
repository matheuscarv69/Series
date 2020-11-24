import React from "react";
import { View, TextInput, StyleSheet, Button, ActivityIndicator } from "react-native";
import { StatusBar } from "expo-status-bar";
import firebase from 'firebase';

import FormRow from "../components/FormRow";

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mail: '',
      password: '',
      isLoading: false,
    };
  }
  componentDidMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyA-qekKsUlYP9jtabu4AtnqZ1FocfH8tl8",
      authDomain: "series-5baf2.firebaseapp.com",
      databaseURL: "https://series-5baf2.firebaseio.com",
      projectId: "series-5baf2",
      storageBucket: "series-5baf2.appspot.com",
      messagingSenderId: "906474762899",
      appId: "1:906474762899:web:48fbfbb9c6e61198539366",
    };
    // Initialize Firebase
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
    
  }

  onChangeHandler(field, value) {
    this.setState({
      [field]: value,
    });
  }

  tryLogin() {
    this.setState({ isLoading: true });
    const { mail, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(mail, password)
      .then(user => {
        console.log('Usuário autenticado', user);
      })
      .catch(error => {
        console.log('Usuário não encontrado', error);
      })
      .then(() => this.setState({ isLoading: false }));
  
  }

  renderButton(){
    if(this.state.isLoading)
      return <ActivityIndicator />;
    return (
      <Button 
        title="Entrar" 
        onPress={() => this.tryLogin()}/> 
    );
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
        
        { this.renderButton() }
        
        
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
