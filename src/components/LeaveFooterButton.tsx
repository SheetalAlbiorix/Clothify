import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { leavereviewstyle } from "../styles/LeaveReviewStyle";
import { strings } from "../utils/strings";
import { LeaveFooterButtonsProps } from "../types/types";

const LeaveFooterButtons: React.FC<LeaveFooterButtonsProps> = ({
  onCancel,
  onSubmit,
}) => (
  <View style={leavereviewstyle.footer}>
    <TouchableOpacity style={leavereviewstyle.cancelButton} onPress={onCancel}>
      <Text style={leavereviewstyle.cancelText}>{strings.cancel}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={leavereviewstyle.submitButton} onPress={onSubmit}>
      <Text style={leavereviewstyle.submitText}>{strings.submit}</Text>
    </TouchableOpacity>
  </View>
);

export default LeaveFooterButtons;
