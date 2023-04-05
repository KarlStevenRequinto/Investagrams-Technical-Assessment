import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PageHeader from "../../components/PageHeader";

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <PageHeader />

      <View></View>

      <View></View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal:24,
    backgroundColor: "#242A32",
  },
});
