import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = props => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
}

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderColor: 'black',
    borderRadius: 12,
    borderWidth: 1,
    marginVertical: 10,
    width: 50,
    textAlign: 'center',
  }
})

export default Input;