import { View, Text, FlatList, TouchableOpacity, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { strings } from "../utils/strings";
import { images } from "../utils/images";
import { searchscreenstyle } from "../styles/SearchScreenStyle";
import { useColors } from "../hooks/useColors";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { Colors } from "../utils/Colors";
import { useTheme } from "../themes/theme";
import { StatusBar } from "expo-status-bar";

const showingResultsFor = [
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

type searchscreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "SearchScreen"
>;


const SearchScreen = () => {
  const colors = useColors();
  const { statusBarStyle } = useTheme();
  const navigation = useNavigation<searchscreenNavigationProp>();
   const [name, setName] = useState<string>("");
  
    const recentsData = [
      { id: 1, name: strings.tshirt, image: images.crossIcon },
      { id: 2, name: strings.jeans, image: images.crossIcon },
      { id: 3, name: strings.shoes,  image: images.crossIcon },
      { id: 4, name: strings.Jacket, image: images.crossIcon },
      { id: 5, name: strings.Dress, image: images.crossIcon },
      { id: 6, name: strings.hat, image: images.crossIcon },
      { id: 7, name: strings.socks, image: images.crossIcon },
      { id: 8, name: strings.sweater, image: images.crossIcon },
      { id: 9, name: strings.shorts, image: images.crossIcon },
      { id: 10, name: strings.skirt, image: images.crossIcon },
    ];
  
    const [recents, setRecents] = useState(recentsData);

    const handleSearch = () => {
      const match = recentsData.find(
        (item) => item.name.toLowerCase() === name.toLowerCase()
      );
      if (match) {
        navigation.navigate("SearchScreen", { name });
      } else {
        console.log(strings.nomatchingaccount);
      }
    };

  return (
    <View
      style={[
        searchscreenstyle.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <StatusBar style={statusBarStyle} />
      <View style={searchscreenstyle.headerContainer}>
        <TouchableOpacity
          style={searchscreenstyle.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={images.leftarrow}
            style={searchscreenstyle.leftarrowImage}
          />
        </TouchableOpacity>
        <Text style={[searchscreenstyle.header, { color: colors.colors.text }]}>
          {strings.search}
        </Text>
      </View>
      <View style={searchscreenstyle.searchMainView}>
        <View style={searchscreenstyle.searchContainer}>
          <Image source={images.searchIcon} style={searchscreenstyle.searchIcon} />
          <TextInput
            style={searchscreenstyle.searchInput}
            placeholder={strings.search}
            placeholderTextColor={Colors.mediumgrey}
            value={name}
            onChangeText={(text) => {
              setName(text);
              if (text.length === 0) {
                setRecents(recentsData);
              } else {
                const filtered = recentsData.filter((item) =>
                  item.name.toLowerCase().includes(text.toLowerCase())
                );
                setRecents(filtered);
              }
            }}
            onSubmitEditing={handleSearch}
          />
        </View>
      </View>
      <View style={searchscreenstyle.searchResultContainer}>
        <Text
          style={[
            searchscreenstyle.searchResultsText,
            { color: colors.colors.text },
          ]}
        >
          Results for "jacket"
        </Text>
        <Text
          style={[searchscreenstyle.foundText, { color: colors.colors.text }]}
        >
          6,245 Found
        </Text>
      </View>

      <FlatList
        numColumns={2}
        data={showingResultsFor}
        contentContainerStyle={searchscreenstyle.mainFlatListStyle}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={searchscreenstyle.mainResultContainer}
            onPress={() => {
              navigation.navigate("productDetail");
            }}
          >
            <View style={searchscreenstyle.jacketContainer}>
              <View style={searchscreenstyle.jacketImageContainer}>
                <View style={searchscreenstyle.HeartContainer}>
                  <TouchableOpacity style={searchscreenstyle.bgheartContainer}>
                    <Image
                      source={item.image1}
                      style={searchscreenstyle.heartImage}
                    />
                  </TouchableOpacity>
                </View>
                <Image
                  source={item.image}
                  style={searchscreenstyle.MainImageStyle}
                />
                <View style={searchscreenstyle.jacketTextContainer}>
                  <Text
                    style={[
                      searchscreenstyle.jacketText,
                      { color: colors.colors.text },
                    ]}
                  >
                    {item.name}
                  </Text>
                  <View style={searchscreenstyle.jacketRatingContainer}>
                    <Image
                      source={images.starIcon}
                      style={searchscreenstyle.starIcon}
                    />
                    <Text
                      style={[
                        searchscreenstyle.ratingText,
                        { color: colors.colors.text },
                      ]}
                    >
                      {item.rating}
                    </Text>
                  </View>
                </View>
              </View>
              <Text
                style={[
                  searchscreenstyle.jacketPrice,
                  { color: colors.colors.text },
                ]}
              >
                {item.price}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SearchScreen;
