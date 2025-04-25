import { ImageStyle, StyleSheet } from "react-native";
import { Colors } from "../utils/Colors";
import { borderStyles, layout, Spacing, textStyles } from "../components/layout";
import { Fonts } from "../components/fonts";

export const chatstyle = StyleSheet.create({
  container: {
    ...layout.flex_1,
  },
  headerContainer: {
    ...layout.row,
    ...layout.justifyBetween,
    backgroundColor: Colors.iconColor,
    ...Spacing.paddingHorizontal_15,
    paddingTop: 50,
    paddingBottom: 50,
  },
  header: {
    ...layout.row,
    ...layout.itemsCenter,
  },
  headerRight: {
    ...layout.justifyCenter,
  },
  headerTextContainer: {
    ...layout.row,
    ...layout.itemsCenter,
    ...Spacing.marginLeft_15,
  },
  avatar: {
    ...layout.width_40,
    ...layout.height_40,
    ...borderStyles.rounded_20,
    ...Spacing.marginRight_10,
  } as ImageStyle,
  name: {
    color: Colors.white,
    ...Fonts.weight_800,
    ...Fonts.size_18,
  },
  status: {
    color: Colors.creasywhite,
    ...Fonts.size_14,
  },
  backButton: {
    backgroundColor: Colors.white,
    ...Spacing.padding_10,
    ...borderStyles.rounded_30,
    ...layout.widthinsmall,
    ...layout.heightinsmall,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
  },
  menuButton: {
    backgroundColor: Colors.white,
    ...Spacing.padding_10,
    ...borderStyles.rounded_30,
    ...layout.widthinsmall,
    ...layout.heightinsmall,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
  },
  leftarrowIcon: {
    ...layout.width_20,
    ...layout.height_20,
  } as ImageStyle,
  chatContainer: {
    ...layout.flex_1,
    ...borderStyles.wTop_1,
    ...borderStyles.totalrowTopBorder,
    ...borderStyles.roundedTopStartRadius_30,
    ...borderStyles.roundedTopEndRadius_30,
    ...Spacing.marginTopminus30,
  },
  todayContainer: {
    ...Spacing.marginTop_10,
  },
  todayLabel: {
    ...textStyles.centerText,
    ...Fonts.weight_600,
    ...Fonts.size_14,
  },
  messagesList: {
    ...Spacing.paddingHorizontal_15,
    ...Spacing.paddingBottom_20,
  },
  messageContainer: {
    ...Spacing.marginVertical_8,
    ...layout.maxWidth85,
  },
  myContainer: {
    ...textStyles.EndText,
  },
  otherContainer: {
    ...layout.SelfFlexStart,
  },
  senderInfo: {
    ...layout.row,
    ...layout.itemsCenter,
    ...Spacing.marginVertical_5,
  },
  senderAvatar: {
    ...layout.width_30,
    ...layout.height_30,
    ...borderStyles.rounded_15,
  } as ImageStyle,
  senderName: {
    ...Spacing.marginHorizontal_8,
    ...Fonts.size_14,
    color: Colors.claygrey,
  },
  myMessage: {
    backgroundColor: Colors.iconColor,
    ...Spacing.padding_15,
    ...borderStyles.rounded_15,
  },
  otherMessage: {
    backgroundColor: Colors.lightred,
    ...Spacing.padding_15,
    ...borderStyles.rounded_15,
  },
  messageText: {
    ...Fonts.size_15,
    ...Fonts.lineheight_22,
  },
  myMessageText: {
    color: Colors.white,
  },
  otherMessageText: {
    color: Colors.darkclay,
  },
  timeContainer: {
    ...Spacing.marginTop_5,
  },
  timeLeft: {
    ...textStyles.StartText,
  },
  timeRight: {
    ...textStyles.EndText,
  },
  timeText: {
    ...Fonts.size_12,
    color: Colors.timeChatColor,
  },
  imageContainer: {
    ...borderStyles.rounded_15,
    ...layout.overflowHidden,
    ...borderStyles.w_1,
    ...borderStyles.totalrowTopBorder,
  },
  messageImage: {
    ...layout.width_250,
    ...layout.height_250,
    ...layout.resizeCover,
  } as ImageStyle,
  audioContainer: {
    ...Spacing.padding_12,
    ...borderStyles.rounded_15,
    ...layout.width_250,
  },
  audioBar: {
    ...layout.row,
    ...layout.itemsCenter,
    ...layout.fullWidth,
  },
  playButton: {
    ...layout.width_32,
    ...layout.height_32,
    ...borderStyles.rounded_16,
    backgroundColor: Colors.chipIconTransparent,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
    ...Spacing.marginRight_10,
  },
  waveformContainer: {
    ...layout.flex_1,
    ...layout.height_30,
    ...layout.justifyCenter,
  },
  waveform: {
    ...layout.height_20,
    backgroundColor: Colors.chipIconTransparent,
  },
  audioDuration: {
    color: Colors.white,
    ...Fonts.size_13,
    ...Spacing.marginLeft_10,
  },
  addButton: {
    ...Spacing.padding_5,
    ...Spacing.marginRight_5,
  },
  playIcon: {
    ...Spacing.padding_10,
    ...borderStyles.rounded_30,
    ...layout.width_35,
    ...layout.height_35,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
    tintColor: Colors.white,
  } as ImageStyle,
  senderInfoRow: {
    ...layout.row,
    ...layout.justifyBetween,
    ...layout.itemsCenter,
    ...layout.width_auto,
    ...Spacing.marginTop_5,
    ...Spacing.marginBottom_5,
    ...Spacing.paddingHorizontal_2,
  },
  avatarNameContainer: {
    ...layout.row,
    ...layout.itemsCenter,
  },
  micIcon: {
    ...layout.width_25,
    ...layout.height_25,
  } as ImageStyle,
  actionButtons: {
    ...layout.itemsCenter,
    ...layout.row,
    ...Spacing.gap_10,
    ...Spacing.marginRight_10,
  },
  inputContainer: {
    ...layout.row,
    backgroundColor: Colors.dullChocolate,
    ...Spacing.padding_10,
    ...borderStyles.roundedTopStatRadius_20,
    ...borderStyles.roundedTopEndRadius_20,
    ...layout.itemsCenter,
  },
  input: {
    ...layout.flex_1,
    backgroundColor: Colors.dullcoffee,
    ...borderStyles.rounded_25,
    ...Spacing.paddingHorizontal_15,
    ...Spacing.paddingVertical_10,
    ...Spacing.marginRight_10,
    color: Colors.lightWhite,
    ...Fonts.size_16,
  },
  micButton: {
    backgroundColor: Colors.lightmocha,
    ...layout.widthinsmall,
    ...layout.heightinsmall,
    ...borderStyles.rounded_25,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
  },
  plusIcon: {
    ...layout.width_30,
    ...layout.height_30,
    tintColor: Colors.lightmocha,
  } as ImageStyle,
  sendButton: {
    backgroundColor: Colors.white,
    ...borderStyles.rounded_30,
    ...layout.height_40,
    ...layout.width_40,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
    ...Spacing.marginVertical_10,
  },
  sendIcon: {
    ...layout.width_48,
    ...layout.height_48,
    tintColor: Colors.lightmocha,
  } as ImageStyle,
});
