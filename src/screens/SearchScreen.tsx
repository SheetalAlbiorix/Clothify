import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
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
import Data from "../utils/Data.json";
import Header from "../components/HeaderGlobal";
import SearchRenderItem from "../components/SearchRenderItem";
import NoDataFound from "../service/NoDataFound";
import NetInfo from "@react-native-community/netinfo";

const showingResultsFor = Data.showingResultsFor.map((item) => ({
  id: item.id,
  name: strings[item.name as keyof typeof strings] ?? item.name,
  image1: images[item.image1 as keyof typeof images],
  price: strings[item.price as keyof typeof strings] ?? item.price,
  image: images[item.image as keyof typeof images],
  rating: item.rating,
}));

type searchscreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "SearchScreen"
>;

const SearchScreen = () => {
  const colors = useColors();
  const { statusBarStyle } = useTheme();
  const navigation = useNavigation<searchscreenNavigationProp>();
  const [name, setName] = useState<string>("");
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(!!state.isConnected);
    });
    return () => unsubscribe();
  }, []);

  const recentsData = Data.showingResultsFor.map((item) => ({
    id: item.id,
    name: strings[item.name as keyof typeof strings] ?? item.name,
    image: images[item.image as keyof typeof images],
  }));

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

  if (!isConnected) {
    return (
      <View
        style={[
          searchscreenstyle.container,
          { backgroundColor: colors.colors.background },
        ]}
      >
        <StatusBar style={statusBarStyle} />
        <Header
          showBackButton={true}
          title={strings.search}
          containerStyle={searchscreenstyle.headerContainer}
          backButtonStyle={searchscreenstyle.backButton}
          backButtonImageStyle={searchscreenstyle.leftarrowImage}
          titleStyle={[searchscreenstyle.header, { color: colors.colors.text }]}
        />
        <NoDataFound message={strings.noSearchResultsFound} />
      </View>
    );
  }

  return (
    <View
      style={[
        searchscreenstyle.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <StatusBar style={statusBarStyle} />
      <Header
        showBackButton={true}
        title={strings.search}
        containerStyle={searchscreenstyle.headerContainer}
        backButtonStyle={searchscreenstyle.backButton}
        backButtonImageStyle={searchscreenstyle.leftarrowImage}
        titleStyle={[searchscreenstyle.header, { color: colors.colors.text }]}
      />

      <View style={searchscreenstyle.searchMainView}>
        <View style={searchscreenstyle.searchContainer}>
          <Image
            source={images.searchIcon}
            style={searchscreenstyle.searchIcon}
          />
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
          {strings.resultsforjacket}
        </Text>
        <Text
          style={[searchscreenstyle.foundText, { color: colors.colors.text }]}
        >
          {strings.s6245found}
        </Text>
      </View>

      <FlatList
        numColumns={2}
        data={showingResultsFor}
        contentContainerStyle={searchscreenstyle.mainFlatListStyle}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <SearchRenderItem item={item} />}
      />
    </View>
  );
};

export default SearchScreen;
