import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NoDataFound = ({ message = "No data found." }: { message?: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  message: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
  },
});

export default NoDataFound;
