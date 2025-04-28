import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import { leavereviewstyle } from "../styles/LeaveReviewStyle";
import { Colors } from "../utils/Colors";
import { strings } from "../utils/strings";

type StarRatingProps = {
  rating: number;
  onRatingChange: (rating: number) => void;
};

const StarRating: React.FC<StarRatingProps> = ({ rating, onRatingChange }) => (
  <View style={leavereviewstyle.starratingcontainer}>
    <Text style={leavereviewstyle.subText}>{strings.youroverallrating}</Text>
    <View style={leavereviewstyle.starRow}>
      {[...Array(5)].map((_, i) => (
        <TouchableOpacity key={i} onPress={() => onRatingChange(i + 1)}>
          <Icon
            name={i < rating ? "star" : "star-border"}
            size={40}
            color={i < rating ? Colors.starColor : Colors.mediumgrey}
          />
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

export default StarRating;
