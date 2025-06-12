// components/LocationMainItem.tsx
import React from "react";
import { Text, TouchableOpacity, Image } from "react-native";
import { locationmainstyle } from "../styles/LocationMainStyle";
import { images } from "../utils/images";
import { useColors } from "../hooks/useColors";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { LocationMainProps } from "../types/types";

type NavigationProp = StackNavigationProp<RootStackParamList, "LocationMain">;

const LocationMainItem = ({ item, setCurrentLocation }: LocationMainProps) => {
  const navigation = useNavigation<NavigationProp>();
  const colors = useColors();

  return (
    <TouchableOpacity
      style={locationmainstyle.searchResultItem}
      onPress={() => {
        setCurrentLocation(item);
        navigation.navigate("Tab", { location: item });
      }}
    >
      <Image
        source={images.locationarrow}
        style={locationmainstyle.resultIcon}
      />
      <Text
        style={[
          locationmainstyle.resultTitle,
          { color: colors.colors.text },
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
};

export default LocationMainItem;
