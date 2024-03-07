import React, { useState, useEffect } from "react";
import { View, SafeAreaView, Text, FlatList, Pressable } from "react-native";
import GradientBackground from "../components/gradientBackground";
import Ionicons from "react-native-vector-icons/Ionicons";
import ItemScoreComponent from "../components/itemScoreComponent.js";
import { Alert } from "react-native";
import { mainGameStyles as styles } from "../constants/mainGameStyles.js";
let max = 100,
  min = 0,
  i = 0;
let opponentGuess;
let dataList = [];
let listView = [];
export function MainGameScreen(props) {
  const userInput = props.route.params.userNumber;
  const [dataList, setDataList] = useState([]);
  const [opponentGuess, setOppentGuess] = useState(randomInt(min, max));
  useEffect(() => {
    if (opponentGuess === userInput) {
      i++;
      max = 100;
      min = 0;
      while (dataList.length > 0) {
        dataList.pop();
        listView.pop();
      }
      setDataList([]);
      props.navigation.navigate("Winner", { rounds: i, guess: opponentGuess });
      i = 0;
    }
  }, [opponentGuess, userInput]);
  const handleReload = () => {
    setOppentGuess(randomInt(min, max));
    i++;
    dataList.push({ key: i, name: opponentGuess });
    while (listView.length > 0) {
      listView.pop();
    }
    dataList.forEach((item) => {
      listView.push(item);
    });
  };
  const handleWrong = (e) => {
    Alert.alert("Are you sure?", "That's not the right answer. Try again!", [
      {
        text: "Close",
        onPress: () => console.log("Cancel Pressed"),
      },
    ]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <GradientBackground />
      <Text style={styles.title}>Opponent's Guess</Text>
      <Text style={styles.opponentGuess}>{opponentGuess}</Text>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => {
            if (opponentGuess > userInput) {
              max = opponentGuess;
              handleReload();
            } else {
              handleWrong();
            }
          }}
        >
          <Ionicons name="remove" size={35} color={"white"}></Ionicons>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            if (opponentGuess < userInput) {
              min = opponentGuess;
              handleReload();
            } else {
              handleWrong();
            }
          }}
        >
          <Ionicons name="add" size={35} color={"white"}></Ionicons>
        </Pressable>
      </View>
      <FlatList
        style={styles.flatList}
        data={listView.reverse()}
        renderItem={({ item }) =>
          ItemScoreComponent({ key: item.key, guess: item.name })
        }
      />
    </SafeAreaView>
  );
}
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min - 1)) + min + 1;
}
