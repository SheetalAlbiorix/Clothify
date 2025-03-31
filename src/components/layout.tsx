import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { Colors } from "../utils/Colors";

export type Styles = {
  ViewStyle: Record<string, ViewStyle>;
  TextStyle: Record<string, TextStyle>;
  ImageStyle: Record<string, ImageStyle>;
};

export const layout: Record<string, ViewStyle | TextStyle | ImageStyle> = {
  // justify Items
  justifyCenter: { justifyContent: "center" },
  justifyAround: { justifyContent: "space-around" },
  justifyBetween: { justifyContent: "space-between" },
  justifyEnd: { justifyContent: "flex-end" },
  justifyStart: { justifyContent: "flex-start" },
  justifyEvenly: { justifyContent: "space-evenly" },

  // Align Items
  itemsCenter: { alignItems: "center" },
  itemsEnd: { alignItems: "flex-end" },
  itemsStart: { alignItems: "flex-start" },
  itemsStretch: { alignItems: "stretch" },

  // Flex Direction
  col: { flexDirection: "column" },
  colReverse: { flexDirection: "column-reverse" },
  row: { flexDirection: "row" },
  rowReverse: { flexDirection: "row-reverse" },

  // Flex
  wrap: { flexWrap: "wrap" },
  flex_1: { flex: 1 },
  flex_2: { flex: 2 },

  // Overflow
  overflowHidden: { overflow: "hidden" },

  // Resize
  resizeCover: { resizeMode: "cover" },
  resizeContain: { resizeMode: "contain" },

  //Width
  width_8: { width: 8 },
  width_10: { width: 10 },
  width_16: { width: 16 },
  width_18: { width: 18 },
  width_20: { width: 20 },
  customSmallWidth: { width: 24 },
  width_25: { width: 25 },
  width_28: { width: 28 },
  width_30: { width: 30 },
  width_35: { width: 35 },
  width_40: { width: 40 },
  width_small: { width: 50 },
  width_55: { width: 55 },
  width_medsmall: { width: 60 },
  innerWidth: { width: 65 },
  highWidth: { width: 70 },
  width_midavgsmall: { width: 75 },
  width_80: { width: 80 },
  width_avgsmall: { width: 85 },
  width_90: { width: 90 },
  width_normal: { width: 100 },
  width_120: { width: 120 },
  width_140: { width: 140 },
  width_150: { width: 150 },
  width_180: { width: 180 },
  width_185: { width: 185 },
  width_190: { width: 190 },
  width_200: { width: 200 },
  width_250: { width: 250 },
  width_300: { width: 300 },
  width_320: { width: 320 },
  width_350: { width: 350 },
  width_395: { width: 395 },
  width_420: { width: 420 },
  width_450: { width: 450 },
  width_500: { width: 500 },
  widths_25: { width: "25%" },
  minimumWidth: { width: "30%" },
  halfWidth: { width: "50%" },
  MaxWidth: { width: "60%" },
  mediumWidth: { width: "80%" },
  AverageWidth: { width: "85%" },
  fullWidth: { width: "100%" },
  fullMoreWidth: { width: "110%" },
  fullMaxWidth: { width: "120%" },
  fullmoreMaxWidth: { width: "160%" },
  fullMaximizeWidth: { width: "180%" },

  //Height
  height_8: { height: 8 },
  height_10: { height: 10 },
  height_16: { height: 16 },
  height_18: { height: 18 },
  height_20: { height: 20 },
  customSmallHeight: { height: 24 },
  height_25: { height: 25 },
  height_28: { height: 28 },
  height_30: { height: 30 },
  height_35: { height: 35 },
  height_40: { height: 40 },
  heightinsmall: { height: 45 },
  height_small: { height: 50 },
  height_medsmall: { height: 60 },
  innerHeight: { height: 65 },
  highHeight: { height: 70 },
  height_80: { height: 80 },
  height_normal: { height: 100 },
  height_120: { height: 120 },
  height_140: { height: 140 },
  height_150: { height: 150 },
  height_180: { height: 180 },
  height_250: { height: 250 },
  height_200: { height: 200 },
  height_300: { height: 300 },
  height_400: { height: 400 },
  height_450: { height: 450 },
  height_500: { height: 500 },
  height_550: { height: 550 },
  height_7: { height: "7%" },
  heights_25: { height: "25%" },
  minimumHeight: { height: "30%" },
  halfHeight: { height: "50%" },
  MaxHeight: { height: "55%" },
  AverageHeight: { height: "60%" },
  height_between: { height: "70%" },
  fullHeight: { height: "100%" },
  fullMoreHeight: { height: "110%" },
  fullMaxHeight: { height: "120%" },

  // Position
  absolute: { position: "absolute" },
  relative: { position: "relative" },

  // Bottom
  bottom0: { bottom: 0 },
  bottom5: { bottom: 5 },
  bottom20: { bottom: 20 },
  bottom90: { bottom: 90 },
  bottom80: { bottom: 80 },

  // Left
  left0: { left: 0 },
  left20: { left: 20 },
  left50: { left: "50%" },

  // Right
  right0: { right: 0 },
  right15: { right: 15 },
  right20: { right: 20 },
  right60: { right: 60 },
  right70: { right: 70 },

  // Top
  top0: { top: 0 },
  top5: { top: 5 },
  top30: { top: 30 },
  top35: { top: 35 },
  top40: { top: 40 },
  top50: { top: 50 },
  top60: { top: 60 },

  // Opacity
  opacity: { opacity: 0.9 },
  opacity06: { opacity: 0.6 },

  // Translate property
  translateX_30: { transform: [{ translateX: -30 }] },

  // Zindex
  z1: { zIndex: 1 },
  z10: { zIndex: 10 },
  z99: { zIndex: 99 },
  z100: { zIndex: 100 },
  z101: { zIndex: 101 },
  z1000: { zIndex: 1000 },
};

