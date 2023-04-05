import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import BackArrow from "../../../assets/icons/Back-Arrow";
import BookMark from "../../../assets/icons/BookMark";

const PageHeader = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <BackArrow fill="white" width={20} height={20} />
      </Pressable>
      <Text style={styles.headerText}>Detail</Text>
      <Pressable>
        <BookMark fill="white" width={18} height={24} />
      </Pressable>
    </View>
  );
};

export default PageHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor:"pink"
  },
  headerText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 19.5,
    fontFamily: "Montserrat-Font",
  },
});
