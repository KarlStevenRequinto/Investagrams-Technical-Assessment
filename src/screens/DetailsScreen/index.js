import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PageHeader from "../../components/PageHeader";
import { useNavigation, useRoute } from "@react-navigation/native";

const DetailsScreen = () => {
  const route = useRoute();
  const movieId = route.params.id;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <PageHeader
        goBackPress={() => {
          navigation.goBack();
        }}
      />

      <View>
        <Text>{movieId}</Text>
      </View>

      <View></View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 24,
    backgroundColor: "#242A32",
  },
});
