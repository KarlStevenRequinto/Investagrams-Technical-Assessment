import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import BackArrow from "../../../assets/icons/Back-Arrow";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import Icon from "react-native-vector-icons/Entypo";
const LogInScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/logo.png")}
        style={styles.image}
      />
      <View style={styles.loginSectionStyle}>
        <Pressable style={styles.headerContainer}>
          <BackArrow width={30} height={30} fill={"white"} />
          <Text style={styles.headerText}>Login</Text>
        </Pressable>
        <Text style={styles.subText}>Enter your login credentials</Text>

        <View style={styles.textInputContainer}>
          {/* EMAIL VALIDATION NEEDED */}
          <Text style={styles.textInputTitle}>Email</Text>
          <CustomTextInput placeholder="Enter your email" width={"100%"} />
        </View>
        <View style={styles.textInputContainer}>
          {/* PASSWORD VALIDATION NEEDED */}
          <Text style={styles.textInputTitle}>Password</Text>

          {/* CHANGE ICON IF CLICKED */}
          <CustomTextInput
            placeholder="Enter your password"
            iconPlaceholder={
              <Icon name="eye-with-line" size={20} color="white" />
            }
            width={"100%"}
          />
        </View>
        <View style={styles.btnContainer}>
          <CustomButton
            btnTitle={"Login"}
            btnStyle={styles.loginBtnStyle}
            onPressHandler={() => {
              navigation.navigate("HomeTabs");
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnContainer: {
    flex: 1,
    paddingTop: 30,
    marginVertical: 20,
    alignItems: "center",
  },
  textInputContainer: {
    marginTop: 12,
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
  textInputTitle: {
    color: "white",
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    marginBottom: 4,
  },
});
