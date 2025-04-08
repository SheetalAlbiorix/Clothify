import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  Pressable,
  ScrollView,
} from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { images } from "../utils/images";
import { homeStyles } from "../styles/HomeStyle";
import { Colors } from "../utils/Colors";
import { useColors } from "../hooks/useColors";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { strings } from "../utils/strings";
import CountDownTimer from "../components/CountDownTimer";
import CategoryFilterCarousel from "../components/CategoryFilter";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;
type HomeScreenRouteProp = RouteProp<RootStackParamList, "Home">;

const categories = [
  { name: strings.tshirt, icon: images.tshirtIcon },
  { name: strings.pant, icon: images.pantIcon },
  { name: strings.Dress, icon: images.dressIcon },
  { name: strings.Jacket, icon: images.jacketIcon },
];

const flashSaleItems = [
  {
    id: 1,
    name: strings.brownjacket,
    image1: images.likeIcon,
    price: strings.price1,
    image: images.jacket1,
    rating: 4.9,
  },
  {
    id: 2,
    name: strings.brownsuit,
    image1: images.likeIcon,
    price: strings.price2,
    image: images.suit1,
    rating: 5.0,
  },
  {
    id: 3,
    name: strings.brownjacket,
    image1: images.likeIcon,
    price: strings.price3,
    image: images.jacket2,
    rating: 4.9,
  },
  {
    id: 4,
    name: strings.yelloshirt,
    image1: images.likeIcon,
    price: strings.price4,
    image: images.shirt1,
    rating: 5.0,
  },
  {
    id: 5,
    name: strings.brownjacket,
    image1: images.likeIcon,
    price: strings.price1,
    image: images.jacket1,
    rating: 4.9,
  },
  {
    id: 6,
    name: strings.brownsuit,
    image1: images.likeIcon,
    price: strings.price2,
    image: images.suit1,
    rating: 5.0,
  },
  {
    id: 7,
    name: strings.brownjacket,
    image1: images.likeIcon,
    price: strings.price3,
    image: images.jacket2,
    rating: 4.9,
  },
  {
    id: 8,
    name: strings.yelloshirt,
    image1: images.likeIcon,
    price: strings.price4,
    image: images.shirt1,
    rating: 5.0,
  },
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

  const firstRowItems = flashSaleItems.filter((_, index) => index % 2 === 0);
  const secondRowItems = flashSaleItems.filter((_, index) => index % 2 !== 0);

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("productDetail");
      }}
      style={homeStyles.flashSaleItem}
    >
      <TouchableOpacity style={homeStyles.bgheartContainer}>
        <Image source={item.image1} style={homeStyles.heartImage} />
      </TouchableOpacity>
      <Image source={item.image} style={homeStyles.flashSaleImage} />
      <View style={homeStyles.namestarconatiner}>
        <Text
          style={[homeStyles.flashSaleTitle, { color: colors.colors.text }]}
        >
          {item.name}
        </Text>

        <View style={homeStyles.ratingContainer}>
          <Image source={images.starIcon} style={homeStyles.starIcon} />
          <Text style={[homeStyles.ratingText, { color: colors.colors.text }]}>
            {item.rating}
          </Text>
        </View>
      </View>
      <Text style={[homeStyles.flashSalePrice, { color: colors.colors.text }]}>
        {item.price}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View
      style={[
        homeStyles.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <Text style={[homeStyles.locationheader, { color: colors.colors.text }]}>
        {strings.location}
      </Text>
      <View style={homeStyles.header}>
        <View style={homeStyles.locationContainer}>
          <Image source={images.locationIcon} style={homeStyles.locationIcon} />
          <Text
            style={[homeStyles.locationText, { color: colors.colors.text }]}
          >
            {location}
          </Text>
          <Image
            style={[
              homeStyles.downarrowIcon,
              { tintColor: colors.colors.tintColor },
            ]}
            source={images.downarrow}
          />
        </View>
        <TouchableOpacity
          style={homeStyles.notificationButton}
          onPress={() => navigation.navigate("MyOrders")}
        >
          <Image
            source={images.notificationIcon}
            style={[
              homeStyles.notificationIcon,
              { tintColor: colors.colors.tintColor },
            ]}
          />
        </TouchableOpacity>
      </View>

      <View style={homeStyles.searchfilterContainer}>
        <View style={homeStyles.searchContainer}>
          <Image source={images.searchIcon} style={homeStyles.searchIcon} />
          <TextInput
            style={homeStyles.searchInput}
            placeholder={strings.search}
            placeholderTextColor={Colors.mediumgrey}
            onPress={() => navigation.navigate("Search")}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Filter")}>
          <Image
            source={images.filterIcon2}
            style={[
              homeStyles.filterIcon,
              { tintColor: colors.colors.tintColor },
            ]}
          />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: "row",
            gap: 200,
            width: 1000,
          }}
        >
          <View style={homeStyles.bannerContainer}>
            <Image style={homeStyles.ImageBanner} source={images.banner2Icon} />
            <View style={homeStyles.bannerTitleContainer}>
              <Text style={homeStyles.bannerTitle}>
                {strings.newcollection}
              </Text>
              <Text style={homeStyles.bannerSubtitle}>
                {strings.discounttext}
              </Text>
              <TouchableOpacity style={homeStyles.shopNowButton}>
                <Text style={homeStyles.shopNowText}>{strings.shopnow}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={homeStyles.bannerContainer}>
            <Image style={homeStyles.ImageBanner} source={images.banner2Icon} />
            <View style={homeStyles.bannerTitleContainer}>
              <Text style={homeStyles.bannerTitle}>
                {strings.newcollection}
              </Text>
              <Text style={homeStyles.bannerSubtitle}>
                {strings.discounttext}
              </Text>
              <TouchableOpacity style={homeStyles.shopNowButton}>
                <Text style={homeStyles.shopNowText}>{strings.shopnow}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        <View style={homeStyles.sectionSeeAllcontainer}>
          <Text
            style={[homeStyles.sectionTitle, { color: colors.colors.text }]}
          >
            {strings.category}
          </Text>
          <Text style={[homeStyles.seeAllText, { color: colors.colors.text }]}>
            {strings.seeAll}
          </Text>
        </View>
        <FlatList
          data={categories}
          horizontal
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <Pressable style={homeStyles.categoryItem}>
              <Image source={item.icon} style={homeStyles.categoryIcon} />
              <Text style={homeStyles.categoryText}>{item.name}</Text>
            </Pressable>
          )}
        />

        <View style={homeStyles.flashSaleHeader}>
          <Text
            style={[homeStyles.sectionTitle, { color: colors.colors.text }]}
          >
            {strings.flashsale}
          </Text>
          <TouchableOpacity>
            <CountDownTimer />
          </TouchableOpacity>
        </View>
        <CategoryFilterCarousel />

        <FlatList
          data={firstRowItems}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
        />
        <FlatList
          data={secondRowItems}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
