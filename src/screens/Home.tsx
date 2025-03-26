import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { images } from "../utils/images";
import { homeStyles } from "../styles/HomeStyle";
import { Colors } from "../utils/Colors";
import { useColors } from "../hooks/useColors";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;
type HomeScreenRouteProp = RouteProp<RootStackParamList, "Home">;

 
const categories = [
  { name: "T-Shirt", icon: images.tshirtIcon },
  { name: "Pant", icon: images.pantIcon },
  { name: "Dress", icon: images.dressIcon },
  { name: "Jacket", icon: images.jacketIcon },
];

const flashSaleItems = [
  { id: 1, name: "Brown Jacket", price: "$83.97", image: images.jacket1, rating: 4.9 },
  { id: 2, name: "Brown Suit", price: "$120.00", image: images.suit1, rating: 5.0 },
  { id: 3, name: "Brown Jacket", price: "$83.97", image: images.jacket2, rating: 4.9 },
  { id: 4, name: "Yellow Shirt", price: "$120.00", image: images.shirt1, rating: 5.0 },
];

const HomeScreen = () => {
    const route = useRoute<HomeScreenRouteProp>();
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const colors = useColors();
  const [location, setLocation] = useState("Select Location");

  useEffect(() => {
    if (route.params?.location) {
      setLocation(route.params.location);
    }
  }, [route.params?.location]);

  return (
    <View style={[homeStyles.container, { backgroundColor: colors.colors.background }]}>
      <View style={homeStyles.header}>
        <View style={homeStyles.locationContainer}>
          <Image source={images.locationIcon} style={homeStyles.locationIcon} />
          <Text style={[homeStyles.locationText, { color: colors.colors.text }]}>
            {location}
          </Text>
        </View>
        <TouchableOpacity>
          <Image source={images.notificationIcon} style={homeStyles.notificationIcon} />
        </TouchableOpacity>
      </View>

      <View style={homeStyles.searchContainer}>
        <Image source={images.searchIcon} style={homeStyles.searchIcon} />
        <TextInput
          style={homeStyles.searchInput}
          placeholder="Search"
          placeholderTextColor={Colors.mediumgrey}
        />
        <TouchableOpacity>
          <Image source={images.filterIcon} style={homeStyles.filterIcon} />
        </TouchableOpacity>
      </View>

      <View style={homeStyles.bannerContainer}>
        <Image style={homeStyles.ImageBanner} source={images.bannerIcon} />
        <Text style={homeStyles.bannerTitle}>New Collection</Text>
        <Text style={homeStyles.bannerSubtitle}>Discount 50% for the first transaction</Text>
        <TouchableOpacity style={homeStyles.shopNowButton}>
          <Text style={homeStyles.shopNowText}>Shop Now</Text>
        </TouchableOpacity>
      </View>

      <Text style={homeStyles.sectionTitle}>Category</Text>
      <FlatList
        data={categories}
        horizontal
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={homeStyles.categoryItem}>
            <Image source={item.icon} style={homeStyles.categoryIcon} />
            <Text style={homeStyles.categoryText}>{item.name}</Text>
          </View>
        )}
      />

      <View style={homeStyles.flashSaleHeader}>
        <Text style={homeStyles.sectionTitle}>Flash Sale</Text>
        <Text style={homeStyles.timerText}>Closing in: 02:12:56</Text>
      </View>
      <FlatList
        data={flashSaleItems}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={homeStyles.flashSaleItem}>
            <Image source={item.image} style={homeStyles.flashSaleImage} />
            <Text style={homeStyles.flashSaleTitle}>{item.name}</Text>
            <Text style={homeStyles.flashSalePrice}>{item.price}</Text>
            <View style={homeStyles.ratingContainer}>
              <Image source={images.starIcon} style={homeStyles.starIcon} />
              <Text style={homeStyles.ratingText}>{item.rating}</Text>
            </View>
          </View>
        )}
      />

      <View style={homeStyles.bottomNav}>
        <TouchableOpacity>
          <Image source={images.homeIcon} style={homeStyles.bottomIconActive} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={images.cartIcon} style={homeStyles.bottomIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={images.heartIcon} style={homeStyles.bottomIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={images.chatIcon} style={homeStyles.bottomIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={images.profileIcon} style={homeStyles.bottomIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
