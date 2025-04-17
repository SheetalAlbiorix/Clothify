import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { images } from "../utils/images";
import { strings } from "../utils/strings";
import { searchstyle } from "../styles/SearchStyle";
import { useColors } from "../hooks/useColors";
import { RootStackParamList } from "../../App";
import { Colors } from "../utils/Colors";

type SearchScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Search"
>;

const initialRecents = [
  { id: 1, name: strings.tshirt },
  { id: 2, name: strings.jeans },
  { id: 3, name: strings.shoes },
  { id: 4, name: strings.Jacket },
  { id: 5, name: strings.Dress },
  { id: 6, name: strings.hat },
  { id: 7, name: strings.socks },
  { id: 8, name: strings.sweater },
  { id: 9, name: strings.shorts },
  { id: 10, name: strings.skirt },
];

const Search = () => {
  const colors = useColors();
  const navigation = useNavigation<SearchScreenNavigationProp>();
  const [name, setName] = useState("");
  const [recents, setRecents] = useState(initialRecents);

  const filteredRecents = useMemo(() => {
    return name
      ? initialRecents.filter((item) =>
          item.name.toLowerCase().includes(name.toLowerCase())
        )
      : recents;
  }, [name, recents]);

  const handleSearch = () => {
    const match = initialRecents.find(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );
    if (match) {
      navigation.navigate("SearchScreen", { name });
    } else {
      console.log(strings.nomatchingitem);
    }
  };

  const handleRecentPress = (itemName: string) => {
    setName(itemName);
    navigation.navigate("SearchScreen", { name: itemName });
  };

  const handleRemoveRecent = (id: number) => {
    setRecents((prev) => prev.filter((item) => item.id !== id));
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
            onChangeText={setName}
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
          <Text style={[searchstyle.clearAllText, { color: colors.colors.text }]}>
            {strings.ClearAll}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredRecents}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={searchstyle.recentListContainer}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={searchstyle.recentItemContainer}>
            <TouchableOpacity
              style={searchstyle.clearAllButton}
              onPress={() => handleRecentPress(item.name)}
            >
              <Text style={[searchstyle.searchname, { color: colors.colors.text }]}>
                {item.name}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={searchstyle.clearAllButton}
              onPress={() => handleRemoveRecent(item.id)}
            >
              <Image
                source={images.crossIcon}
                style={[
                  searchstyle.crossIcon,
                  { tintColor: colors.colors.tintColor },
                ]}
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Search;
