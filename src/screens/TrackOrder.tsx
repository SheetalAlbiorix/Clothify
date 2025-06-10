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
import TrackProductRow from "../components/TrackProductRow";
import TrackDetail from "../components/TrackDetail";
import Header from "../components/HeaderGlobal";

const TrackOrder = () => {
  const navigation = useNavigation();
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
      <Header type="trackorder" />
      <View style={trackorderstyle.flexcontainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TrackProductRow />
          <View style={trackorderstyle.divider} />
          <TrackDetail />
          <View style={trackorderstyle.divider} />
          <OrderStatusView />
        </ScrollView>
      </View>
    </View>
  );
};

export default TrackOrder;
