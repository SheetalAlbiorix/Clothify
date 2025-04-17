import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useRoute, useNavigation, RouteProp } from "@react-navigation/native";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import { useColors } from "../hooks/useColors";
import { leavereviewstyle } from "../styles/LeaveReviewStyle";
import { images } from "../utils/images";
import { strings } from "../utils/strings";
import { Colors } from "../utils/Colors";
import MediaPickerModal from "../components/MediaPicker";

type OrderDataType = {
  id: string;
  name: string;
  size: string;
  qty: number;
  price: number;
  image: any;
};

type RouteParams = {
  LeaveReview: {
    orderData: OrderDataType;
  };
};

const LeaveReviewScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RouteParams, "LeaveReview">>();

  const orderData = route.params?.orderData;
  const colors = useColors();
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState("");
  const [mediaUri, setMediaUri] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleMediaSelected = (uri: string, type: string) => {
    console.log(strings.mediaselected, uri);
    setMediaUri(uri);
  };

  const handleSubmit = () => {
    if (!orderData) {
      Alert.alert(strings.error, strings.orderdatanotfound);
      return;
    }

    console.log({ productId: orderData.id, rating, reviewText });
    navigation.goBack();
  };

  const handleCancel = () => {
    if (!orderData) {
      return;
    }
    navigation.goBack();
  };

  if (!orderData) {
    return (
      <View
        style={[
          leavereviewstyle.container,
          { backgroundColor: colors.colors.background },
        ]}
      >
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
  }

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
          {strings.leavereview}
        </Text>
      </View>

      <View style={leavereviewstyle.flexcontainer}>
        <View style={leavereviewstyle.productRow}>
          <Image source={orderData.image} style={leavereviewstyle.image} />
          <View style={leavereviewstyle.productInfo}>
            <Text
              style={[leavereviewstyle.title, { color: colors.colors.text }]}
            >
              {orderData.name}
            </Text>
            <Text
              style={[
                leavereviewstyle.text,
                { color: colors.colors.textAccent },
              ]}
            >
              {strings.size} {orderData.size} {strings.QTY} {orderData.qty}
            </Text>
            <Text
              style={[leavereviewstyle.price, { color: colors.colors.text }]}
            >
              {strings.$}
              {orderData.price}
            </Text>
          </View>
          <TouchableOpacity style={leavereviewstyle.reorderButton}>
            <Text style={leavereviewstyle.reorderText}>{strings.reorder}</Text>
          </TouchableOpacity>
        </View>
        <View style={leavereviewstyle.divider} />
        <Text
          style={[leavereviewstyle.question, { color: colors.colors.text }]}
        >
          {strings.howsyourorder}
        </Text>
        <View style={leavereviewstyle.divider} />
        <View style={leavereviewstyle.starratingcontainer}>
          <Text
            style={[
              leavereviewstyle.subText,
              { color: colors.colors.textAccent },
            ]}
          >
            {strings.youroverallrating}
          </Text>

          <View style={leavereviewstyle.starRow}>
            {[...Array(5)].map((_, i) => (
              <TouchableOpacity key={i} onPress={() => setRating(i + 1)}>
                <Icon
                  name={i < rating ? "star" : "star-border"}
                  size={40}
                  color={i < rating ? Colors.starColor : Colors.mediumgrey}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={leavereviewstyle.divider} />

        <Text style={[leavereviewstyle.subText, { color: colors.colors.text }]}>
          {strings.adddetailedreview}
        </Text>
        <TextInput
          style={[leavereviewstyle.input, { color: colors.colors.text }]}
          multiline
          numberOfLines={4}
          value={reviewText}
          onChangeText={setReviewText}
          placeholder={strings.enterhere}
          placeholderTextColor={Colors.footerColor}
        />
        <TouchableOpacity
          style={leavereviewstyle.cameraContainer}
          onPress={() => setModalVisible(true)}
        >
          <Image
            source={images.cameraIcon}
            style={leavereviewstyle.cameraIconImage}
          />
          {mediaUri && (
            <Image
              source={{ uri: mediaUri }}
              style={leavereviewstyle.imagemedia}
            />
          )}
          <Text style={leavereviewstyle.addphotoText}>{strings.addphoto}</Text>
        </TouchableOpacity>

        <MediaPickerModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onMediaSelected={handleMediaSelected}
        />
      </View>
      <View
        style={[
          leavereviewstyle.footer,
          {
            backgroundColor: colors.colors.background,
            borderTopColor: colors.colors.borderColor,
          },
        ]}
      >
        <TouchableOpacity
          style={leavereviewstyle.cancelButton}
          onPress={handleCancel}
        >
          <Text style={leavereviewstyle.cancelText}>{strings.cancel}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={leavereviewstyle.submitButton}
          onPress={handleSubmit}
        >
          <Text style={leavereviewstyle.submitText}>{strings.submit}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LeaveReviewScreen;
