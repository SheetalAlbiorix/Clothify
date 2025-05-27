import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SplashStyle } from "../styles/SplashStyle";
import { useTheme } from "../themes/theme";
import { useColors } from "../hooks/useColors";
import { strings } from "../utils/strings";
import { auth } from "../service/auth";

type RootStackParamList = {
  Splash: undefined;
  Welcome: undefined;
  SignIn: undefined;
  Tab: undefined;
};

type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, "Splash">;

const Splash = () => {
  const { statusBarStyle } = useTheme();
  const colors = useColors();
  const navigation = useNavigation<SplashScreenNavigationProp>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const unsubscribe = auth().onAuthStateChanged((user) => {
        if (user) {
          navigation.navigate("Tab");
        } else {
          navigation.navigate("Welcome");
        }
        setLoading(false);
      });

      return () => unsubscribe();
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [navigation]);

  if (loading) {
    return (
      <View
        style={[SplashStyle.container, { backgroundColor: colors.colors.background }]}
      >
        <View
          style={[SplashStyle.UpperCircle, { borderColor: colors.colors.circlularborder }]}
        />
        <StatusBar style={statusBarStyle} />
        <View style={SplashStyle.splashTextContainer}>
          <View style={SplashStyle.circle}>
            <Text style={SplashStyle.textF}>{strings.c}</Text>
          </View>
          <Text style={[SplashStyle.text, { color: colors.colors.text }]}>
            {strings.clothify}
          </Text>
        </View>
        <View
          style={[SplashStyle.LowerCircle, { borderColor: colors.colors.circlularborder }]}
        />
      </View>
    );
  }

  return null;
};

export default Splash;
