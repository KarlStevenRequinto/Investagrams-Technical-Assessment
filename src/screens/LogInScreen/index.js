import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import Icon from "react-native-vector-icons/Entypo";

const LogInScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordHidden, setPasswordHidden] = useState(true);
  const handleEmailEntry = (newText) => {
    setEmail(newText);
  };

  const handlePasswordEntry = (newText) => {
    setPassword(newText);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/logo.png")}
        style={styles.image}
      />
      <View style={styles.loginSectionStyle}>
        <Pressable style={styles.headerContainer}>
          <Text style={styles.headerText}>Login</Text>
        </Pressable>
        <Text style={styles.subText}>Enter your login credentials</Text>

        <View style={styles.textInputContainer}>
          {/* EMAIL VALIDATION NEEDED */}
          <Text style={styles.textInputTitle}>Email</Text>
          <CustomTextInput
            placeholder="Enter your email"
            width={"100%"}
            onTextChange={handleEmailEntry}
          />
        </View>
        <View style={styles.textInputContainer}>
          {/* PASSWORD VALIDATION NEEDED */}
          <Text style={styles.textInputTitle}>Password</Text>

          {/* CHANGE ICON IF CLICKED */}
          <CustomTextInput
            placeholder="Enter your password"
            iconPlaceholder={
              <TouchableOpacity
                onPress={() => {
                  setPasswordHidden(!passwordHidden);
                }}
              >
                <Icon
                  name={passwordHidden ? "eye-with-line" : "eye"}
                  size={20}
                  color="grey"
                />
              </TouchableOpacity>
            }
            width={"100%"}
            onTextChange={handlePasswordEntry}
            secureTextEntry={passwordHidden}
          />
        </View>
        <View style={styles.btnContainer}>
          <CustomButton
            btnTitle={"Login"}
            btnStyle={styles.loginBtnStyle}
            onPressHandler={() => {
              // TEMPORARY SOLUTION FOR LOGIN
              if (email && password) {
                navigation.navigate("HomeTabs");
              } else {
                return;
              }
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
  },
  subText: {
    marginVertical: 8,
    color: "#3A3F47",
    fontFamily: "Poppins-Regular",
  },
  textInputTitle: {
    color: "white",
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    marginBottom: 4,
  },
});
