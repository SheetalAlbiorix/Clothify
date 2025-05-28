import { useColorScheme } from "react-native";
import { useEffect, useState } from "react";
import { darkModeColors, lightModeColors } from "../utils/constants";
import { localizedStrings } from "../utils/strings";

export function useColors() {
  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(
    colorScheme === localizedStrings.dark
  );

  useEffect(() => {
    setIsDarkMode(colorScheme === localizedStrings.dark);
  }, [colorScheme]);

  return { colors: isDarkMode ? darkModeColors : lightModeColors };
}
