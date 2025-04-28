import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { helpcenterstyle } from "../styles/HelpCenterStyle";
import { useNavigation } from "@react-navigation/native";
import { images } from "../utils/images";

export const HelpCenterHeader: React.FC<{ title: string; textColor: string }> = ({ title, textColor }) => {
  const navigation = useNavigation();

  return (
    <View style={helpcenterstyle.headerContainer}>
      <TouchableOpacity style={helpcenterstyle.backButton} onPress={() => navigation.goBack()}>
        <Image source={images.leftarrow} style={helpcenterstyle.leftarrowImage} />
      </TouchableOpacity>
      <Text style={[helpcenterstyle.header, { color: textColor }]}>{title}</Text>
    </View>
  );
};
