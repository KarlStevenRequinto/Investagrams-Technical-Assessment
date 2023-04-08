import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Pressable,
  Modal,
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
import StarRating from "../../../assets/icons/StarRating";
import styles from "./styles";

const DetailsScreen = () => {
  const route = useRoute();
  const movieId = route.params.id;
  const navigation = useNavigation();
  const [containerWidth, setContainerWidth] = useState(0);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
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
  const stars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
            onPress={() => {
              setOpenModal(true);
            }}
          >
            <Star width={20} height={20} stroke="#0296E5" fill="none" />
            <Text
              style={[styles.headerText, { color: "#0296E5", marginLeft: 4 }]}
            >
              Rate
            </Text>
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

      <Modal visible={openModal} transparent={true} animationType="fade">
        <Pressable
          style={styles.modalContainer}
          onPress={() => {
            setOpenModal(false);
          }}
        >
          <View style={styles.modalContent}>
            <View style={{ position: "absolute", top: -40 }}>
              <StarRating fill="#0296E5" />
              {/* rating number should be dynamic */}
              <Text
                style={{
                  position: "absolute",
                  top: "39%",
                  left: "44%",
                  fontSize: 20,
                  color: "white",
                  fontFamily: "Montserrat-Font",
                }}
              >
                ?
              </Text>
            </View>
            <Text style={styles.rateThis}>RATE THIS</Text>
            <Text style={styles.ratingTitle}>{movieObj?.title}</Text>
            <View style={{ flexDirection: "row" }}>
              {stars.map(() => {
                return (
                  <Star width={30} height={30} stroke="white" fill="none" />
                );
              })}
            </View>
            <CustomButton btnTitle="Rate" btnStyle={styles.ratingBtn} />
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

export default DetailsScreen;
