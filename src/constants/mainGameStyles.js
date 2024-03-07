import { StyleSheet } from "react-native";

export const mainGameStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    paddingTop: 30,
    color: "white",
    fontWeight: "bold",
    marginBottom: 40,
  },
  opponentGuess: {
    fontSize: 128,
    color: "white",
    borderBottomWidth: 6,
    borderColor: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    paddingHorizontal: 15,
    marginVertical: 20,
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    margin: 10,
    borderWidth: 1,
    borderColor: "white",
  },
  flatList: {
    width: "100%",
    paddingHorizontal: 20,
    flex: 1,
  },
});
