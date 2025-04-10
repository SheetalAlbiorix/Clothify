import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { images } from "../utils/images";
import { strings } from "../utils/strings";
import { searchstyle } from "../styles/SearchStyle";
import { useNavigation } from "@react-navigation/native";
import { useColors } from "../hooks/useColors";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { Colors } from "../utils/Colors";
import { FlatList } from "react-native-gesture-handler";

type searchscreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Search"
>;

const Search = () => {
  const colors = useColors();
  const navigation = useNavigation<searchscreenNavigationProp>();
  const [name, setName] = useState<string>("");

  const recentsData = [
    { id: 1, name: strings.tshirt, image: images.crossIcon },
    { id: 2, name: strings.jeans, image: images.crossIcon },
    { id: 3, name: strings.shoes, image: images.crossIcon },
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
      console.log(strings.nomatchingitem);
    }
  };

  return (
    <View
      style={[
        searchstyle.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <View style={searchstyle.headerContainer}>
        <TouchableOpacity
          style={searchstyle.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image source={images.leftarrow} style={searchstyle.leftarrowImage} />
        </TouchableOpacity>
        <Text style={[searchstyle.header, { color: colors.colors.text }]}>
          {strings.search}
        </Text>
      </View>

      <View style={searchstyle.searchMainView}>
        <View style={searchstyle.searchContainer}>
          <Image source={images.searchIcon} style={searchstyle.searchIcon} />
          <TextInput
            style={searchstyle.searchInput}
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

      
      <View style={searchstyle.recentContainer}>
        <Text style={[searchstyle.RecentText, { color: colors.colors.text }]}>
          {strings.Recents}
        </Text>
        <TouchableOpacity
          style={searchstyle.clearAllButton}
          onPress={() => setRecents([])}
        >
          <Text
            style={[searchstyle.clearAllText, { color: colors.colors.text }]}
          >
            {strings.ClearAll}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={recents}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={searchstyle.recentListContainer}
        renderItem={({ item }) => (
          <View style={searchstyle.recentItemContainer}>
            <TouchableOpacity
              style={searchstyle.clearAllButton}
              onPress={() => {
                setName(item.name);
                navigation.navigate("SearchScreen", { name: item.name });
              }}
            >
              <Text
                style={[searchstyle.searchname, { color: colors.colors.text }]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={searchstyle.clearAllButton}
              onPress={() => {
                const updated = recents.filter((r) => r.id !== item.id);
                setRecents(updated);
              }}
            >
              <Image
                source={item.image}
                style={[
                  searchstyle.crossIcon,
                  { tintColor: colors.colors.tintColor },
                ]}
              />
            </TouchableOpacity>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Search;
