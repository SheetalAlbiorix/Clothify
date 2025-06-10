import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { strings } from "../utils/strings";
import { useColors } from "../hooks/useColors";
import { Colors } from "../utils/Colors";
import { orderstatusstyle } from "../styles/OrderStatusStyle";
import { OrderStatus } from "../types/types";

const OrderStatusTimeline = ({
  orderStatuses,
}: {
  orderStatuses: OrderStatus[];
}) => {
  const colors = useColors();
  return (
    <View style={orderstatusstyle.container}>
      {orderStatuses.map((status, index) => (
        <View key={index} style={orderstatusstyle.statusItem}>
          <View style={orderstatusstyle.statusIndicatorContainer}>
            <View
              style={[
                orderstatusstyle.statusIndicator,
                status.completed
                  ? orderstatusstyle.completedIndicator
                  : orderstatusstyle.pendingIndicator,
              ]}
            >
              {status.completed && (
                <MaterialIcons name="check" size={16} color={Colors.white} />
              )}
            </View>
            {index < orderStatuses.length - 1 && (
              <View
                style={[
                  orderstatusstyle.statusLine,
                  status.completed && orderStatuses[index + 1].completed
                    ? orderstatusstyle.completedLine
                    : orderstatusstyle.pendingLine,
                ]}
              />
            )}
          </View>

          <View style={orderstatusstyle.statusDetails}>
            <Text
              style={[
                orderstatusstyle.statusTitle,
                { color: colors.colors.text },
              ]}
            >
              {status.title}
            </Text>
            <Text style={orderstatusstyle.statusDate}>{status.date}</Text>
          </View>

          <View style={orderstatusstyle.iconContainer}>{status.icon}</View>
        </View>
      ))}
    </View>
  );
};

const OrderStatusView = () => {
  const colors = useColors();
  const orderStatuses = [
    {
      title: strings.orderplaced,
      date: strings.datetime,
      completed: true,
      icon: (
        <FontAwesome5 name="clipboard-list" size={20} color={Colors.brown} />
      ),
    },
    {
      title: strings.inprogress,
      date: strings.datetime2,
      completed: true,
      icon: <FontAwesome5 name="box" size={20} color={Colors.brown} />,
    },
    {
      title: strings.shipped,
      date: strings.datetime3,
      completed: false,
      icon: (
        <FontAwesome5
          name="shipping-fast"
          size={20}
          color={Colors.trackingColor}
        />
      ),
    },
    {
      title: strings.delivered,
      date: strings.datetime4,
      completed: false,
      icon: (
        <FontAwesome5 name="box-open" size={20} color={Colors.trackingColor} />
      ),
    },
  ];

  return (
    <View style={orderstatusstyle.orderstatusContainer}>
      <Text
        style={[orderstatusstyle.headerText, { color: colors.colors.text }]}
      >
        {strings.orderstatus}
      </Text>
      <OrderStatusTimeline orderStatuses={orderStatuses} />
    </View>
  );
};

export default OrderStatusView;
