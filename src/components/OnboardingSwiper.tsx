import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import { Onboardstyles } from "../styles/OnboradStyle";
import { useColors } from "../hooks/useColors";
import { strings } from "../utils/strings";

interface OnboardingSwiperProps {
  swiperRef: React.RefObject<Swiper>;
  slides: { id: number; image: any; text: string; text2: string }[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  navigation: any;
}

const OnboardingSwiper: React.FC<OnboardingSwiperProps> = ({
  swiperRef,
  slides,
  activeIndex,
  setActiveIndex,
  navigation,
}) => {
  const colors = useColors();

  return (
    <Swiper
      loop={false}
      ref={swiperRef}
      onIndexChanged={setActiveIndex}
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
          <Image source={slide.image} style={Onboardstyles.image} />
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
              <Text style={Onboardstyles.buttonText}>
                {strings.GetStartedOnly}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      ))}
    </Swiper>
  );
};

export default OnboardingSwiper;
