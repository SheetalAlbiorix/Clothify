import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import { whistliststyle } from "../styles/WhistlistStyle";
import { images } from "../utils/images";
import { useColors } from "../hooks/useColors";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "../themes/theme";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { strings } from "../utils/strings";
import CategoryFilterCarousel from "../components/CategoryFilter";
import WhistlistCategory from "../components/WhistlistCategory";

type WhistListNavigationProp = StackNavigationProp<
  RootStackParamList,
  "whistlist"
>;

const wishlistItems = [
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
    name: strings.brownshirt,
    image1: images.likeIcon,
    price: strings.price1,
    image: images.sweatshirt,
    ratio: 5.0,
  },
  {
    id: 6,
    name: strings.jacketchoco,
    image1: images.likeIcon,
    price: strings.price1,
    image: images.jacket3,
    ratio: 5.0,
  },
];

const Whistlist = () => {
  const colors = useColors();
  const navigation = useNavigation<WhistListNavigationProp>();
  const { statusBarStyle } = useTheme();

  return (
    <View
      style={[
        whistliststyle.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <StatusBar style={statusBarStyle} />

      <View style={whistliststyle.headerContainer}>
        <TouchableOpacity
          style={whistliststyle.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={whistliststyle.leftarrowImage}
            source={images.leftarrow}
          />
        </TouchableOpacity>
        <Text
          style={[whistliststyle.headerText, { color: colors.colors.text }]}
        >
          {strings.mywhistlist}
        </Text>
      </View>
      <WhistlistCategory />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={wishlistItems}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={whistliststyle.listContent}
        renderItem={({ item }) => (
          <TouchableOpacity style={whistliststyle.itemContainer}>
            <Image source={item.image} style={whistliststyle.itemImage} />
            <TouchableOpacity style={whistliststyle.heartButton}>
              <Image
                source={images.heartIcon}
                style={whistliststyle.heartIcon}
              />
            </TouchableOpacity>
            <View style={whistliststyle.ratingnamecontainer}>
              <Text style={whistliststyle.itemTitle}>{item.name}</Text>
              <View style={whistliststyle.ratingContainer}>
                <Image
                  source={images.starIcon}
                  style={whistliststyle.starIcon}
                />
                <Text style={whistliststyle.ratingText}>{item.rating}</Text>
              </View>
            </View>
            <Text style={whistliststyle.itemPrice}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Whistlist;
