import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";
import { myorderstyles } from "../styles/MyOrdersStyle";
import { strings } from "../utils/strings";
import { images } from "../utils/images";
import { useColors } from "../hooks/useColors";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { useTheme } from "../themes/theme";
import { StatusBar } from "expo-status-bar";
import { ActiveOrder, CompletedOrder, CancelledOrder } from "../types/types";
import Data from "../utils/Data.json";
import Header from "../components/HeaderGlobal";
import MyOrdersRenderItem from "../components/MyOrdersRenderItem";

const activeOrders: ActiveOrder[] = Data.activeOrder.map((item) => ({
  id: item.id,
  name: strings[item.name as keyof typeof strings] ?? item.name,
  size: strings[item.size as keyof typeof strings] ?? item.size,
  qty: strings[item.qty as keyof typeof strings] ?? item.qty,
  image: images[item.image as keyof typeof images],
  price: typeof item.price === "number" ? item.price : Number(item.price),
}));

const completedOrders: CompletedOrder[] = Data.completedOrders.map((item) => ({
  id: item.id,
  name: strings[item.name as keyof typeof strings] ?? item.name,
  size: strings[item.size as keyof typeof strings] ?? item.size,
  qty: strings[item.qty as keyof typeof strings] ?? item.qty,
  image: images[item.image as keyof typeof images],
  price: typeof item.price === "number" ? item.price : Number(item.price),
}));

const cancelledOrders: CancelledOrder[] = Data.CancelledOrder.map((item) => ({
  id: item.id,
  name: strings[item.name as keyof typeof strings] ?? item.name,
  size: strings[item.size as keyof typeof strings] ?? item.size,
  qty: strings[item.qty as keyof typeof strings] ?? item.qty,
  image: images[item.image as keyof typeof images],
  price: typeof item.price === "number" ? item.price : Number(item.price),
}));

const MyOrders = () => {
  const colors = useColors();
  const { statusBarStyle } = useTheme();
  const [activeTab, setActiveTab] = useState(strings.active);

  const getCurrentOrders = () => {
    if (activeTab === strings.active) return activeOrders;
    if (activeTab === strings.completed) return completedOrders;
    return cancelledOrders;
  };

  const status = [strings.active, strings.completed, strings.cancelled];

  return (
    <View
      style={[
        myorderstyles.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <StatusBar style={statusBarStyle} />
      <Header type="myorders" />

      <View style={myorderstyles.tabContainer}>
        {status.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              myorderstyles.tab,
              activeTab === tab && [
                myorderstyles.activeTab,
                { borderBottomColor: colors.colors.active },
              ],
            ]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[
                myorderstyles.tabText,
                {
                  color:
                    activeTab === tab
                      ? colors.colors.active
                      : colors.colors.text,
                },
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={getCurrentOrders()}
        renderItem={({ item }) => (
          <MyOrdersRenderItem item={item} activeTab={activeTab} />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={myorderstyles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default MyOrders;
