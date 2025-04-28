import React, { useState, useRef } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Swiper from "react-native-swiper";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useTheme } from "../themes/theme";
import { useColors } from "../hooks/useColors";
import { Onboardstyles } from "../styles/OnboradStyle";
import { RootStackParamList } from "../../App";
import { strings } from "../utils/strings";
import { images } from "../utils/images";
import OnboardingSwiper from "../components/OnboardingSwiper";
import NavigationButtons from "../components/NavigationButtons";

type OnboardNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Onboarding"
>;

const OnboardingScreen = () => {
  const { statusBarStyle } = useTheme();
  const colors = useColors();
  const navigation = useNavigation<OnboardNavigationProp>();
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<Swiper>(null);

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
      style={[
        Onboardstyles.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <StatusBar style={statusBarStyle} />
      <OnboardingSwiper
        swiperRef={swiperRef}
        slides={slides}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        navigation={navigation}
      />
      <NavigationButtons
        swiperRef={swiperRef}
        slides={slides}
        activeIndex={activeIndex}
      />
    </View>
  );
};

export default OnboardingScreen;
