import { View, Text } from "react-native";
import React from "react";
import { strings } from "../utils/strings";
import { trackorderstyle } from "../styles/TrackOrderStyle";
import { useColors } from "../hooks/useColors";

const TrackDetail = () => {
    const colors = useColors();
  return (
    <View>
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
    </View>
  );
};

export default TrackDetail;
