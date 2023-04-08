import { StyleSheet } from "react-native";

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
  modalContainer: {
    flex: 1,
    minWidth:340,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    
  },
  modalContent: {
    height: "30%",
    width: "90%",
    backgroundColor: "#1f1f1f",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  rateThis: {
    position: "absolute",
    top: 60,
    fontFamily: "Montserrat-Font",
    fontWeight: "800",
    color: "#FFB81C",
    fontSize: 12,
    letterSpacing: 0.12,
    lineHeight: 16,
  },
  ratingTitle:{
    fontFamily:"Poppins-Regular",
    fontWeight:"400",
    color:"white",
    fontSize:20,
    marginBottom:20
  },
  ratingBtn:{
    position:"absolute",
    bottom:30,
    height:36,
    width:"65%",
    minWidth:300
  }
});

export default styles;
