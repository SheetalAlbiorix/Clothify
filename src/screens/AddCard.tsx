import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { useColors } from "../hooks/useColors";
import { useTheme } from "../themes/theme";
import { strings } from "../utils/strings";
import { addcardstyles } from "../styles/AddCardStyle";
import CardPreview from "../components/CardPreview";
import InputField from "../components/InputField";
import LabelCheck from "../components/LabelCheck";
import {
  detectCardType,
  formatCardNumber,
  formatExpiryDate,
} from "../utils/CardUtils";
import Header from "../components/HeaderGlobal";
import NoDataFound from "../service/NoDataFound";
import NetInfo from "@react-native-community/netinfo";

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
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(!!state.isConnected);
    });
    return () => unsubscribe();
  }, []);

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

  if (!isConnected) {
    return (
      <SafeAreaView
        style={[
          addcardstyles.container,
          { backgroundColor: colors.colors.background },
        ]}
      >
        <StatusBar style={statusBarStyle} />
        <Header showBackButton title={strings.addcard} />
        <View style={[{ flex: 1 }, {backgroundColor: colors.colors.background}]}>
          <NoDataFound message={strings.nocardsfound} />
        </View>
      </SafeAreaView>
    );
  }

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
        <Header showBackButton title={strings.addcard} />
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