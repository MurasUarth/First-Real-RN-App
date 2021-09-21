import React from "react";
import { View, StyleSheet } from "react-native";

const Card = props => {
  return (<View style={{ ...styles.card, ...props.style }}>{props.children}</View>)
}

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 8,
    padding: 20,
    borderRadius: 12,
    backgroundColor: 'white',
  }
});

export default Card;