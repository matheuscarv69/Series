import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight } from "react-native";

const CustomButton = (props) => {
  const { onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>ENTRAR</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    padding: 10,

    marginTop: 5,
    marginBottom: 5,

    borderRadius: 15,

    alignItems: "center",

    elevation: 1,
  },
  text: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CustomButton;
