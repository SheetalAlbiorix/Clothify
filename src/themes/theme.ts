import { StatusBarStyle } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { localizedStrings } from "../utils/strings";

export const useTheme = () => {
  const colorScheme = useColorScheme();

  const darkTheme = {
    backgroundColor: localizedStrings.black,
    textColor: localizedStrings.white,
    statusBarStyle: localizedStrings.light as StatusBarStyle,
  };

  const lightTheme = {
    backgroundColor: localizedStrings.white,
    textColor: localizedStrings.black,
    statusBarStyle: localizedStrings.auto as StatusBarStyle,
  };

  return colorScheme === localizedStrings.dark ? lightTheme ?? darkTheme : lightTheme;
};
