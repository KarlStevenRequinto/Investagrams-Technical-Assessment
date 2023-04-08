import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Pressable,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import PageHeader from "../../components/PageHeader";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getMovieDetails } from "../../utils/api-calls";
import { Image } from "expo-image";
import Star from "../../../assets/icons/Star";
import Clock from "../../../assets/icons/Clock";
import CalendarIcon from "../../../assets/icons/CalendarIcon";
import CustomButton from "../../components/CustomButton";
import Heart from "../../../assets/icons/Heart";

const DetailsScreen = () => {
  const route = useRoute();
  const movieId = route.params.id;
  const navigation = useNavigation();
  const [containerWidth, setContainerWidth] = useState(0);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);
  const [watchlisted, setWatchlisted] = useState(false);
  const [movieObj, setMovieObj] = useState({
    id: "",
    coverPhoto: "",
    poster: "",
    title: "",
    releaseDate: "",
    runtime: "",
    genres: [],
    about: "",
    rating: "",
  });
  const indicatorPosition = useRef(new Animated.Value(0)).current;
  const buttonWidth = containerWidth / 2.6;

  useEffect(() => {
    getMovieDetails(movieId)
      .then((response) => response.json())
      .then((result) => {
        const movie = {
          id: result.id,
          coverPhoto: result.backdrop_path,
          poster: result.poster_path,
          title: result.original_title,
          releaseDate: result.release_date,
          runtime: result.runtime,
          genres: result.genres,
          about: result.overview,
          rating: result.vote_average.toFixed(1),
        };
        setMovieObj(movie);
      });
  }, []);

  const handlePress = (index) => {
    setSelectedButtonIndex(index);
    Animated.timing(indicatorPosition, {
      toValue: index,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <PageHeader
        goBackPress={() => {
          navigation.goBack();
        }}
      />

      <View style={styles.posterContainer}>
        <View style={styles.coverPhotoContainer}>
          <Image
            source={`https://image.tmdb.org/t/p/w500${movieObj?.coverPhoto}`}
            contentFit="cover"
            transition={500}
            style={styles.image}
          />
          <View style={styles.ratingContainer}>
            <Star width={16} height={16} stroke="#FF8700" />
            <Text style={styles.ratingText}>{movieObj?.rating.toString()}</Text>
          </View>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.movieTitle}>{movieObj?.title}</Text>
        </View>

        <View style={styles.posterImage}>
          <Image
            source={`https://image.tmdb.org/t/p/w200${movieObj?.poster}`}
            style={styles.poster}
            contentFit="cover"
            tran
            sition={500}
          />
        </View>
      </View>

      <View style={styles.descContainer}>
        <View style={styles.headerDescription}>
          <CalendarIcon width={18} height={18} stroke="#92929D" />
          <Text style={styles.descriptionText}>
            {movieObj?.releaseDate.split("-")[0]}
          </Text>
          <Text
            style={[
              styles.descriptionText,
              { marginHorizontal: 10, marginBottom: 2 },
            ]}
          >
            |
          </Text>
          <Clock width={18} height={18} stroke="#92929D" />
          <Text style={styles.descriptionText}>
            {movieObj?.runtime} Minutes
          </Text>
          <Pressable
            style={{ marginLeft: 20 }}
            onPress={() => {
              setWatchlisted(!watchlisted);
            }}
          >
            <Heart
              width={30}
              height={30}
              stroke="#FF8700"
              fill={watchlisted ? "#FF8700" : "none"}
            />
          </Pressable>
        </View>
      </View>

      <View
        style={{ flex: 1, overflow: "hidden" }}
        onLayout={(event) => setContainerWidth(event.nativeEvent.layout.width)}
      >
        <View style={styles.bottomHeaders}>
          <TouchableOpacity onPress={() => handlePress(0)}>
            <Text style={styles.headerText}>About Movie</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress(1)}>
            <Text style={styles.headerText}>Reviews</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 12,
              borderRadius: 8,
              borderWidth: 2,
              borderColor: "#0296E5",
            }}
          >
            <Star width={20} height={20} stroke="#0296E5" fill="none" />
            <Text style={[styles.headerText, { color: "#0296E5",marginLeft:4 }]}>Rate</Text>
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
            <Text style={styles.about}>{movieObj?.about}</Text>
          </View>
        ) : (
          selectedButtonIndex === 1 && (
            <View style={styles.bottomContent}>
              <Text>selectedButtonIndex 2</Text>
            </View>
          )
        )}
      </View>

      <CustomButton
        btnTitle="Go To Watchlist"
        btnStyle={styles.watchlistBtn}
        onPressHandler={() => {
          navigation.navigate("Watchlist");
        }}
      />
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 24,
    backgroundColor: "#242A32",
  },
  posterContainer: { marginTop: 30 },
  coverPhotoContainer: {
    overflow: "hidden",
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
  },
  image: {
    width: "100%",
    height: 400,
  },
  posterImage: {
    position: "absolute",
    bottom: 0,
    left: 30,
  },
  poster: {
    width: 95,
    height: 120,
  },
  ratingContainer: {
    position: "absolute",
    bottom: 12,
    right: 12,
    backgroundColor: "rgba(37, 40, 54, 0.32)",
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  descContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    marginTop: 16,
    marginBottom: 24,
  },
  ratingText: {
    color: "#FF8700",
    fontFamily: "Montserrat-Font",
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 14.63,
    letterSpacing: 0.12,
    marginLeft: 4,
  },
  movieTitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 27,
    color: "white",
    marginLeft: 137,
  },
  titleContainer: {
    height: 60,
    justifyContent: "center",
  },
  headerDescription: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomHeaders: {
    flexDirection: "row",
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
    height: 4,
    borderRadius: 8,
    backgroundColor: "#3A3F47",
  },
  bottomContent: {
    marginTop: 35,
  },
  about: {
    fontFamily: "Poppins-Regular",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 18,
    color: "white",
  },
  watchlistBtn: {
    width: "90%",
    alignSelf: "center",
  },
  descriptionText: {
    fontFamily: "Montserrat-Font",
    fontWeight: "500",
    fontSize: 14,
    letterSpacing: 0.12,
    lineHeight: 14.63,
    marginHorizontal: 8,
    color: "#92929D",
  },
});
