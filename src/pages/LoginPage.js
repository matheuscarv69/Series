import React from "react";
import { View, Text, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import FormRow from "../components/FormRow";


export default class LoginPage extends React.Component {
  render() {
    return (
      <View>
        <StatusBar style="light" />
        <FormRow>
          <TextInput />
        </FormRow>
        <FormRow>
          <TextInput />
        </FormRow>
      </View>
    );
  }
}
