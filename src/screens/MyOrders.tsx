import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { myorderstyles } from "../styles/MyOrdersStyle";
import { strings } from "../utils/strings";
import { images } from "../utils/images";
import { useColors } from "../hooks/useColors";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";

type MyorderNavigationProp = StackNavigationProp<
  RootStackParamList,
  "MyOrders"
>;
export type CompletedOrder = {
  id: string;
  name: string;
  size: string;
  qty?: string;
  price: number;
  image: any;
};

export type ActiveOrder = {
    id: string;
    name: string;
    size: string;
    qty?: string;
    price: number;
    image: any;
  };

const activeOrders = [
  {
    id: "1",
    name: strings.brownjacket,
    size: strings.L,
    qty: strings.pcs2,
    price: 49.99,
    image: images.jacket1,
  },
  {
    id: "2",
    name: strings.yelloshirt,
    size: strings.M,
    qty: strings.pcs1,
    price: 89.99,
    image: images.jacket2,
  },
  {
    id: "3",
    name: strings.lightgreyjacket,
    size: strings.M,
    qty: strings.pcs1,
    price: 89.99,
    image: images.lightgreyjacket,
  },
  {
    id: "4",
    name: strings.orangeshirt,
    size: strings.M,
    qty: strings.pcs1,
    price: 120.99,
    image: images.orangeshirt,
  },
  {
    id: "5",
    name: strings.sweatshirt,
    size: strings.XXL,
    qty: strings.pcs1,
    price: 100.99,
    image: images.sweatshirt,
  },
  {
    id: "6",
    name: strings.maroonsweatshirt,
    size: strings.XL,
    qty: strings.pcs1,
    price: 90.99,
    image: images.maroonsweatshirt,
  },
  {
    id: "7",
    name: strings.creamyshirt,
    size: strings.L,
    qty: strings.pcs1,
    price: 60.99,
    image: images.creamyshirt,
  },
];

const completedOrders = [
  {
    id: "1",
    name: strings.darkbrownjacket,
    size: strings.XL,
    qty: strings.pcs1,
    price: 59.99,
    image: images.jacket3,
  },
  {
    id: "2",
    name: strings.lightbrownjacket,
    size: strings.S,
    qty: strings.pcs3,
    price: 120,
    image: images.jacket4,
  },
  {
    id: "3",
    name: strings.whitecreamyshirt,
    size: strings.S,
    qty: strings.pcs3,
    price: 120,
    image: images.whitecreamyshirt,
  },
  {
    id: "4",
    name: strings.whitevanillashirt,
    size: strings.S,
    qty: strings.pcs3,
    price: 120,
    image: images.whitevanillashirt,
  },
  {
    id: "5",
    name: strings.slimbrownsweater,
    size: strings.S,
    qty: strings.pcs3,
    price: 120,
    image: images.slimbrownsweater,
  },
  {
    id: "6",
    name: strings.lightgreencoat,
    size: strings.S,
    qty: strings.pcs3,
    price: 120,
    image: images.lightgreencoat,
  },
  {
    id: "7",
    name: strings.whitefrock,
    size: strings.S,
    qty: strings.pcs3,
    price: 120,
    image: images.whitefrock,
  },
];

const cancelledOrders = [
  {
    id: "1",
    name: strings.blackblazer,
    size: strings.pcs4,
    price: 79.99,
    image: images.jacket5,
  },
  {
    id: "2",
    name: strings.redshirt,
    size: strings.M,
    qty: strings.pcs2,
    price: 39.99,
    image: images.jacket6,
  },
  {
    id: "3",
    name: strings.brownsuit,
    size: strings.pcs4,
    price: 79.99,
    image: images.suit1,
  },
  {
    id: "4",
    name: strings.darkwoodshirt,
    size: strings.M,
    qty: strings.pcs2,
    price: 39.99,
    image: images.darkwoodshirt,
  },
  {
    id: "5",
    name: strings.brownishTreeDress,
    size: strings.pcs4,
    price: 79.99,
    image: images.brownishTreeDress,
  },
  {
    id: "6",
    name: strings.whitewoodBlazer,
    size: strings.M,
    qty: strings.pcs2,
    price: 39.99,
    image: images.whitewoodBlazer,
  },
  {
    id: "7",
    name: strings.Shirt,
    size: strings.M,
    qty: strings.pcs2,
    price: 39.99,
    image: images.shirt1,
  },
];

const MyOrders = () => {
  const colors = useColors();
  const navigation = useNavigation<MyorderNavigationProp>();
  const [activeTab, setActiveTab] = useState(strings.active);

  const getButtonText = () => {
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
  };

  type OrderItem = {
    id: string;
    name: string;
    size: string;
    qty?: string;
    price: number;
    image: any;
  };

  const renderOrderItem = ({ item }: { item: OrderItem }) => (
    <View style={myorderstyles.orderItemContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
              style={[
                myorderstyles.productPrice,
                { color: colors.colors.text },
              ]}
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
            onPress={() => {
              if (activeTab === strings.active) {
                navigation.navigate("TrackOrder", { orderId: item.id, orderData: item });
              } else if (activeTab === strings.completed) {
                navigation.navigate("LeaveReview", {
                  orderId: item.id,
                  orderData: item,
                });
              } else if (activeTab === strings.cancelled) {
                // navigation.navigate("Reorder", { orderId: item.id });
                Alert.alert('Coming Soon')
              }
            }}
          >
            <Text style={myorderstyles.buttonText}>{getButtonText()}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View
        style={[
          myorderstyles.divider,
          { borderColor: colors.colors.borderColor },
        ]}
      />
    </View>
  );

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
      <View style={myorderstyles.headerContainer}>
        <TouchableOpacity
          style={myorderstyles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={images.leftarrow}
            style={myorderstyles.leftarrowImage}
          />
        </TouchableOpacity>
        <Text style={[myorderstyles.header, { color: colors.colors.text }]}>
          {strings.myorders}
        </Text>
      </View>

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
        renderItem={renderOrderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={myorderstyles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default MyOrders;
