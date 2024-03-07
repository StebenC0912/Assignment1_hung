import React from "react";


import { View, Text, StyleSheet } from "react-native";

export default function itemScoreComponent(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>#{props.key}</Text>
      <Text style={styles.text}>Opponent Guess {props.guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 8,
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
    width: "100%",
  },
  text: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
});