import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { addcardstyles } from "../styles/AddCardStyle";
import { strings } from "../utils/strings";
import { images } from "../utils/images";
import { useNavigation } from "@react-navigation/native";
import { useColors } from "../hooks/useColors";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { Colors } from "../utils/Colors";

type AddCardNavigationProp = StackNavigationProp<RootStackParamList, "AddCard">;

const AddCard = () => {
  const colors = useColors();
  const navigation = useNavigation<AddCardNavigationProp>();
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [saveCard, setSaveCard] = useState(false);
  const [cardType, setCardType] = useState<string | null>(null);

  const detectCardType = (number: string) => {
    const cleaned = number.replace(/\D/g, "");
    if (/^4/.test(cleaned)) return "Visa";
    if (/^5[1-5]/.test(cleaned)) return "MasterCard";
    if (/^3[47]/.test(cleaned)) return "American Express";
    if (/^6(?:011|5)/.test(cleaned)) return "Discover";
    return null;
  };

  const formatCardNumber = (text: string) => {
    const cleaned = text.replace(/\D/g, "");
    const truncated = cleaned.substring(0, 16);
    let formatted = "";
    for (let i = 0; i < truncated.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formatted += " ";
      }
      formatted += truncated[i];
    }
    return formatted;
  };

  const formatExpiryDate = (text: string) => {
    const cleaned = text.replace(/\D/g, "");
    const truncated = cleaned.substring(0, 4);
    if (truncated.length > 2) {
      return truncated.substring(0, 2) + "/" + truncated.substring(2);
    }
    return truncated;
  };

  const handleCardNumberChange = (text: string) => {
    const formatted = formatCardNumber(text);
    setCardNumber(formatted);
    setCardType(detectCardType(text));
  };

  const handleExpiryDateChange = (text: string) => {
    const formatted = formatExpiryDate(text);
    setExpiryDate(formatted);
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
          <View style={addcardstyles.cardPreview}>
            <Text style={addcardstyles.visaText}>{cardType || "Card Type"}</Text>
            <Text style={addcardstyles.cardNumberPreview}>
              {cardNumber || "4716 9627 1635 8047"}
            </Text>
            <View style={addcardstyles.cardPreviewBottom}>
              <View>
                <Text style={addcardstyles.cardPreviewLabel}>
                  Card holder name
                </Text>
                <Text style={addcardstyles.cardPreviewValue}>
                  {cardHolderName || "Esther Howard"}
                </Text>
              </View>
              <View>
                <Text style={addcardstyles.cardPreviewLabel}>Expiry date</Text>
                <Text style={addcardstyles.cardPreviewValue}>
                  {expiryDate || "02/30"}
                </Text>
              </View>
              <View style={addcardstyles.chipIcon}>
                <View style={addcardstyles.chipLines}></View>
              </View>
            </View>
          </View>

          <View style={addcardstyles.formContainer}>
            <View style={addcardstyles.inputGroup}>
              <Text
                style={[
                  addcardstyles.inputLabel,
                  { color: colors.colors.text },
                ]}
              >
                Card Holder Name
              </Text>
              <TextInput
                style={[addcardstyles.input, { color: colors.colors.text }]}
                placeholder="Esther Howard"
                placeholderTextColor={Colors.mediumgrey}
                value={cardHolderName}
                onChangeText={setCardHolderName}
              />
            </View>

            <View style={addcardstyles.inputGroup}>
              <Text
                style={[
                  addcardstyles.inputLabel,
                  { color: colors.colors.text },
                ]}
              >
                Card Number
              </Text>
              <TextInput
                style={[addcardstyles.input, { color: colors.colors.text }]}
                placeholder="4716 9627 1635 8047"
                placeholderTextColor={Colors.mediumgrey}
                value={cardNumber}
                onChangeText={handleCardNumberChange}
                keyboardType="numeric"
                maxLength={19}
              />
            </View>

            <View style={addcardstyles.row}>
              <View style={[addcardstyles.inputGroup, addcardstyles.halfWidth]}>
                <Text
                  style={[
                    addcardstyles.inputLabel,
                    { color: colors.colors.text },
                  ]}
                >
                  Expiry Date
                </Text>
                <TextInput
                  style={[addcardstyles.input, { color: colors.colors.text }]}
                  placeholder="02/30"
                  placeholderTextColor={Colors.mediumgrey}
                  value={expiryDate}
                  onChangeText={handleExpiryDateChange}
                  keyboardType="numeric"
                  maxLength={5}
                />
              </View>
              <View style={[addcardstyles.inputGroup, addcardstyles.halfWidth]}>
                <Text
                  style={[
                    addcardstyles.inputLabel,
                    { color: colors.colors.text },
                  ]}
                >
                  CVV
                </Text>
                <TextInput
                  style={[addcardstyles.input, { color: colors.colors.text }]}
                  placeholder="000"
                  placeholderTextColor={Colors.mediumgrey}
                  value={cvv}
                  onChangeText={setCvv}
                  keyboardType="numeric"
                  maxLength={3}
                  secureTextEntry={true}
                />
              </View>
            </View>

            <TouchableOpacity
              style={addcardstyles.checkboxContainer}
              onPress={() => setSaveCard(!saveCard)}
            >
              <View
                style={[
                  addcardstyles.checkbox,
                  saveCard && addcardstyles.checkboxChecked,
                ]}
              >
                {saveCard && <Text style={addcardstyles.checkmark}>✓</Text>}
              </View>
              <Text
                style={[
                  addcardstyles.checkboxLabel,
                  { color: colors.colors.text },
                ]}
              >
                Save Card
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={addcardstyles.addCardButton} onPress={handleAddCard}>
              <Text style={addcardstyles.addCardButtonText}>Add Card</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddCard;
