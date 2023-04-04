import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const CustomButton = ({ onPressHandler, btnStyle, btnTitle, btnTextStyle }) => {
  return (
    <Pressable style={[styles.btnContainer, btnStyle]} onPress={onPressHandler}>
      <Text style={[styles.btnText, btnTextStyle]}>{btnTitle}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btnContainer: {
    width: "90%",
    height: 60,
    paddingVertical: 8,
    backgroundColor: "#FFB81C",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 20,
    fontWeight: "500",
    letterSpacing: 0.1,
  },
});
