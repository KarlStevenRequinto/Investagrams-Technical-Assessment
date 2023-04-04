import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import BackArrow from "../../../assets/icons/Back-Arrow";

const LogInScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/logo.png")}
        style={styles.image}
      />
      <View style={styles.loginSectionStyle}>
        <BackArrow width={20} height={20} fill={"white"}/>
      </View>
    </View>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({
  container: { flex: 1, width: "100%" },
  image: {
    width: "100%",
    height: 300,
  },
  loginSectionStyle: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
});
