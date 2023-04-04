import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const CustomTextInput = ({
  placeholder,
  iconPlaceholder,
  textInputContainerStyle,
}) => {
  return (
    <View style={[styles.container, textInputContainerStyle]}>
      <TextInput placeholder={placeholder} placeholderTextColor={"#67686D"} />
      <View style={styles.iconContainer}>{iconPlaceholder}</View>
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3A3F47",
    justifyContent: "center",
    padding: 12,
    borderRadius:8,
    flexDirection: "row",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
