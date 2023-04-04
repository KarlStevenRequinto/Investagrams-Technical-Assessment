import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import BackArrow from "../../../assets/icons/Back-Arrow";
import CustomTextInput from "../../components/CustomTextInput";

const LogInScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/logo.png")}
        style={styles.image}
      />
      <View style={styles.loginSectionStyle}>
        <View style={styles.headerContainer}>
          <BackArrow width={30} height={30} fill={"white"} />
          <Text style={styles.headerText}>Login</Text>
        </View>
        <Text style={styles.subText}>Enter your login credentials</Text>

        <View>
          <Text style={styles.textInputTitle}>Email</Text>
          <CustomTextInput placeholder="Enter your email"/>
        </View>
        <View>
          <Text style={styles.textInputTitle}>Password</Text>
          <CustomTextInput placeholder="Enter your password" iconPlaceholder={<Text>asd</Text>}/>
        </View>
      </View>
    </View>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({
  container: { flex: 1, width: "100%" },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "pink",
  },
  image: {
    width: "100%",
    height: 300,
  },
  loginSectionStyle: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 40,
    backgroundColor: "#1E1E1E",
  },
  headerText: {
    fontFamily: "Poppins-Regular",
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: "white",
    paddingLeft: 12,
  },
  subText: {
    marginVertical: 8,
    color: "#3A3F47",
    fontFamily: "Poppins-Regular",
    marginLeft: 45,
  },
  textInputTitle: {},
});
