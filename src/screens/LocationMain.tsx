import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
} from "react-native";
import * as Location from "expo-location";
import { images } from "../utils/images";
import { locationmainstyle } from "../styles/LocationMainStyle";
import { strings } from "../utils/strings";
import { Colors } from "../utils/Colors";
import { useColors } from "../hooks/useColors";
import { useTheme } from "../themes/theme";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { StackNavigationProp } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import Data from "../utils/Data.json";
import Header from "../components/HeaderGlobal";
import LocationMainItem from "../components/LocationMain";

type LocationNavigationProp = StackNavigationProp<
  RootStackParamList,
  "LocationMain"
>;

type LocationMainRouteProp = RouteProp<RootStackParamList, "LocationMain">;

const LocationMain = () => {
  const navigation = useNavigation<LocationNavigationProp>();
  const route = useRoute<LocationMainRouteProp>();
  const { statusBarStyle } = useTheme();
  const colors = useColors();

  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [currentLocation, setCurrentLocation] = useState<string | null>(null);

  const locations = Data.locations.map(
    (key) => strings[key as keyof typeof strings] || key
  );

  const handleUseCurrentLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== strings.granted) {
      Alert.alert(strings.permissiondenied, strings.locationacessrequired);
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;

    const geocode = await Location.reverseGeocodeAsync({ latitude, longitude });

    if (geocode.length > 0) {
      const city = `${geocode[0].city}, ${geocode[0].country}`;
      setCurrentLocation(city);

      navigation.navigate("Tab", { location: city });
    } else {
      setCurrentLocation(strings.unknownlocation);
    }
  };

  const handleSearch = (text: string) => {
    setSearchText(text);
    if (text.length < 2) {
      setSearchResults([]);
      return;
    }

    const filteredLocations = locations.filter((loc) =>
      loc.toLowerCase().includes(text.toLowerCase())
    );

    setSearchResults(filteredLocations);
  };

  const fromHome = route.params?.fromHome ?? false;

  return (
    <View
      style={[
        locationmainstyle.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <StatusBar style={statusBarStyle} />
      <Header type="locationmain" showBackButton={!fromHome} />

      <View style={locationmainstyle.searchContainer}>
        <Image
          source={images.searchIcon}
          style={locationmainstyle.searchIcon}
        />
        <TextInput
          style={locationmainstyle.searchInput}
          placeholder={strings.searchLocation}
          placeholderTextColor={Colors.mediumgrey}
          value={searchText}
          onChangeText={handleSearch}
        />
        <TouchableOpacity onPress={() => setSearchText("")}>
          <Image
            source={images.crossIcon}
            style={locationmainstyle.closeIcon}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={locationmainstyle.currentLocationContainer}
        onPress={handleUseCurrentLocation}
      >
        <Image
          source={images.locationarrow}
          style={locationmainstyle.locationIcon}
        />
        <Text
          style={[
            locationmainstyle.currentLocationText,
            { color: colors.colors.text },
          ]}
        >
          {currentLocation || strings.usecurrentlocation}
        </Text>
      </TouchableOpacity>

      <Text style={locationmainstyle.searchResultTitle}>
        {strings.searchresult}
      </Text>

      {searchResults.length > 0 ? (
        <FlatList
          data={searchResults}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <LocationMainItem
              item={item}
              setCurrentLocation={setCurrentLocation}
            />
          )}
        />
      ) : (
        <View style={locationmainstyle.noResultsContainer}>
          <Text
            style={[
              locationmainstyle.noResultsText,
              { color: colors.colors.text },
            ]}
          >
            {strings.noresultsfound}
          </Text>
        </View>
      )}
    </View>
  );
};

export default LocationMain;
