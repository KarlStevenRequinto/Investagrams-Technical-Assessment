import {
  Text,
  View,
  TouchableOpacity,
  Animated,
  Pressable,
  Modal,
  FlatList,
} from "react-native";
import { useEffect, useState, useRef, useContext } from "react";
import { getMovieDetails, getReviews } from "../../utils/api-calls";
import { Image } from "expo-image";
import { WatchlistContext } from "../../../store/context";
import PageHeader from "../../components/PageHeader";
import Star from "../../../assets/icons/Star";
import Clock from "../../../assets/icons/Clock";
import CalendarIcon from "../../../assets/icons/CalendarIcon";
import CustomButton from "../../components/CustomButton";
import Heart from "../../../assets/icons/Heart";
import StarRating from "../../../assets/icons/StarRating";
import BookMark from "../../../assets/icons/BookMark";
import styles from "./styles";

const DetailsScreen = ({ route, navigation }) => {
  const watchListsCtx = useContext(WatchlistContext);
  const movieId = route.params.id;

  const [containerWidth, setContainerWidth] = useState(0);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [openModal, setOpenModal] = useState(false);
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
  const [isStarHovered, setIsStarHovered] = useState(-1);
  const [rating, setRating] = useState("?");
  const [rateBtnDisabled, setRateBtnDisabled] = useState(true);
  const movieIsWatchListed = watchListsCtx.ids.includes(movieId);
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";

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

  useEffect(() => {
    getReviews(movieId)
      .then((response) => response.json())
      .then((result) => {
        setReviews(result.results);
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

  const rateMovie = (index) => {
    setRating(index + 1);
  };

  const watchListStatusHandler = () => {
    if (movieIsWatchListed) {
      watchListsCtx.removeWatchList(movieId);
    } else {
      watchListsCtx.addWatchList(movieId);
    }
  };

  const onSubmitMovieRating =(rating)=>{
    console.log(rating)
  }
  
  const RatingItem = ({ image, author, rating, content }) => {
    return (
      <View style={styles.reviewItemContainer}>
        <Image
          source={
            image.substr(0, 6) !== "/https"
              ? `${IMAGE_BASE_URL}w300${image}`
              : image.substring(1)
          }
          contentFit="cover"
          style={styles.authorImage}
        />
        <View
          style={{
            width: "100%",
            paddingHorizontal: 12,
          }}
        >
          <View style={{ flexDirection: "row", minWidth: 350 }}>
            <Text style={styles.reviewTexts}>Author: {author}</Text>
            <View style={{ flexDirection: "row", marginBottom: 12 }}>
              <Text
                style={[
                  styles.reviewTexts,
                  { marginLeft: 30, color: "#FF8700" },
                ]}
              >
                Rating: {rating}
              </Text>
              <Star width={16} height={16} stroke="#FF8700" fill="none" />
            </View>
          </View>
          <Text style={styles.reviewTexts}>{content}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <PageHeader
        goBackPress={() => {
          navigation.goBack();
        }}
        screen="Detail"
        children={<BookMark fill="white" width={18} height={24} />}
      />

      <View style={styles.posterContainer}>
        <View style={styles.coverPhotoContainer}>
          <Image
            source={`${IMAGE_BASE_URL}w500${movieObj?.coverPhoto}`}
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
            onPress={watchListStatusHandler}
          >
            <Heart
              width={30}
              height={30}
              stroke="#FF8700"
              fill={movieIsWatchListed ? "#FF8700" : "none"}
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
            style={[styles.rateBtn]}
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
          selectedButtonIndex === 1 &&
          (reviews.length === 0 ? (
            <View
              style={[
                styles.bottomContent,
                { justifyContent: "center", alignItems: "center" },
              ]}
            >
              <Text style={styles.about}>
                There are no reviews for this movie at the moment.
              </Text>
            </View>
          ) : (
            <FlatList
              data={reviews}
              renderItem={(item, index) => {
                const reviewItem = item.item;
                return (
                  <RatingItem
                    image={reviewItem.author_details.avatar_path}
                    author={reviewItem.author}
                    rating={reviewItem.author_details.rating}
                    content={reviewItem.content}
                  />
                );
              }}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
          ))
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
              <Text style={styles.rateNumber}>{rating}</Text>
            </View>
            <Text style={styles.rateThis}>RATE THIS</Text>
            <Text style={styles.ratingTitle}>{movieObj?.title}</Text>
            <View style={{ flexDirection: "row" }}>
              {stars.map((item, index) => {
                const isFilled = index <= isStarHovered;
                return (
                  <Pressable
                    onPress={() => {
                      setRateBtnDisabled(false);
                      rateMovie(index);
                    }}
                    key={index}
                    onMouseEnter={() => {
                      setIsStarHovered(index);
                    }}
                    onMouseLeave={() => {
                      if (rating !== "?") {
                        return;
                      } else {
                        setIsStarHovered(-1);
                      }
                    }}
                  >
                    <Star
                      key={index}
                      width={30}
                      height={30}
                      stroke={isFilled ? "#0296E5" : "white"}
                      fill={isFilled ? "#0296E5" : "none"}
                    />
                  </Pressable>
                );
              })}
            </View>
            <CustomButton
              btnTitle="Rate"
              btnTextStyle={{ color: rateBtnDisabled ? "grey" : "black" }}
              btnStyle={[
                styles.ratingBtn,
                {
                  backgroundColor: rateBtnDisabled
                    ? "hsla(0,0%,100%,.08)"
                    : "#FFB81C",
                },
              ]}
              disabled={rateBtnDisabled}
              onPressHandler={() => {
                onSubmitMovieRating(rating);
                setOpenModal(false);
              }}
            />
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

export default DetailsScreen;
