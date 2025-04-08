import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { strings } from "../utils/strings";
import { leavereviewstyle } from "../styles/LeaveReviewStyle";
import { images } from "../utils/images";
import { useColors } from "../hooks/useColors";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";

type LeaveReviewNavigationProp = StackNavigationProp<
  RootStackParamList,
  "LeaveReview"
>;

const LeaveReview = () => {
  const colors = useColors();
  const navigation = useNavigation<LeaveReviewNavigationProp>();
  return (
    <View
      style={[
        leavereviewstyle.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <View style={leavereviewstyle.headerContainer}>
        <TouchableOpacity
          style={leavereviewstyle.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={images.leftarrow}
            style={leavereviewstyle.leftarrowImage}
          />
        </TouchableOpacity>
        <Text style={[leavereviewstyle.header, { color: colors.colors.text }]}>
          {strings.LeaveReview}
        </Text>
      </View>
      <View>
        
      </View>
    </View>
  );
};

export default LeaveReview;
