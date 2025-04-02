import { ImageStyle, StyleSheet } from "react-native";
import {
  borderStyles,
  layout,
  shadowStyles,
  Spacing,
  textStyles,
} from "../components/layout";
import { Colors } from "../utils/Colors";
import { Fonts } from "../components/fonts";

export const addcardstyles = StyleSheet.create({
    container: {
      flex: 1,
    },
    keyboardAvoidView: {
      flex: 1,
    },
    headerContainer: {
        ...layout.row,
        ...layout.itemsCenter,
        ...layout.justifyBetween,
        ...Spacing.paddingRight_80,
        ...Spacing.marginBottom_20,
        ...Spacing.marginTop_60,
        ...Spacing.paddingHorizontal_20,
      },
      backButton: {
        backgroundColor: Colors.white,
        ...Spacing.padding_10,
        ...borderStyles.w_1,
        borderColor: Colors.mediumbrown,
        ...borderStyles.rounded_30,
        ...layout.height_55,
        ...layout.width_55,
        ...layout.itemsCenter,
        ...layout.justifyCenter,
      },
      leftarrowImage: {
        ...layout.customSmallWidth,
        ...layout.customSmallHeight,
      } as ImageStyle,
      header: {
        ...Fonts.size_24,
        ...Fonts.weight_900,
        ...textStyles.centerText,
        ...layout.flex_1,
      },
    cardPreview: {
      height: 200,
      marginHorizontal: 20,
      marginVertical: 20,
      borderRadius: 10,
      padding: 20,
      backgroundColor: '#8D6E63',
      justifyContent: 'space-between',
    },
    visaText: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      alignSelf: 'flex-end',
    },
    cardNumberPreview: {
      color: 'white',
      fontSize: 24,
      fontWeight: '600',
      letterSpacing: 2,
      marginVertical: 20,
    },
    cardPreviewBottom: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    cardPreviewLabel: {
      color: 'rgba(255,255,255,0.7)',
      fontSize: 12,
    },
    cardPreviewValue: {
      color: 'white',
      fontSize: 16,
      fontWeight: '500',
    },
    chipIcon: {
      width: 40,
      height: 30,
      backgroundColor: 'rgba(255,255,255,0.2)',
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
    },
    chipLines: {
      width: 25,
      height: 15,
      borderWidth: 1,
      borderColor: 'rgba(255,255,255,0.5)',
      borderRadius: 2,
    },
    formContainer: {
      paddingHorizontal: 20,
    },
    inputGroup: {
      marginBottom: 20,
    },
    inputLabel: {
      fontSize: 16,
      marginBottom: 8,
      fontWeight: '500',
    },
    input: {
      height: 55,
      borderWidth: 1,
      borderColor: '#E5E5E5',
      borderRadius: 10,
      paddingHorizontal: 15,
      fontSize: 16,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    halfWidth: {
      width: '48%',
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 15,
    },
    checkbox: {
      width: 24,
      height: 24,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: '#8D6E63',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
    },
    checkboxChecked: {
      backgroundColor: '#8D6E63',
    },
    checkmark: {
      color: 'white',
      fontSize: 16,
    },
    checkboxLabel: {
      fontSize: 16,
      fontWeight: '500',
    },
    addCardButton: {
      backgroundColor: '#8D6E63',
      height: 55,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 40,
    },
    addCardButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: '600',
    },
  });