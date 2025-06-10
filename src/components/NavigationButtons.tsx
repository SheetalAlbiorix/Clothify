import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import Swiper from "react-native-swiper";
import { Onboardstyles } from "../styles/OnboradStyle";
import { images } from "../utils/images";
import { NavigationButtonsProps } from "../types/types";

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  swiperRef,
  slides,
  activeIndex,
}) => {
  return (
    <View style={Onboardstyles.navigationContainer}>
      {activeIndex !== 0 && (
        <TouchableOpacity
          style={[Onboardstyles.arrowButton, Onboardstyles.leftButton]}
          onPress={() => swiperRef.current?.scrollBy(-1)}
        >
          <Image style={Onboardstyles.arrowIcon} source={images.leftarrow} />
        </TouchableOpacity>
      )}

      <View style={Onboardstyles.dotContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              Onboardstyles.dot,
              activeIndex === index && Onboardstyles.activeDot,
            ]}
          />
        ))}
      </View>

      {activeIndex !== slides.length - 1 && (
        <TouchableOpacity
          style={[Onboardstyles.arrowButton, Onboardstyles.rightButton]}
          onPress={() => swiperRef.current?.scrollBy(1)}
        >
          <Image
            style={Onboardstyles.rightarrowIcon}
            source={images.rightarrow}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default NavigationButtons;
