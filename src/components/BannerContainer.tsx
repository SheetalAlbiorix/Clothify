import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { homeStyles } from "../styles/HomeStyle";
import { strings } from "../utils/strings";
import { images } from "../utils/images";

export const BannerContainer = () => {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={homeStyles.scrollview}
      >
        <View style={homeStyles.bannerContainer}>
          <Image style={homeStyles.ImageBanner} source={images.banner2Icon} />
          <View style={homeStyles.bannerTitleContainer}>
            <Text style={homeStyles.bannerTitle}>{strings.newcollection}</Text>
            <Text style={homeStyles.bannerSubtitle}>
              {strings.discounttext}
            </Text>
            <TouchableOpacity style={homeStyles.shopNowButton}>
              <Text style={homeStyles.shopNowText}>{strings.shopnow}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={homeStyles.bannerContainer}>
          <Image style={homeStyles.ImageBanner} source={images.bannerIcon} />
        </View>
      </ScrollView>
    </View>
  );
};
