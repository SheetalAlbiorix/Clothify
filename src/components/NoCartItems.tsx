import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { images } from "../utils/images";
import { strings } from "../utils/strings";
import { cartitemstyle } from "../styles/CartItemStyle";
import { useColors } from "../hooks/useColors";
import { useTheme } from "../themes/theme";

interface NoCartItemsProps {
  onBack: () => void;
}

export const NoCartItems = React.memo(({ onBack }: NoCartItemsProps) => {
  const colors = useColors();
  const { statusBarStyle } = useTheme();
  
  return (
    <SafeAreaView
      style={[
        cartitemstyle.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <StatusBar style={statusBarStyle}/>
      <View
        style={[
          cartitemstyle.headerContainer,
          { backgroundColor: colors.colors.background },
        ]}
      >
        <TouchableOpacity
          style={cartitemstyle.backButton}
          onPress={onBack}
        >
          <Image
            source={images.leftarrow}
            style={cartitemstyle.leftarrowImage}
          />
        </TouchableOpacity>
        <Text style={[cartitemstyle.header, { color: colors.colors.text }]}>
          {strings.mycart}
        </Text>
      </View>
      <View style={cartitemstyle.emptyCartContainer}>
        <Text
          style={[cartitemstyle.emptyCartText, { color: colors.colors.text }]}
        >
          {strings.yourcartempty}
        </Text>
      </View>
    </SafeAreaView>
  );
});