import { View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useColors } from "../hooks/useColors";
import { trackorderstyle } from "../styles/TrackOrderStyle";
import OrderStatusView from "../components/OrderStatus";
import { useTheme } from "../themes/theme";
import { StatusBar } from "expo-status-bar";
import TrackProductRow from "../components/TrackProductRow";
import TrackDetail from "../components/TrackDetail";
import Header from "../components/HeaderGlobal";
import NoDataFound from "../service/NoDataFound";
import NetInfo from "@react-native-community/netinfo";

const TrackOrder = () => {
  const colors = useColors();
  const { statusBarStyle } = useTheme();
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(!!state.isConnected);
    });
    return () => unsubscribe();
  }, []);

  if (!isConnected) {
    return (
      <View
        style={[
          trackorderstyle.container,
          { backgroundColor: colors.colors.background },
        ]}
      >
        <StatusBar style={statusBarStyle} />
        <Header type="trackorder" />
        <NoDataFound message="No Track Order Details Found" />
      </View>
    );
  }

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
