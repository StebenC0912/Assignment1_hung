import { StyleSheet } from "react-native";

export const winnerScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 20,
  },
  image: {
    width: "90%",
    height: 380,
    margin: 20,
  },
  description: {
    fontSize: 20,
    textAlign: "center",
    margin: 20,
  },
  button: {
    backgroundColor: "#32a852",
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },
});
