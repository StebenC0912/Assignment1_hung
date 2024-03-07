import { LinearGradient } from "expo-linear-gradient";

export const GradientWinner = ({ children }) => {
    return <LinearGradient
    // Background Linear Gradient
    colors={["#85f2a2", "#a6e1f5"]}
    style={{
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      height: "100%",
    }}
  ></LinearGradient>;
};

export default GradientWinner;