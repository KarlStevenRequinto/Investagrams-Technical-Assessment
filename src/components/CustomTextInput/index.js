import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const CustomTextInput = ({
  placeholder,
  iconPlaceholder,
  textInputContainerStyle,
}) => {
  return (
    <View style={[styles.container, textInputContainerStyle]}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={"#67686D"}
        style={styles.placeholderText}
      />
      {iconPlaceholder && (
        <View style={styles.iconContainer}>{iconPlaceholder}</View>
      )}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3A3F47",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    flexDirection: "row",
    
  },
  iconContainer: {
    position:"absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  
  },
  placeholderText: {
    fontFamily: "Poppins-Regular",
  },
});
