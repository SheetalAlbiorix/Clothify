import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { strings } from "../utils/strings";
import { mediapcikerstyles } from "../styles/MediaPickerStyle";
import { useColors } from "../hooks/useColors";
import { MediaPickerModalProps } from "../types/types";

const MediaPickerModal: React.FC<MediaPickerModalProps> = ({
  visible,
  onClose,
  onMediaSelected,
}) => {
  const colors = useColors();
  const handleMediaPick = async (fromCamera: boolean) => {
    try {
      const result = fromCamera
        ? await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1,
          })
        : await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1,
          });

      if (!result.canceled && result.assets) {
        const { uri, type } = result.assets[0];
        onMediaSelected(uri ?? "", type ?? "");
      }
    } catch (error) {
      console.error(strings.errorpickingmedia, error);
    } finally {
      onClose();
    }
  };

  return (
    <>
      <Modal transparent={true} visible={visible} animationType="slide">
        <View style={mediapcikerstyles.modalOverlay}>
          <View style={mediapcikerstyles.modalContainer}>
            <Text style={mediapcikerstyles.title}>{strings.selectmedia}</Text>
            <Text
              style={[
                mediapcikerstyles.subtitle,
                { color: colors.colors.textAccent },
              ]}
            >
              {strings.chooseoption}
            </Text>

            <TouchableOpacity
              style={mediapcikerstyles.button}
              onPress={() => handleMediaPick(true)}
            >
              <Text style={mediapcikerstyles.buttonText}>
                {strings.capturephoto}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={mediapcikerstyles.button}
              onPress={() => handleMediaPick(false)}
            >
              <Text style={mediapcikerstyles.buttonText}>
                {strings.pickfromgallery}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[mediapcikerstyles.button, mediapcikerstyles.cancelButton]}
              onPress={onClose}
            >
              <Text
                style={[
                  mediapcikerstyles.buttonText,
                  mediapcikerstyles.cancelText,
                ]}
              >
                {strings.cancels}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default MediaPickerModal;
