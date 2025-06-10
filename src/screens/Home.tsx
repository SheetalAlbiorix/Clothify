import React, { useEffect, useLayoutEffect, useState } from "react";
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
import { StatusBar } from "expo-status-bar";
import { useTheme } from "../themes/theme";
import { BannerContainer } from "../components/BannerContainer";
import { collection, setDoc, doc } from "firebase/firestore";
import { db } from "../service/auth";
import Data from "../utils/Data.json";
import Header from "../components/HeaderGlobal";
import HomeRenderItem from "../components/HomeRenderItem";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;
type HomeScreenRouteProp = RouteProp<RootStackParamList, "Home">;

const categories = Data.homeCategory.map((item) => ({
  name: strings[item.name as keyof typeof strings] || item.name,
  icon: images[item.icon as keyof typeof images],
}));

const flashSaleItems = Data.flashSaleItems.map((item) => ({
  id: item.id,
  name: strings[item.name as keyof typeof strings] || item.name,
  image1: images[item.image1 as keyof typeof images],
  price: strings[item.price as keyof typeof strings] || item.price,
  image: images[item.image as keyof typeof images],
  rating: item.rating,
}));

const HomeScreen = () => {
  const route = useRoute<HomeScreenRouteProp>();
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const colors = useColors();
  const [location, setLocation] = useState(strings.selectlocation);
  const [unreadCount, setUnreadCount] = useState(0);
  const { statusBarStyle } = useTheme();

  useEffect(() => {
    if (route.params?.location) {
      setLocation(route.params.location);
    }
  }, [route.params?.location]);

  useLayoutEffect(() => {
    if (location) {
      navigation.setOptions({
        headerTitle: location,
      });
    }
  }, [navigation, location]);

  useEffect(() => {
    const uploadFlashSaleItems = async () => {
      try {
        const colRef = collection(db, "flashSales");
        for (const item of flashSaleItems) {
          await setDoc(doc(colRef, item.id.toString()), {
            id: item.id,
            name: item.name,
            price: item.price,
            rating: item.rating,
            image: item.image.toString(),
            image1: item.image1.toString(),
          });
        }
        console.log(strings.flashsaleupload);
      } catch (error) {
        console.error(strings.firstoreuploaderror, error);
      }
    };

    uploadFlashSaleItems();
  }, []);

  const firstRowItems = flashSaleItems.filter((_, index) => index % 2 === 0);
  const secondRowItems = flashSaleItems.filter((_, index) => index % 2 !== 0);

  const renderItem = ({ item }: { item: (typeof flashSaleItems)[0] }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("productDetail", {
          id: item.id,
          name: item.name,
          image1: item.image1,
          price: item.price,
          image: item.image,
          rating: item.rating,
        });
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
      <StatusBar style={statusBarStyle} />
      <Text style={[homeStyles.locationheader, { color: colors.colors.text }]}>
        {strings.location}
      </Text>
      <Header
        showLocation
        location={location}
        showNotifications
        unreadCount={unreadCount}
      />

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
        <BannerContainer />
        <View style={homeStyles.sectionSeeAllcontainer}>
          <Text
            style={[homeStyles.sectionTitle, { color: colors.colors.text }]}
          >
            {strings.category}
          </Text>
          <TouchableOpacity>
            <Text
              style={[homeStyles.seeAllText, { color: colors.colors.text }]}
            >
              {strings.seeAll}
            </Text>
          </TouchableOpacity>
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
          renderItem={({ item }) => <HomeRenderItem item={item} />}
          showsHorizontalScrollIndicator={false}
        />
        <FlatList
          data={secondRowItems}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <HomeRenderItem item={item} />}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
