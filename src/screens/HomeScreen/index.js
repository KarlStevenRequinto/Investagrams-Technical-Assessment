import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomTextInput from "../../components/CustomTextInput";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleHeader}>What do you want to watch?</Text>

      <CustomTextInput
        textInputContainerStyle={styles.textInputStyle}
        placeholder="Search"
        width={"100%"}
      />
      <View style={styles.trendingContainer}></View>
      <View style={styles.listsContainer}></View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#242A32",
    paddingTop: 30,
    flex: 1,
    paddingHorizontal: 24,
  },
  trendingContainer: {
    flex: 1,
    backgroundColor: "red",
  },
  listsContainer: {
    flex: 1,
    backgroundColor: "orange",
  },
  titleHeader: {
    fontFamily: "Poppins-Regular",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 27,
    color: "white",
  },
  textInputStyle: {
    borderRadius: 16,
  },
});
