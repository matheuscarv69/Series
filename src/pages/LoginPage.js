import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ActivityIndicator,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import firebase from "firebase";

import FormRow from "../components/FormRow";

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mail: "",
      password: "",
      isLoading: false,
      message: "",
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
    this.setState({ isLoading: true, message: "" });
    const { mail, password } = this.state;

    const loginUserSucess = (user) => {
      this.setState({ message: "Sucesso!" });
    };

    const loginUserFailed = (error) => {
      this.setState({
        message: this.getMessageByErrorCode(error.code),
      });
    };

    firebase
      .auth()
      .signInWithEmailAndPassword(mail, password)
      .then(loginUserSucess)
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          return Alert.alert(
            "Usuário não encontrado",
            "Deseja criar um cadastro com as informações inseridas?",
            [{
                text: "Não",
                onPress: () => console.log("Usuário não quer criar conta"),
                style: "cancel", //ios
              }, {
                text: "Sim",
                onPress: () => {
                  firebase
                    .auth()
                    .createUserWithEmailAndPassword(mail, password)
                    .then(loginUserSucess)
                    .catch(loginUserFailed);
                }
              }],
            { cancelable: false }
          )
          return;
        } 
        loginUserFailed(error);
        
      })
      .then(() => this.setState({ isLoading: false }));
  }

  getMessageByErrorCode(errorCode) {
    switch (errorCode) {
      case "auth/wrong-password":
        return "Senha incorreta";
      case "auth/user-not-found":
        return "Usuário não encontrado";
      case "auth/invalid-email":
        return "Email inválido";
      case "auth/email-already-in-use":
        return "O email informado já está sendo usado";
      case "auth/operation-not-allowed":
        return "Desenvolvedor, ative o email/senha no console do firebase";
      case "auth/weak-password":
        return "Senha informada muito fraca";
      default:
        return "Erro desconhecido";
    }
  }

  renderMessage() {
    const { message } = this.state;
    if (!message) return null;
    return (
      <View>
        <Text>{message}</Text>
      </View>
    );
  }

  renderButton() {
    if (this.state.isLoading) return <ActivityIndicator />;
    return <Button title="Entrar" onPress={() => this.tryLogin()} />;
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

        {this.renderButton()}
        {this.renderMessage()}
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
