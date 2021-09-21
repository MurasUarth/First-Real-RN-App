import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import Card from "../components/Card";
import Colors from "../constants/colors";
import Input from "../components/Input";

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a new game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a number</Text>
        <Input maxLenght={2} keyboardType="number-pad" />
        <View style={styles.buttonContainer}>
          <View style={styles.button}><Button title="Reset" onPress={() => { }} color={Colors.secondary} /></View>
          <View style={styles.button}><Button title="Confirm" onPress={() => { }} color={Colors.primary} /></View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginVertical: 10,
  },
  input: {},
  button: {
    width: 100,
  },
});

export default StartGameScreen;