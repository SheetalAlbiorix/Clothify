import React from "react";
import { TextInput, Text, View } from "react-native";
import { leavereviewstyle } from "../styles/LeaveReviewStyle";
import { strings } from "../utils/strings";
import { Colors } from "../utils/Colors";

type ReviewInputProps = {
  reviewText: string;
  onChangeText: (text: string) => void;
};

const ReviewInput: React.FC<ReviewInputProps> = ({
  reviewText,
  onChangeText,
}) => (
  <View>
    <Text style={leavereviewstyle.subText}>{strings.adddetailedreview}</Text>
    <TextInput
      style={leavereviewstyle.input}
      multiline
      numberOfLines={4}
      value={reviewText}
      onChangeText={onChangeText}
      placeholder={strings.enterhere}
      placeholderTextColor={Colors.footerColor}
    />
  </View>
);

export default ReviewInput;
