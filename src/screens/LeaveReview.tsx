import React, { useEffect, useState } from "react";
import { View, Text, Image, Alert, TouchableOpacity } from "react-native";
import { useRoute, useNavigation, RouteProp } from "@react-navigation/native";
import { useColors } from "../hooks/useColors";
import { leavereviewstyle } from "../styles/LeaveReviewStyle";
import { strings } from "../utils/strings";
import { Colors } from "../utils/Colors";
import { useTheme } from "../themes/theme";
import { StatusBar } from "expo-status-bar";
import ProductInfo from "../components/ProductInfo";
import StarRating from "../components/StarRating";
import ReviewInput from "../components/ReviewInput";
import LeaveFooterButton from "../components/LeaveFooterButton";
import MediaPickerModal from "../components/MediaPicker";
import { NoOrderFound } from "../components/NoOrderFound";
import { images } from "../utils/images";
import MediaPickerSection from "../components/MediaPickerSection";
import { RouteParams } from "../types/types";
import Header from "../components/HeaderGlobal";
import NoDataFound from "../service/NoDataFound";
import NetInfo from "@react-native-community/netinfo";

const LeaveReviewScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RouteParams, "LeaveReview">>();

  const orderData = route.params?.orderData;
  const colors = useColors();
  const { statusBarStyle } = useTheme();
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState("");
  const [mediaUri, setMediaUri] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(!!state.isConnected);
    });
    return () => unsubscribe();
  }, []);

  const handleMediaSelected = (uri: string) => {
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
    return <NoOrderFound />;
  }

  if (!isConnected) {
    return (
      <View
        style={[
          leavereviewstyle.container,
          { backgroundColor: colors.colors.background },
        ]}
      >
        <StatusBar style={statusBarStyle} />
        <Header type="leavereview" />
        <NoDataFound message={strings.noReviewsFound} />
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
      <StatusBar style={statusBarStyle} />
      <Header type="leavereview" />
      <View style={leavereviewstyle.flexcontainer}>
        <ProductInfo
          name={orderData.name}
          size={orderData.size}
          qty={orderData.qty}
          price={orderData.price}
          image={orderData.image}
        />
        <View style={leavereviewstyle.divider} />
        <Text
          style={[leavereviewstyle.question, { color: colors.colors.text }]}
        >
          {strings.howsyourorder}
        </Text>
        <StarRating rating={rating} onRatingChange={setRating} />
        <View style={leavereviewstyle.divider} />
        <ReviewInput reviewText={reviewText} onChangeText={setReviewText} />
        <MediaPickerSection
          mediaUri={mediaUri}
          onPress={() => setModalVisible(true)}
        />
        <MediaPickerModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onMediaSelected={handleMediaSelected}
        />
      </View>

      <LeaveFooterButton onCancel={handleCancel} onSubmit={handleSubmit} />
    </View>
  );
};

export default LeaveReviewScreen;