export const textStyles: Styles["TextStyle"] = {
  caption: { fontSize: 14, fontWeight: "300", color: "#777" },
  body: { fontSize: 16, fontWeight: "400", color: "#555" },
  subtitle: { fontSize: 18, fontWeight: "600", color: "#333" },
  title: { fontSize: 24, fontWeight: "bold", color: "#000" },
  centerText: { textAlign: "center" },
  EndText: { alignSelf: "flex-end" },
  selfCenter: { alignSelf: "center" },
  textUnderLine: { textDecorationLine: "underline" },
  letterspace10: { letterSpacing: 10 },
};

export const borderStyles = {
  // Border Width
  w_1: { borderWidth: 1 },
  w1_5: { borderWidth: 1.5 },
  w_2: { borderWidth: 2 },
  w_5: { borderWidth: 5 },

  // Border Top Width
  wTop_1: { borderTopWidth: 1 },
  wTop_2: { borderTopWidth: 2 },

  // Border Right Width
  wRight_1: { borderRightWidth: 1 },
  wRight_2: { borderRightWidth: 2 },

  // Border Bottom Width
  wBottom_1: { borderBottomWidth: 1 },
  wBottom_2: { borderBottomWidth: 2 },

  // Border Left Width
  wLeft_1: { borderLeftWidth: 1 },
  wLeft_2: { borderLeftWidth: 2 },

  // Border Radius
  rounded_4: { borderRadius: 4 },
  rounded_5: { borderRadius: 5 },
  rounded_8: { borderRadius: 8 },
  rounded_10: { borderRadius: 10 },
  rounded_12: { borderRadius: 12 },
  rounded_15: { borderRadius: 15 },
  rounded_18: { borderRadius: 18 },
  rounded_20: { borderRadius: 20 },
  rounded_25: { borderRadius: 25 },
  rounded_30: { borderRadius: 30 },
  rounded_35: { borderRadius: 35 },
  rounded_40: { borderRadius: 40 },
  rounded_50: { borderRadius: 50 },
  rounded_100: { borderRadius: 100 },
  rounded_105: { borderRadius: 105 },

  // Border Top Left Right Radius
  roundedTop_5: { borderTopLeftRadius: 5, borderTopRightRadius: 5 },
  roundedTop_10: { borderTopLeftRadius: 10, borderTopRightRadius: 10 },

  // Border Bottom Left Right Radius
  roundedBottom_5: { borderBottomLeftRadius: 5, borderBottomRightRadius: 5 },
  roundedBottom_10: { borderBottomLeftRadius: 10, borderBottomRightRadius: 10 },

  // Border Top End Start Radius
  roundedTopEndRadius_30: { borderTopEndRadius: 30 },
  roundedTopStartRadius_30: { borderTopStartRadius: 30 },

  // Border Colors
  borderBottomdarkish: { borderBottomColor: "#ccc" },
  red: { borderColor: "#ff0000" },
  midvoilet: { borderColor: "#007BFF" },
  white: { borderColor: "#ffffff" },
  black: { borderColor: "#000000" },
  darkishgray: { borderColor: "#ccc" },
  mediumBrown: { borderColor: "#bB4423" },
  lightgrey: { borderColor: "#eeeeee" },
  transparent: { borderColor: "transparent" },
};

