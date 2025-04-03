import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageStyle,
} from "react-native";
import { Colors } from "../utils/Colors";
import { Fonts } from "../components/fonts";
import {
  borderStyles,
  layout,
  shadowStyles,
  Spacing,
} from "../components/layout";
import { images } from "../utils/images";
import { useColors } from "../hooks/useColors";
import { strings } from "../utils/strings";

const CouponCard = ({
  code = strings.welcome200,
  amountNeeded = strings.dollar2,
  discount = "50% OFF",
}) => {
  const colors = useColors();

  const copyCouponCode = () => {
    console.log('code Copied')
  }

  return (
    <View style={styles.couponWrapper}>
      <View style={styles.couponContainer}>
        <View style={styles.couponContent}>
          <View style={styles.topContent}>
            <Text style={styles.codeText}>{code}</Text>
            <Text style={styles.addItemsText}>
              {strings.additemsworth} {amountNeeded} {strings.moretounlock}
            </Text>
            <View style={styles.discountContainer}>
              <View style={styles.discountIcon}>
                <Image
                  source={images.percentIcon}
                  style={styles.percentIconImage}
                />
              </View>
              <Text style={styles.discountText}>{strings.GET} {discount}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.copyButton} onPress={copyCouponCode}>
          <Text style={styles.copyButtonText}>{strings.copycode}</Text>
        </TouchableOpacity>
      </View>
      <View
        style={[styles.leftNotch, { backgroundColor: colors.colors.notchbg }]}
      />
      <View
        style={[styles.rightNotch, { backgroundColor: colors.colors.notchbg }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  couponWrapper: {
    ...layout.relative,
    ...Spacing.marginVertical_10,
    ...Spacing.paadingHorizontal_0,
  },
  couponContainer: {
    backgroundColor: Colors.white,
    ...borderStyles.rounded_8,
    ...borderStyles.rounded02,
    ...layout.overflowHidden,
    ...shadowStyles.shadowSmall,
    ...shadowStyles.shadowColor,
    ...Spacing.paddingHorizontal_20,
  },
  couponContent: {
    ...Spacing.padding_30,
    ...layout.justifyBetween,
  },
  topContent: {
    ...Spacing.paddingBottom_10,
  },
  codeText: {
    ...Fonts.weight_700,
    ...Fonts.size_16,
    color: Colors.black,
  },
  addItemsText: {
    ...Fonts.size_12,
    color: Colors.mediumBlack,
    ...Spacing.marginTop_2,
  },
  discountContainer: {
    ...layout.row,
    ...layout.itemsCenter,
    ...Spacing.marginTop_8,
  },
  discountIcon: {
    ...layout.width_20,
    ...layout.height_20,
    ...borderStyles.rounded_10,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
    ...Spacing.marginRight_6,
  },
  percentIconImage: {
    ...layout.width_20,
    ...layout.height_20,
  } as ImageStyle,
  discountText: {
    ...Fonts.weight_700,
    ...Fonts.size_14,
    color: Colors.black,
  },
  copyButton: {
    ...layout.SelfCenterView,
    ...Spacing.paddingVertical_20,
    backgroundColor: Colors.lightgrey,
    ...borderStyles.chipIconBorder,
    ...borderStyles.wTop_1,
    ...layout.width_380,
    ...layout.itemsCenter,
  },
  copyButtonText: {
    color: Colors.applypromoColor,
    ...Fonts.weight_700,
    ...Fonts.size_14,
  },
  leftNotch: {
    ...layout.absolute,
    ...layout.left0,
    ...layout.top60,
    ...layout.width_20,
    ...layout.height_55,
    ...borderStyles.roundedRightTopBottom_35,
    ...Spacing.marginTopminus12,
    ...layout.z1,
    ...borderStyles.wRight_1,
    borderColor: Colors.mediumgrey,
  },
  rightNotch: {
    ...layout.absolute,
    ...layout.right0,
    ...layout.top60,
    ...layout.width_20,
    ...layout.height_55,
    ...borderStyles.roundedLeftTopBottom_35,
    ...Spacing.marginTopminus12,
    ...layout.z1,
    ...borderStyles.wLeft_1,
    borderColor: Colors.mediumgrey,
  },
});

export default CouponCard;
