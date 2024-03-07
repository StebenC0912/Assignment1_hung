import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { winnerScreenStyles as styles } from "../constants/winnerScreenStyle";
import GradientWinner from "../components/gradientWinner";
export const WinnerScreen = (props) => {
  return (
    <View style={styles.container}>
        <GradientWinner />
      <Text style={styles.title}>The game is over</Text>
      <Image source={require("../assets/winner.png")} style={styles.image} />
      <Text style={styles.description}>
        Your phone took {props.route.params.rounds} rounds to guess the number {props.route.params.guess}.
      </Text>
      <Pressable
        onPress={() => props.navigation.navigate("Home")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>New game</Text>
      </Pressable>
    </View>
  );
};
