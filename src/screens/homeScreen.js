import React, { useState, useRef } from "react";
import { View, Text, SafeAreaView, Pressable, TextInput } from "react-native";
import HomeStyle from "../constants/homeStyle";
import GradientBackground from "../components/gradientBackground";
export const HomeScreen = (props) => {
  const [number, setNumber] = useState("");
  const numberInputRef = useRef(null);
  const resetInputHandler = () => {
    numberInputRef.current.clear();
    console.log("Reset");
  };
  const confirm = () => {
    const parsedNumber = parseInt(number, 10);
    if (isNaN(parsedNumber) || parsedNumber < 1 || parsedNumber >= 100) {
      console.log({ parsedNumber });
      alert("Please insert a number between 1 and 99");
    } else {
      numberInputRef.current.clear();
      console.log({ parsedNumber });
      props.navigation.navigate("MainGame", {
        userNumber: parsedNumber,
      });
    }
  };
  return (
    <SafeAreaView style={HomeStyle.container}>
      <GradientBackground />
      <Text style={HomeStyle.headerText}>Start a New Game!</Text>
      <View style={HomeStyle.mainContainer}>
        <Text style={HomeStyle.selectNumberText}>Select a Number</Text>
        <TextInput
          ref={numberInputRef}
          keyboardType="numeric"
          onChangeText={(e) => setNumber(e)}
          style={HomeStyle.inputText}
        />

        <View style={HomeStyle.buttonContainer}>
          <Pressable
            onPress={resetInputHandler}
            style={[HomeStyle.button, HomeStyle.resetButton]}
          >
            <Text style={[HomeStyle.buttonText]}>Reset</Text>
          </Pressable>
          <Pressable
            onPress={confirm}
            style={[HomeStyle.button, HomeStyle.confirmButton]}
          >
            <Text style={HomeStyle.buttonText}>Confirm</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
