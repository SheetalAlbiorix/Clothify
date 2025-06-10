import React from "react";
import { TouchableOpacity, Image, Text } from "react-native";
import { leavereviewstyle } from "../styles/LeaveReviewStyle";
import { images } from "../utils/images";
import { strings } from "../utils/strings";
import { MediaPickerSectionProps } from "../types/types";

const MediaPickerSection: React.FC<MediaPickerSectionProps> = ({
  mediaUri,
  onPress,
}) => (
  <TouchableOpacity style={leavereviewstyle.cameraContainer} onPress={onPress}>
    <Image
      source={images.cameraIcon}
      style={leavereviewstyle.cameraIconImage}
    />
    {mediaUri && (
      <Image source={{ uri: mediaUri }} style={leavereviewstyle.imagemedia} />
    )}
    <Text style={leavereviewstyle.addphotoText}>{strings.addphoto}</Text>
  </TouchableOpacity>
);

export default MediaPickerSection;
