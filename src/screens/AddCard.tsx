import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  View,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { useColors } from "../hooks/useColors";
import { useTheme } from "../themes/theme";
import { strings } from "../utils/strings";
import { images } from "../utils/images";
import { addcardstyles } from "../styles/AddCardStyle";
import CardPreview from "../components/CardPreview";
import InputField from "../components/InputField";
import LabelCheck from "../components/LabelCheck";

type AddCardNavigationProp = StackNavigationProp<RootStackParamList, "AddCard">;

const AddCard = () => {
  const navigation = useNavigation<AddCardNavigationProp>();
  const colors = useColors();
  const { statusBarStyle } = useTheme();
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [saveCard, setSaveCard] = useState(false);
  const [cardType, setCardType] = useState<string | null>(null);

  const detectCardType = (number: string) => {
    const cleaned = number.replace(/\D/g, "");
    if (/^4/.test(cleaned)) return strings.visa;
    if (/^5[1-5]/.test(cleaned)) return strings.mastercard;
    if (/^3[47]/.test(cleaned)) return strings.americanexpress;
    if (/^6(?:011|5)/.test(cleaned)) return strings.discover;
    return null;
  };

  const formatCardNumber = (text: string) => {
    const cleaned = text.replace(/\D/g, "").substring(0, 16);
    return cleaned.match(/.{1,4}/g)?.join(" ") ?? "";
  };

  const formatExpiryDate = (text: string) => {
    const cleaned = text.replace(/\D/g, "").substring(0, 4);
    return cleaned.length > 2
      ? `${cleaned.substring(0, 2)}/${cleaned.substring(2)}`
      : cleaned;
  };

  const handleCardNumberChange = (text: string) => {
    setCardNumber(formatCardNumber(text));
    setCardType(detectCardType(text));
  };

  const handleExpiryDateChange = (text: string) => {
    setExpiryDate(formatExpiryDate(text));
  };

  const handleAddCard = () => {
    if (saveCard && cardNumber.length >= 4) {
      navigation.navigate("PaymentMethod", {
        newCard: {
          cardNumber: `${cardNumber.slice(0, 4)} **** **** ****`,
          expiryDate,
          cardHolderName,
          cvv: "***",
          type: cardType,
        },
      });
    }
  };

  return (
    <SafeAreaView
      style={[
        addcardstyles.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <StatusBar style={statusBarStyle} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={addcardstyles.keyboardAvoidView}
      >
        <View style={addcardstyles.headerContainer}>
          <TouchableOpacity
            style={addcardstyles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={images.leftarrow}
              style={addcardstyles.leftarrowImage}
            />
          </TouchableOpacity>
          <Text style={[addcardstyles.header, { color: colors.colors.text }]}>
            {strings.addcard}
          </Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CardPreview
            cardType={cardType}
            cardNumber={cardNumber}
            cardHolderName={cardHolderName}
            expiryDate={expiryDate}
          />
          <View style={addcardstyles.formContainer}>
            <InputField
              label={strings.CARDHOLDERNAME}
              value={cardHolderName}
              onChangeText={setCardHolderName}
              placeholder={strings.estherhoward}
            />
            <InputField
              label={strings.cardnumber}
              value={cardNumber}
              onChangeText={handleCardNumberChange}
              placeholder={strings.placeholdercardnumber}
              keyboardType="numeric"
              maxLength={19}
            />
            <View style={addcardstyles.row}>
              <InputField
                label={strings.expireDate}
                value={expiryDate}
                onChangeText={handleExpiryDateChange}
                placeholder={strings.expire0230}
                keyboardType="numeric"
                maxLength={5}
                style={addcardstyles.halfWidth}
              />
              <InputField
                label={strings.cvv}
                value={cvv}
                onChangeText={setCvv}
                placeholder={strings.three0}
                keyboardType="numeric"
                maxLength={3}
                secureTextEntry
                style={addcardstyles.halfWidth}
              />
            </View>
            <LabelCheck
              checked={saveCard}
              label={strings.savecard}
              onPress={() => setSaveCard(!saveCard)}
            />
            <TouchableOpacity
              style={addcardstyles.addCardButton}
              onPress={handleAddCard}
            >
              <Text style={addcardstyles.addCardButtonText}>
                {strings.addcard}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddCard;
