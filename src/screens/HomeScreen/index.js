import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Animated,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import { useEffect, useState, useRef } from "react";
import CustomTextInput from "../../components/CustomTextInput";
import {
  getTrending,
  getUpcoming,
  getPopular,
  getTopRated,
} from "../../utils/api-calls";

const HomeScreen = () => {
  const [trendingList, setTrendingList] = useState([]);
  const [upcomingList, setUpcomingList] = useState([]);
  const [popularList, setPopularList] = useState([]);
  const [topRatedList, setTopRatedList] = useState([]);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const indicatorPosition = useRef(new Animated.Value(0)).current;

  const buttonWidth = containerWidth / 3;

  const handlePress = (index) => {
    setSelectedButtonIndex(index);
    Animated.timing(indicatorPosition, {
      toValue: index,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    getTrending()
      .then((response) => response.json())
      .then((result) => {
        const items = result.results.map((item) => {
          const movieItem = {
            id: item.id,
            backdrop: item.poster_path,
            title: item.title,
          };
          return movieItem;
        });
        setTrendingList(items);
      })
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    getUpcoming()
      .then((response) => response.json())
      .then((result) => {
        const upcoming = result.results.map((item) => {
          const upcomingItem = {
            id: item.id,
            backdrop: item.poster_path,
            title: item.title,
          };
          return upcomingItem;
        });
        setUpcomingList(upcoming);
      });
  }, []);

  useEffect(() => {
    getPopular()
      .then((response) => response.json())
      .then((result) => {
        const popular = result.results.map((item) => {
          const popularItem = {
            id: item.id,
            backdrop: item.poster_path,
            title: item.title,
          };
          return popularItem;
        });
        setPopularList(popular);
      });
  }, []);

  useEffect(() => {
    getTopRated()
      .then((response) => response.json())
      .then((result) => {
        const topRated = result.results.map((item) => {
          const topRatedItem = {
            id: item.id,
            backdrop: item.poster_path,
            title: item.title,
          };
          return topRatedItem;
        });
        setTopRatedList(topRated);
      });
  }, []);

  useEffect(() => {
    console.log(popularList);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titleHeader}>What do you want to watch?</Text>

      {/* SEARCH MOVIES BY TITLE */}
      <CustomTextInput
        textInputContainerStyle={styles.textInputStyle}
        placeholder="Search"
        width={"100%"}
      />
      <View style={styles.trendingContainer}>
        <Text style={[styles.titleHeader, { fontSize: 14, fontWeight: "400" }]}>
          What's trending right now?
        </Text>

        <FlatList
          data={trendingList}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.imageContainer}>
                <Image
                  source={`https://image.tmdb.org/t/p/w500/${item.backdrop}`}
                  contentFit="cover"
                  transition={500}
                  style={styles.image}
                />
                <Text style={styles.imgIndex}>{index + 1}</Text>
              </View>
            );
          }}
          horizontal
          keyExtractor={(item) => item.id}
        />
      </View>

      <View
        style={styles.listsContainer}
        onLayout={(event) => setContainerWidth(event.nativeEvent.layout.width)}
      >
        <View style={styles.bottomHeaders}>
          <TouchableOpacity onPress={() => handlePress(0)}>
            <Text style={styles.headerText}>Upcoming</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress(1)}>
            <Text style={styles.headerText}>Popular</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress(2)}>
            <Text style={styles.headerText}>Top Rated</Text>
          </TouchableOpacity>
          <Animated.View
            style={[
              styles.indicator,
              {
                width: buttonWidth,
                left: indicatorPosition.interpolate({
                  inputRange: [0, 1, 2],
                  outputRange: [0, buttonWidth, buttonWidth * 2],
                }),
              },
            ]}
          />
        </View>
        {selectedButtonIndex === 0 ? (
          <View style={styles.bottomContent}>
            <FlatList
              data={upcomingList}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity style={{ marginRight: 10, marginTop: 10 }}>
                    <Image
                      source={`https://image.tmdb.org/t/p/w500/${item.backdrop}`}
                      contentFit="cover"
                      transition={500}
                      style={{ width: 100, height: 200, borderRadius: 12 }}
                    />
                  </TouchableOpacity>
                );
              }}
              horizontal
              keyExtractor={(item) => item.id}
            />
          </View>
        ) : selectedButtonIndex === 1 ? (
          <View style={styles.bottomContent}>
            <FlatList
              data={popularList}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity style={{ marginRight: 10, marginTop: 10 }}>
                    <Image
                      source={`https://image.tmdb.org/t/p/w500/${item.backdrop}`}
                      contentFit="cover"
                      transition={500}
                      style={{ width: 100, height: 200, borderRadius: 12 }}
                    />
                  </TouchableOpacity>
                );
              }}
              horizontal
              keyExtractor={(item) => item.id}
            />
          </View>
        ) : (
          <View style={styles.bottomContent}>
            <FlatList
              data={topRatedList}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity style={{ marginRight: 10, marginTop: 10 }}>
                    <Image
                      source={`https://image.tmdb.org/t/p/w500/${item.backdrop}`}
                      contentFit="cover"
                      transition={500}
                      style={{ width: 150, height: 200, borderRadius: 12 }}
                    />
                    {/* STARS FOR RATINGS */}
                  </TouchableOpacity>
                );
              }}
              horizontal
              keyExtractor={(item) => item.id}
            />
          </View>
        )}
      </View>
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
    flex: 1.5,
    marginTop: 12,
    // backgroundColor: "red",
  },
  listsContainer: {
    flex: 1,
    backgroundColor: "orange",
    overflow: "hidden",
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
    marginTop: 12,
  },
  imageContainer: {
    paddingBottom: 20,
    paddingLeft: 15,
    backgroundColor: "pink",
    marginHorizontal: 4,
  },
  image: {
    width: 250,
    height: 400,
    borderRadius: 16,
  },
  imgIndex: {
    position: "absolute",
    bottom: 0,
    left: -8,
    fontSize: 150,
    fontFamily: "Poppins-Regular",
    lineHeight: 150,
    backgroundColor: "red",
  },
  bottomHeaders: {
    marginTop: 5,
    flexDirection: "row",
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "space-around",
  },
  headerText: {
    fontSize: 20,
    fontFamily: "Poppins-Regular",
    color: "white",
  },
  indicator: {
    position: "absolute",
    bottom: -12,
    height: 8,
    width: "33.33%",
    borderRadius: 8,
    backgroundColor: "white",
  },
  bottomContent: {
    marginTop: 15,
    backgroundColor: "skyblue",
  },
});
