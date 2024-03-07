// styles.js
import { StyleSheet } from 'react-native';

const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    marginVertical: 10,
    marginTop: 50,
    fontWeight: 'bold',
    color: 'white',
  },
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 25,
    flex: 1,
  },
  selectNumberText: {
    fontSize: 20,
    marginVertical: 10,
    paddingTop: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  inputText: {
    textAlign: 'center',
    fontSize: 128,
    paddingBottom: 10,
    borderBottomWidth: 6,
    borderBottomColor: 'white',
    width: 190,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    paddingHorizontal: 15,
    marginVertical: 20,
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    alignItems: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  confirmButton: {
    backgroundColor: '#1cd478',
  },
  resetButton: {
    backgroundColor: '#d45f1c',
  },
});

export default HomeStyle;
