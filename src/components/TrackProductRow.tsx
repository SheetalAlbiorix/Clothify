import { View, Text, Image } from "react-native";
import React from "react";
import { trackorderstyle } from "../styles/TrackOrderStyle";
import { strings } from "../utils/strings";
import { useColors } from "../hooks/useColors";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RouteParams } from "../types/types";

const TrackProductRow = () => {
  const route = useRoute<RouteProp<RouteParams, "TrackOrder">>();
  const orderData = route.params?.orderData;
  const colors = useColors();
  return (
    <View>
      <View style={trackorderstyle.productRow}>
        <Image source={orderData.image} style={trackorderstyle.image} />
        <View style={trackorderstyle.productInfo}>
          <Text style={[trackorderstyle.title, { color: colors.colors.text }]}>
            {orderData.name}
          </Text>
          <Text
            style={[trackorderstyle.text, { color: colors.colors.textAccent }]}
          >
            {strings.size} {orderData.size} {strings.QTY} {orderData.qty}
          </Text>
          <Text style={[trackorderstyle.price, { color: colors.colors.text }]}>
            {strings.$}
            {orderData.price}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TrackProductRow;
