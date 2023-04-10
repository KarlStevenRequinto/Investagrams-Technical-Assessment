import { FlatList, StyleSheet, Text, View } from "react-native";
import { useEffect, useContext, useState } from "react";
import PageHeader from "../../components/PageHeader";
import Star from "../../../assets/icons/Star";
import { useNavigation } from "@react-navigation/native";
import { WatchlistContext } from "../../../store/context";
import { getMovieDetails } from "../../utils/api-calls";
import { Image } from "expo-image";
import Ticket from "../../../assets/icons/Ticket";
import CalendarIcon from "../../../assets/icons/CalendarIcon";
import Clock from "../../../assets/icons/Clock";

const WatchlistScreen = () => {
  const navigation = useNavigation();
  const watchListsCtx = useContext(WatchlistContext);
  const [myWatchLists, setMyWatchLists] = useState([]);

  useEffect(() => {
    Promise.all(watchListsCtx.ids.map((id) => getMovieDetails(id)))
      .then((responses) => Promise.all(responses.map((res) => res.json())))
      .then((movies) => {
        const newWatchLists = movies.map((result) => ({
          id: result.id,
          title: result.original_title,
          rating: result.vote_average.toFixed(1),
          genres: result.genres,
          releaseDate: result.release_date,
          runtime: result.runtime,
          poster: result.poster_path,
        }));
        setMyWatchLists(newWatchLists);
      })
      .catch((error) => console.log(error));
  }, [watchListsCtx.ids]);

  const watchListedMovies = myWatchLists.filter((movie) =>
    watchListsCtx.ids.includes(movie.id)
  );

  const MovieItem = ({
    image,
    title,
    rating,
    genres,
    releaseDate,
    runtime,
  }) => {
    return (
      <View style={{ flexDirection: "row", marginVertical: 12 }}>
        <Image
          source={`https://image.tmdb.org/t/p/w300${image}`}
          contentFit="cover"
          transition={500}
          style={styles.image}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.movieTitle}>{title}</Text>
          <View style={styles.details}>
            <Star width={16} height={16} stroke="#FF8700" fill="none" />
            <Text style={styles.detailText}>{rating}</Text>
          </View>
          <View style={styles.details}>
            <Ticket width={16} height={16} stroke="white" />
            {genres.map((item, index) => {
              return (
                <Text style={styles.detailText} key={index}>
                  {item.name}
                  {index !== genres.length - 1 && <Text>,</Text>}
                </Text>
              );
            })}
          </View>
          <View style={styles.details}>
            <CalendarIcon width={16} height={16} stroke="white" />
            <Text style={styles.detailText}>{releaseDate}</Text>
          </View>
          <View style={styles.details}>
            <Clock width={16} height={16} stroke="white" />
            <Text style={styles.detailText}>{runtime} minutes</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <PageHeader
        screen="Watchlist"
        children={<Star fill="white" stroke="white" width={18} height={24} />}
        goBackPress={() => {
          navigation.goBack();
        }}
      />

      <FlatList
        data={watchListedMovies}
        renderItem={(movie) => {
          const item = movie.item;
          return (
            <MovieItem
              image={item.poster}
              title={item.title}
              rating={item.rating}
              genres={item.genres}
              releaseDate={item.releaseDate}
              runtime={item.runtime}
            />
            // <Text>{movie.item.title}</Text>
          );
        }}
        keyExtractor={(item) => item.id + 1}
        style={{ marginTop: 32 }}
      />
    </View>
  );
};

export default WatchlistScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#242A32",
    paddingTop: 30,
    flex: 1,
    paddingHorizontal: 24,
  },
  image: {
    minWidth: 95,
    width: 95,
    height: 120,
    borderRadius: 16,
  },
  details: {
    flexDirection: "row",
  },
  detailsContainer: {
    marginLeft: 12,
    justifyContent: "center",
  },
  detailText: {
    fontFamily: "Poppins-Regular",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 18,
    color: "white",
    marginLeft: 4,
  },
  movieTitle: {
    fontFamily: "Poppins-Regular",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
    color: "white",
    marginBottom: 14,
  },
});
