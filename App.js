import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/screens/homeScreen";
import { MainGameScreen } from "./src/screens/mainGameScreen";
import { WinnerScreen } from "./src/screens/winnerScreen";
const stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <stack.Screen name="Home" component={HomeScreen} />
        <stack.Screen name="MainGame" component={MainGameScreen} />
        <stack.Screen name="Winner" component={WinnerScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
