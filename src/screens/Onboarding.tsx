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
import Data from "../utils/Data.json";

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

  const slides = Data.slides.map((item) => ({
    id: item.id,
    text: strings[item.text as keyof typeof strings] ?? item.text,
    text2: strings[item.text2 as keyof typeof strings] ?? item.text2,
    image: images[item.image as keyof typeof images],
  }))

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
