import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getMovieDetails } from "../../utils/api-calls";
import { Image } from "expo-image";
import Star from "../../../assets/icons/Star";
import Clock from "../../../assets/icons/Clock";
import CalendarIcon from "../../../assets/icons/CalendarIcon";
import Ticket from "../../../assets/icons/Ticket";

const DetailsScreen = () => {
  const route = useRoute();
  const movieId = route.params.id;
  const navigation = useNavigation();

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

      <View
        style={{
          backgroundColor: "red",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={styles.headerDescription}>
          <CalendarIcon width={18} height={18} stroke="#92929D" />
          <Text>{movieObj?.releaseDate.split("-")[0]}</Text>
          <Text>|</Text>
          <Clock width={18} height={18} stroke="#92929D" />
          <Text>{movieObj?.runtime} Minutes</Text>
        </View>
      </View>
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
  },
});
