import React from "react";
import { View, TextInput, Image } from "react-native";
import { helpcenterstyle } from "../styles/HelpCenterStyle";
import { images } from "../utils/images";
import { Colors } from "../utils/Colors";

export const SearchBar = () => (
  <View style={helpcenterstyle.searchContainer}>
    <View style={helpcenterstyle.searchview}>
      <Image source={images.searchIcon} style={helpcenterstyle.searchIcon} />
      <TextInput
        style={helpcenterstyle.input}
        placeholder="Search"
        placeholderTextColor={Colors.mediumgrey}
      />
    </View>
  </View>
);
