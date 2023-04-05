import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import HomeScreen from "./src/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation";
import DetailsScreen from "./src/screens/DetailsScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Montserrat-Font": require("./assets/fonts/Montserrat-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    // <NavigationContainer>
    //   {/* <View style={styles.container}> */}
    //     <RootNavigator/>
    //     {/* <HomeScreen /> */}
    //     <StatusBar style="light" />
    //   {/* </View> */}
    // </NavigationContainer>
    <DetailsScreen />
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
