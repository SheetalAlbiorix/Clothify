import { StyleSheet } from "react-native";
import { Colors } from "../utils/Colors";

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 40,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationIcon: {
    width: 18,
    height: 18,
    marginRight: 5,
  },
  locationText: {
    fontSize: 16,
    fontWeight: "600",
  },
  notificationIcon: {
    width: 24,
    height: 24,
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: Colors.lightgrey,
    borderRadius: 10,
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  searchIcon: {
    width: 18,
    height: 18,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  filterIcon: {
    width: 20,
    height: 20,
  },
  bannerContainer: {
    backgroundColor: Colors.mediumbrown,
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  bannerSubtitle: {
    fontSize: 14,
    color: Colors.darkgray,
    marginBottom: 5,
  },
  shopNowButton: {
    backgroundColor: Colors.brown,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  shopNowText: {
    color: "white",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
  flashSaleHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flashSaleItem: {
    width: 140,
    marginRight: 10,
  },
  flashSaleImage: {
    width: "100%",
    height: 140,
    borderRadius: 10,
  },
  flashSaleTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  flashSalePrice: {
    fontSize: 14,
    color: Colors.darkbrown,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  bottomIcon: {
    width: 24,
    height: 24,
  },
  bottomIconActive: {
    width: 28,
    height: 28,
    tintColor: Colors.brown,
  },
  categoryItem: {
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
    borderRadius: 10,
    backgroundColor: Colors.lightgrey,
    marginRight: 10,
    marginBottom: 10
  },
  categoryIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  categoryText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "600",
    color: Colors.darkgray,
  },
  timerText: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.red,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  starIcon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.darkgray,
  },
  ImageBanner: {
    padding: 15,
  }
});
