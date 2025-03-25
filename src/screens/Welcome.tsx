import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { welcomestyle } from "../styles/WelcomeStyle";
import { useTheme } from "../themes/theme";
import { useColors } from "../hooks/useColors";
import { StatusBar } from "expo-status-bar";
import { strings } from "../utils/strings";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { StackNavigationProp } from "@react-navigation/stack";
import { images } from "../utils/images";

type WelcomeNavigationProp = StackNavigationProp<RootStackParamList, "Welcome">;

const Welcome = () => {
  const navigation = useNavigation<WelcomeNavigationProp>();
  const { statusBarStyle } = useTheme();
  const colors = useColors();

  return (
    <View
      style={[
        welcomestyle.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <StatusBar style={statusBarStyle} />

      <View style={welcomestyle.imageContainer}>
        <View style={welcomestyle.largeImageWrapper}>
          <Image
            source={images.photo3}
            style={welcomestyle.largeImage}
          />
        </View>
        <View style={welcomestyle.smallImagesWrapper}>
          <Image
            source={images.photo2}
            style={welcomestyle.smallImage1}
          />
          <Image
            source={images.photo1}
            style={welcomestyle.smallImage2}
          />
        </View>
      </View>

      <Text style={[welcomestyle.heading, { color: colors.colors.text }]}>
        {strings.clothifyTitle}
      </Text>
      <Text
        style={[welcomestyle.subtitle, { color: colors.colors.textAccent }]}
      >
        {strings.clothifyDescription}
      </Text>

      <TouchableOpacity
        style={welcomestyle.button}
        onPress={() => navigation.navigate("Onboarding")}
      >
        <Text style={welcomestyle.buttonText}>{strings.getStarted}</Text>
      </TouchableOpacity>

      <Text style={welcomestyle.footerText}>
        {strings.alreadyAccount}
        <Text
          style={welcomestyle.signInText}
          onPress={() => navigation.navigate("SignIn")}
        >
          {strings.signIn}
        </Text>
      </Text>
    </View>
  );
};

export default Welcome;
