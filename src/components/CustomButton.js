import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CustomButton = (props) => {
  const { onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text>Entrar</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
