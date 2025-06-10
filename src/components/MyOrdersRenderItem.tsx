import React, { useCallback, useMemo } from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { OrderItem } from "../types/types";
import { myorderstyles } from "../styles/MyOrdersStyle";
import { strings } from "../utils/strings";
import { useColors } from "../hooks/useColors";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";

interface Props {
  item: OrderItem;
  activeTab: string;
}

type MyorderNavigationProp = StackNavigationProp<RootStackParamList>;

const MyOrdersRenderItem = ({ item, activeTab }: Props) => {
  const colors = useColors();
  const navigation = useNavigation<MyorderNavigationProp>();

  const buttonText = useMemo(() => {
    switch (activeTab) {
      case strings.active:
        return strings.trackorder;
      case strings.completed:
        return strings.leavereview;
      case strings.cancelled:
        return strings.reorder;
      default:
        return "";
    }
  }, [activeTab]);

  const handlePress = useCallback(() => {
    switch (activeTab) {
      case strings.active:
        navigation.navigate("TrackOrder", {
          orderId: item.id,
          orderData: item,
        });
        break;
      case strings.completed:
        navigation.navigate("LeaveReview", {
          orderId: item.id,
          orderData: item,
        });
        break;
      case strings.cancelled:
        Alert.alert(strings.comingsoon);
        break;
    }
  }, [activeTab, item, navigation]);

  return (
    <View style={myorderstyles.orderItemContainer}>
      <View style={myorderstyles.orderItem}>
        <Image source={item.image} style={myorderstyles.productImage} />
        <View style={myorderstyles.productDetails}>
          <Text
            style={[myorderstyles.productName, { color: colors.colors.text }]}
          >
            {item.name}
          </Text>
          <Text
            style={[myorderstyles.productSize, { color: colors.colors.text }]}
          >
            {strings.size} {item.size} {strings.QTY} {item.qty}
          </Text>
          <Text
            style={[myorderstyles.productPrice, { color: colors.colors.text }]}
          >
            {strings.$}
            {item.price}
          </Text>
        </View>
        <TouchableOpacity
          style={[
            myorderstyles.actionButton,
            { backgroundColor: colors.colors.active },
          ]}
          onPress={handlePress}
        >
          <Text style={myorderstyles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
      <View
        style={[
          myorderstyles.divider,
          { borderColor: colors.colors.borderColor },
        ]}
      />
    </View>
  );
};

export default MyOrdersRenderItem;
