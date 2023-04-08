import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import BackArrow from "../../../assets/icons/Back-Arrow";
import BookMark from "../../../assets/icons/BookMark";
import Star from "../../../assets/icons/Star";

const PageHeader = ({ goBackPress, iconPress, children, screen }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={goBackPress}>
        <BackArrow fill="white" width={20} height={20} />
      </Pressable>
      <Text style={styles.headerText}>{screen}</Text>
      <Pressable onPress={iconPress}>{children}</Pressable>
    </View>
  );
};

export default PageHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 19.5,
    fontFamily: "Montserrat-Font",
  },
});
