import { Appearance } from "react-native";
import { localizedStrings } from "./strings";
import { Colors } from "./Colors";
import { layout } from "../components/layout";

export const transparent = {
  ...layout.flex_1,
  backgroundColor: 'rgba(0,0,0,0.5)',
};

export type ThemeColors = {
  text: string;
  textAccent: string;
  background: string;
  borderColor: string;
  tintColor: string;
  placeholderColor?: string;
  circlularborder: string;
  caroselText: string;
  notchbg:string;
};

export const lightModeColors: ThemeColors = {
  text: Colors.darkgray,
  textAccent: Colors.mediumgrey,
  background: Colors.white,
  borderColor: Colors.lightgrey,
  tintColor: Colors.darkgray,
  placeholderColor: Colors.darkgray,
  circlularborder: Colors.brown,
  caroselText: Colors.white,
  notchbg: Colors.white,
};

export const darkModeColors: ThemeColors = {
  text: Colors.white,
  textAccent: Colors.mediumgrey,
  background: Colors.black,
  borderColor: Colors.white,
  tintColor: Colors.white,
  placeholderColor: Colors.white,
  circlularborder: Colors.brown,
  caroselText: Colors.white,
  notchbg: Colors.black
};

const isDark = Appearance.getColorScheme() === localizedStrings.dark;

export const colors = isDark ? darkModeColors : lightModeColors;
