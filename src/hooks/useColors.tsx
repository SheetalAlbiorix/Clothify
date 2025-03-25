import { useColorScheme } from "react-native";
import { useEffect, useState } from "react";
import { darkModeColors, lightModeColors } from "../utils/constants";
import { localizedStrings } from "../utils/strings";

export function useColors() {
  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === localizedStrings.dark);

  useEffect(() => {
    // console.log("colorScheme detected:", colorScheme);
    setIsDarkMode(colorScheme === localizedStrings.dark);
  }, [colorScheme]);

  // console.log("isDarkMode state:", isDarkMode);

  return { colors: isDarkMode ? darkModeColors : lightModeColors };
}
