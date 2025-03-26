import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import { useTheme } from "../themes/theme";
import { useColors } from "../hooks/useColors";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { strings } from "../utils/strings";
import { StatusBar } from "expo-status-bar";
import { Onboardstyles } from "../styles/OnboradStyle";
import { images } from "../utils/images";

type OnboardNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Onboarding"
>;

const OnboardingScreen = () => {
  const { statusBarStyle } = useTheme();
  const colors = useColors();
  const navigation = useNavigation<OnboardNavigationProp>();
  const [activeIndex, setActiveIndex] = useState(0);
  let swiperRef: Swiper | null = null;

  const slides = [
    {
      id: 1,
      image: images.onboarding1,
      text: strings.SeamlessExp,
      text2: strings.OnboardingLoremText,
    },
    {
      id: 2,
      image: images.onboarding2,
      text: strings.NewFeatures,
      text2: strings.OnboardingLoremText,
    },
    {
      id: 3,
      image: images.onboarding3,
      text: strings.GetStarted,
      text2: strings.OnboardingLoremText,
    },
  ];

  return (
    <View
      style={[Onboardstyles.container, { backgroundColor: colors.colors.background }]}
    >
      <StatusBar style={statusBarStyle} />
      <Swiper
        loop={false}
        ref={(ref) => (swiperRef = ref)}
        onIndexChanged={(index) => setActiveIndex(index)}
        showsPagination={false}
      >
        {slides.map((slide, index) => (
          <View
            key={slide.id}
            style={[
              Onboardstyles.slide,
              { backgroundColor: colors.colors.background },
            ]}
          >
            <Image
              source={slide.image}
              style={Onboardstyles.image}
            />
            <Text style={[Onboardstyles.text, { color: colors.colors.text }]}>
              {slide.text}
            </Text>
            <Text style={[Onboardstyles.text2, { color: colors.colors.text }]}>
              {slide.text2}
            </Text>
            {index === slides.length - 1 && (
              <TouchableOpacity
                style={Onboardstyles.getStartedButton}
                onPress={() => navigation.navigate("SignIn")}
              >
                <Text style={Onboardstyles.buttonText}>{strings.GetStartedOnly}</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </Swiper>

      <View style={Onboardstyles.navigationContainer}>
        {activeIndex !== 0 && (
          <TouchableOpacity
            style={[Onboardstyles.arrowButton, Onboardstyles.leftButton]}
            onPress={() => swiperRef?.scrollBy(-1)}
          >
            <Image
              style={Onboardstyles.arrowIcon}
              source={images.leftarrow}
            />
          </TouchableOpacity>
        )}

        <View style={Onboardstyles.dotContainer}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[Onboardstyles.dot, activeIndex === index && Onboardstyles.activeDot]}
            />
          ))}
        </View>

        {activeIndex !== slides.length - 1 && (
          <TouchableOpacity
            style={[Onboardstyles.arrowButton, Onboardstyles.rightButton]}
            onPress={() => swiperRef?.scrollBy(1)}
          >
            <Image
              style={Onboardstyles.rightarrowIcon}
              source={images.rightarrow}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default OnboardingScreen;
