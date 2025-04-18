import { Text, View } from "react-native";

type RootStackParamList = {
  Splash: undefined;
  // Welcome: undefined;
  Tab: undefined;
  SignIn: undefined;
};
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SplashStyle } from "../styles/SplashStyle";
import { useTheme } from "../themes/theme";
import { useColors } from "../hooks/useColors";
import { strings } from "../utils/strings";

type SplashScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Splash"
>;

const Splash = () => {
  const { statusBarStyle } = useTheme();
  const colors = useColors();
  const navigation = useNavigation<SplashScreenNavigationProp>();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Tab");
    }, 2000);
  }, [navigation]);

  return (
    <View
      style={[
        SplashStyle.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <View
        style={[
          SplashStyle.UpperCircle,
          { borderColor: colors.colors.circlularborder },
        ]}
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
        style={[
          SplashStyle.LowerCircle,
          { borderColor: colors.colors.circlularborder },
        ]}
      />
    </View>
  );
};

export default Splash;
