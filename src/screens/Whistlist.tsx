import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
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
import WhistlistCategory from "../components/WhistlistCategory";
import Data from "../utils/Data.json";
import Header from "../components/HeaderGlobal";
import WhistlistRenderItem from "../components/WhistlistRenderItem";

type WhistListNavigationProp = StackNavigationProp<
  RootStackParamList,
  "whistlist"
>;

const wishlistItems = Data.wishlistItems.map((item) => ({
  id: item.id,
  name: strings[item.name as keyof typeof strings] ?? item.name,
  image1: images[item.image1 as keyof typeof images],
  price: strings[item.price as keyof typeof strings] ?? item.price,
  image: images[item.image as keyof typeof images],
  rating: item.rating,
}));

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

      <Header type="whistlist" />
      <WhistlistCategory />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={wishlistItems}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={whistliststyle.listContent}
        renderItem={({ item }) => <WhistlistRenderItem item={item} />}
      />
    </View>
  );
};

export default Whistlist;
