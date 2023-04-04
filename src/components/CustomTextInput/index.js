import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const CustomTextInput = ({
  placeholder,
  iconPlaceholder,
  textInputContainerStyle,
  width,
}) => {
  return (
    <View style={[styles.container, textInputContainerStyle]}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={"#67686D"}
        style={[styles.placeholderText, { width: width }]}
      />
    
      {iconPlaceholder && (
        <Pressable style={styles.iconContainer}>{iconPlaceholder}</Pressable>
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
    position: "absolute",
    right: 15,
    bottom:12,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    fontFamily: "Poppins-Regular",
    color: "white",
  },
});
