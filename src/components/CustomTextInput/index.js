import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
} from "react-native";
import { useState } from "react";

const CustomTextInput = ({
  placeholder,
  iconPlaceholder,
  textInputContainerStyle,
  width,
  onTextChange,
}) => {
  const [text, setText] = useState();

  const handleTextChange = (newText) => {
    setText(newText);
    onTextChange && onTextChange(newText); // Call the onTextChange prop with the new text value
  };

  return (
    <View style={[styles.container, textInputContainerStyle]}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={"#67686D"}
        style={[
          styles.placeholderText,
          { width: width },
          Platform.select({ web: { outlineWidth: 0 } }),
        ]}
        onChangeText={handleTextChange}
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
    alignItems: "center",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    fontFamily: "Poppins-Regular",
    color: "white",
    flex: 1,
  },
});