export const Spacing = {
  // Gap
  gap_5: { gap: 5 },
  gap_10: { gap: 10 },
  gap_20: { gap: 20 },

  // Margin property
  margin_auto: { margin: "auto" },
  margin_5: { margin: 5 },
  margin_10: { margin: 10 },
  margin_20: { margin: 20 },
  margin_30: { margin: 30 },
  margin_60: { margin: 60 },

  // Margin Top
  marginTop_5: { marginTop: 5 },
  marginTop_10: { marginTop: 10 },
  marginTop_15: { marginTop: 15 },
  marginTop_20: { marginTop: 20 },
  marginTop_30: { marginTop: 30 },
  marginTop_40: { marginTop: 40 },
  marginTop_60: { marginTop: 60 },
  marginTop_100: { marginTop: 100 },
  marginTop_140: { marginTop: 140 },
  marginTop_300: { marginTop: 300 },

  // Margin Bottom
  marginBottom_5: { marginBottom: 5 },
  marginBottom_10: { marginBottom: 10 },
  marginBottom_15: { marginBottom: 15 },
  marginBottom_20: { marginBottom: 20 },
  marginBottom_25: { marginBottom: 25 },
  marginBottom_30: { marginBottom: 30 },
  marginBottom_40: { marginBottom: 40 },
  marginBottom_50: { marginBottom: 50 },
  marginBottom_70: { marginBottom: 70 },
  marginBottom_90: { marginBottom: 90 },
  marginBottom_280: { marginBottom: 280 },

  // Margin Right
  marginRight_5: { marginRight: 5 },
  marginRight_10: { marginRight: 10 },
  marginRight_15: { marginRight: 15 },
  marginRight_20: { marginRight: 20 },
  marginRight_25: { marginRight: 25 },
  marginRight_320: { marginRight: 320 },

  // Margin Left
  marginLeft_5: { marginLeft: 5 },
  marginLeft_10: { marginLeft: 10 },
  marginLeft_20: { marginLeft: 20 },
  marginLeft_120: { marginLeft: 120 },
  marginLeft_145: { marginLeft: 130 },
  marginLeft_150: { marginLeft: 330 },
  marginLeft_320: { marginLeft: 320 },

  // Margin Vertical
  marginVertical_10: { marginVertical: 10 },
  marginVertical_20: { marginVertical: 20 },

  // Margin Horizontal
  marginHorizontal_3: { marginHorizontal: 3 },
  marginHorizontal_4: { marginHorizontal: 4 },
  marginHorizontal_5: { marginHorizontal: 5 },
  marginHorizontal_10: { marginHorizontal: 10 },
  marginHorizontal_20: { marginHorizontal: 20 },

  // Padding
  padding_5: { padding: 5 },
  padding_10: { padding: 10 },
  padding_15: { padding: 15 },
  padding_16: { padding: 16 },
  padding_20: { padding: 20 },
  padding_25: { padding: 25 },
  padding_30: { padding: 30 },
  padding_40: { padding: 40 },
  padding_45: { padding: 45 },
  padding_50: { padding: 50 },

  // Padding Top
  paddingTop_10: { paddingTop: 10 },
  paddingTop_20: { paddingTop: 20 },
  paddingTop_30: { paddingTop: 30 },
  paddingTop_50: { paddingTop: 50 },
  paddingTop_60: { paddingTop: 60 },
  paddingTop_70: { paddingTop: 70 },

  // Padding Bottom
  paddingBottom_10: { paddingBottom: 10 },
  paddingBottom_20: { paddingBottom: 20 },
  paddingBottom_30: { paddingBottom: 30 },
  paddingBottom_100: { paddingBottom: 100 },

  // Padding Right
  paddingRight_10: { paddingRight: 10 },
  paddingRight_20: { paddingRight: 20 },

  // Padding Left
  paddingLeft_10: { paddingLeft: 10 },
  paddingLeft_20: { paddingLeft: 20 },

  // Padding Vertical
  paddingVertical_5: { paddingVertical: 5 },
  paddingVertical_6: { paddingVertical: 6 },
  paddingVertical_8: { paddingVertical: 8 },
  paddingVertical_10: { paddingVertical: 10 },
  paddingVertical_12: { paddingVertical: 12 },
  paddingVertical_15: { paddingVertical: 15 },
  paddingVertical_20: { paddingVertical: 20 },
  paddingVertical_40: { paddingVertical: 40 },
  paddingVertical_50: { paddingVertical: 50 },
  paddingVertical_80: { paddingVertical: 80 },

  // Padding Horizontal
  paddingHorizontal_10: { paddingHorizontal: 10 },
  paddingHorizontal_15: { paddingHorizontal: 15 },
  paddingHorizontal_20: { paddingHorizontal: 20 },
  paddingHorizontal_25: { paddingHorizontal: 25 },
  paddingHorizontal_30: { paddingHorizontal: 30 },
  paddingHorizontal_40: { paddingHorizontal: 40 },
  paddingHorizontal_70: { paddingHorizontal: 70 },
};

export const shadowStyles = {
  shadowSmall: {
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  shadowMedium: {
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  shadowLarge: {
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  tabBarsmall: {
    shadowColor: Colors.black,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  shadowfooter: {
    shadowOffset: { width: 0, height: -2 },
    shadowColor: "#fff",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
};

export const background = {
  bgColormidVoilet: {
    backgroundColor: "#007BFF",
  },
  bgColorgray: {
    backgroundColor: "#808080",
  },
  bgColorLightgrey: {
    backgroundColor: "#eeeeee",
  },
};
