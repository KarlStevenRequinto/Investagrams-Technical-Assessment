import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "./src/components/CustomButton";
import CustomTextInput from "./src/components/CustomTextInput";
import { useFonts } from "expo-font";
import LogInScreen from "./src/screens/LogInScreen";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <LogInScreen/> */}
      <HomeScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242A32",
    alignItems: "center",
    justifyContent: "center",
  },
});
