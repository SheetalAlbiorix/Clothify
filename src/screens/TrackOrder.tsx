import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useColors } from "../hooks/useColors";
import { trackorderstyle } from "../styles/TrackOrderStyle";
import { images } from "../utils/images";
import { strings } from "../utils/strings";
import OrderStatusView from "../components/OrderStatus";
import { useTheme } from "../themes/theme";
import { StatusBar } from "expo-status-bar";

type OrderDataType = {
  id: string;
  name: string;
  size: string;
  qty: number;
  price: number;
  image: any;
};

type RouteParams = {
  TrackOrder: {
    orderData: OrderDataType;
  };
};

const TrackOrder = () => {
  const route = useRoute<RouteProp<RouteParams, "TrackOrder">>();
  const navigation = useNavigation();
  const orderData = route.params?.orderData;
  const colors = useColors();
  const { statusBarStyle } = useTheme();
  return (
    <View
      style={[
        trackorderstyle.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <StatusBar style={statusBarStyle} />
      <View style={trackorderstyle.headerContainer}>
        <TouchableOpacity
          style={trackorderstyle.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={images.leftarrow}
            style={trackorderstyle.leftarrowImage}
          />
        </TouchableOpacity>
        <Text style={[trackorderstyle.header, { color: colors.colors.text }]}>
          {strings.trackorder}
        </Text>
      </View>
      <View style={trackorderstyle.flexcontainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={trackorderstyle.productRow}>
            <Image source={orderData.image} style={trackorderstyle.image} />
            <View style={trackorderstyle.productInfo}>
              <Text
                style={[trackorderstyle.title, { color: colors.colors.text }]}
              >
                {orderData.name}
              </Text>
              <Text
                style={[
                  trackorderstyle.text,
                  { color: colors.colors.textAccent },
                ]}
              >
                {strings.size} {orderData.size} {strings.QTY} {orderData.qty}
              </Text>
              <Text
                style={[trackorderstyle.price, { color: colors.colors.text }]}
              >
                {strings.$}
                {orderData.price}
              </Text>
            </View>
          </View>
          <View style={trackorderstyle.divider} />
          <View style={trackorderstyle.orderDetailsContainer}>
            <Text
              style={[
                trackorderstyle.orderDetailText,
                { color: colors.colors.text },
              ]}
            >
              {strings.orderdetails}
            </Text>
            <View style={trackorderstyle.deliverycontainer}>
              <Text
                style={[
                  trackorderstyle.expectedDateText,
                  { color: colors.colors.textAccent },
                ]}
              >
                {strings.expecteddeliverydate}
              </Text>
              <Text
                style={[
                  trackorderstyle.deliverdateText,
                  { color: colors.colors.text },
                ]}
              >
                {strings.date3sep23}
              </Text>
            </View>
            <View style={trackorderstyle.trackingcontainer}>
              <Text
                style={[
                  trackorderstyle.expectedDateText,
                  { color: colors.colors.textAccent },
                ]}
              >
                {strings.trackingid}
              </Text>
              <Text
                style={[
                  trackorderstyle.deliverdateText,
                  { color: colors.colors.text },
                ]}
              >
                {strings.trackingidnumber}
              </Text>
            </View>
          </View>
          <View style={trackorderstyle.divider} />
          <OrderStatusView />
        </ScrollView>
      </View>
    </View>
  );
};

export default TrackOrder;
