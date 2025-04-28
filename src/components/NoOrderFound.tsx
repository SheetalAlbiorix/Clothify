import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { strings } from "../utils/strings";
import { leavereviewstyle } from "../styles/LeaveReviewStyle";
import { useColors } from "../hooks/useColors";
import { useTheme } from "../themes/theme";
import { useNavigation } from "@react-navigation/native";

export const NoOrderFound = () => {
  const colors = useColors();
  const { statusBarStyle } = useTheme();
  const navigation = useNavigation();

  return (
    <View
      style={[
        leavereviewstyle.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <StatusBar style={statusBarStyle} />
      <Text style={leavereviewstyle.headerorderdata}>
        {strings.noorderfound}
      </Text>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={leavereviewstyle.submitButton}
      >
        <Text style={leavereviewstyle.submitText}>{strings.goback}</Text>
      </TouchableOpacity>
    </View>
  );
};

