import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { paymentmethodstyle } from "../styles/PaymentMethodStyle";
import { strings } from "../utils/strings";
import { images } from "../utils/images";
import { useColors } from "../hooks/useColors";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootStackParamList } from "../../App";
import { useTheme } from "../themes/theme";
import { StatusBar } from "expo-status-bar";

type PaymentMethodNavigationProp = StackNavigationProp<
  RootStackParamList,
  "PaymentMethod"
>;

export type SavedCardType = {
  cardNumber: string;
  expiryDate: string;
  cardHolderName: string;
  cvv: string;
  type: string | null;
};

const PaymentMethod = () => {
  const colors = useColors();
  const { statusBarStyle } = useTheme();
  const route = useRoute<RouteProp<RootStackParamList, "PaymentMethod">>();
  const navigation = useNavigation<PaymentMethodNavigationProp>();
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [savedCards, setSavedCards] = useState<SavedCardType[]>([]);

  useEffect(() => {
    const loadCards = async () => {
      try {
        const storedCards = await AsyncStorage.getItem(strings.savedcards);
        if (storedCards) {
          setSavedCards(JSON.parse(storedCards));
        }
      } catch (error) {
        console.error(strings.failedloadcards, error);
      }
    };
    loadCards();
  }, []);

  useEffect(() => {
    const addNewCard = async () => {
      if (route.params?.newCard) {
        try {
          const storedCards = await AsyncStorage.getItem(strings.savedcards);
          const existingCards: SavedCardType[] = storedCards
            ? JSON.parse(storedCards)
            : [];

          const updatedCards = [
            ...existingCards,
            route.params.newCard as SavedCardType,
          ];
          await AsyncStorage.setItem(
            strings.savedcards,
            JSON.stringify(updatedCards)
          );

          setSavedCards(updatedCards);
        } catch (error) {
          console.error(strings.errorsavingcard, error);
        }
      }
    };
    addNewCard();
  }, [route.params?.newCard]);

  const removeCard = async (index: number) => {
    const updatedCards = savedCards.filter((_, i) => i !== index);
    setSavedCards(updatedCards);
    await AsyncStorage.setItem(
      strings.savedcards,
      JSON.stringify(updatedCards)
    );
  };

  return (
    <View
      style={[
        paymentmethodstyle.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <StatusBar style={statusBarStyle} />
      <View style={paymentmethodstyle.headerContainer}>
        <TouchableOpacity
          style={paymentmethodstyle.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={images.leftarrow}
            style={paymentmethodstyle.leftarrowImage}
          />
        </TouchableOpacity>
        <Text
          style={[paymentmethodstyle.header, { color: colors.colors.text }]}
        >
          {strings.paymentmethod}
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={paymentmethodstyle.savedCardsContainer}>
          <Text
            style={[
              paymentmethodstyle.creditdebitheading,
              { color: colors.colors.text },
            ]}
          >
            {strings.creditdebitcard}
          </Text>

          {savedCards.length > 0 ? (
            savedCards.map((card, index) => (
              <View
                key={index}
                style={[
                  paymentmethodstyle.savedCardContainer,
                  { borderColor: colors.colors.borderColor },
                ]}
              >
                <Text
                  style={[
                    paymentmethodstyle.savedCardText,
                    { color: colors.colors.text },
                  ]}
                >
                  {card.type} - {card.cardNumber}
                </Text>
                <Text
                  style={[
                    paymentmethodstyle.savedCardCvv,
                    { color: colors.colors.text },
                  ]}
                >
                  {strings.cvvv} {card.cvv}
                </Text>
                <Text
                  style={[
                    paymentmethodstyle.savedCardCvv,
                    { color: colors.colors.text },
                  ]}
                >
                  {strings.expiry} {card.expiryDate}
                </Text>
                <Text
                  style={[
                    paymentmethodstyle.savedCardCvv,
                    { color: colors.colors.text },
                  ]}
                >
                  {strings.holder} {card.cardHolderName}
                </Text>
                <TouchableOpacity
                  onPress={() => removeCard(index)}
                  style={paymentmethodstyle.deleteButton}
                >
                  <Image
                    source={images.crossIcon}
                    style={[
                      paymentmethodstyle.deleteIcon,
                      { tintColor: colors.colors.tintColor },
                    ]}
                  />
                </TouchableOpacity>
              </View>
            ))
          ) : (
            <Text style={paymentmethodstyle.noCardText}>
              {strings.nosavecards}
            </Text>
          )}
        </View>

        <View style={paymentmethodstyle.mainContainer}>
          <Pressable
            style={[
              paymentmethodstyle.cardIconButton,
              { borderColor: colors.colors.borderColor },
            ]}
            onPress={() => navigation.navigate("AddCard")}
          >
            <View style={paymentmethodstyle.cardandTextContainer}>
              <Image
                source={images.cardIcon}
                style={paymentmethodstyle.cardIconImage}
              />
              <Text
                style={[
                  paymentmethodstyle.addcardText,
                  { color: colors.colors.text },
                ]}
              >
                {strings.addcard}
              </Text>
            </View>
            <Image
              source={images.arrowright}
              style={[
                paymentmethodstyle.arrowright,
                { tintColor: colors.colors.tintColor },
              ]}
            />
          </Pressable>
        </View>

        <View style={paymentmethodstyle.AllPaymentOption}>
          <Text
            style={[
              paymentmethodstyle.moreoptionText,
              { color: colors.colors.text },
            ]}
          >
            {strings.morepaymentoptions}
          </Text>

          <View
            style={[
              paymentmethodstyle.MainConatinerPaypal,
              { borderColor: colors.colors.borderColor },
            ]}
          >
            <Pressable
              style={paymentmethodstyle.paypalIconContainer}
              onPress={() => setSelectedMethod(strings.PAYPAL)}
            >
              <Image
                source={images.paypalIcon}
                style={paymentmethodstyle.paypalIconImage}
              />
              <Text
                style={[
                  paymentmethodstyle.paypalText,
                  { color: colors.colors.text },
                ]}
              >
                {strings.paypal}
              </Text>
            </Pressable>
            <Pressable
              style={paymentmethodstyle.radioButton}
              onPress={() => setSelectedMethod(strings.PAYPAL)}
            >
              {selectedMethod === strings.PAYPAL && (
                <View style={paymentmethodstyle.selectedRadioButton} />
              )}
            </Pressable>
          </View>

          <View
            style={[
              paymentmethodstyle.MainConatinerPaypal,
              { borderColor: colors.colors.borderColor },
            ]}
          >
            <Pressable
              style={paymentmethodstyle.paypalIconContainer}
              onPress={() => setSelectedMethod(strings.APPLEPAY)}
            >
              <Image
                source={images.appleIcon}
                style={[
                  paymentmethodstyle.appleIconImage,
                  { tintColor: colors.colors.tintColor },
                ]}
              />
              <Text
                style={[
                  paymentmethodstyle.paypalText,
                  { color: colors.colors.text },
                ]}
              >
                {strings.applepay}
              </Text>
            </Pressable>
            <Pressable
              style={paymentmethodstyle.radioButton}
              onPress={() => setSelectedMethod(strings.APPLEPAY)}
            >
              {selectedMethod === strings.APPLEPAY && (
                <View style={paymentmethodstyle.selectedRadioButton} />
              )}
            </Pressable>
          </View>

          <View
            style={[
              paymentmethodstyle.MainConatinerPaypal,
              { borderColor: colors.colors.borderColor },
            ]}
          >
            <Pressable
              style={paymentmethodstyle.paypalIconContainer}
              onPress={() => setSelectedMethod(strings.GOOGLEPAY)}
            >
              <Image
                source={images.googleIcon}
                style={paymentmethodstyle.googleIconImage}
              />
              <Text
                style={[
                  paymentmethodstyle.paypalText,
                  { color: colors.colors.text },
                ]}
              >
                {strings.googlepay}
              </Text>
            </Pressable>
            <Pressable
              style={paymentmethodstyle.radioButton}
              onPress={() => setSelectedMethod(strings.GOOGLEPAY)}
            >
              {selectedMethod === strings.GOOGLEPAY && (
                <View style={paymentmethodstyle.selectedRadioButton} />
              )}
            </Pressable>
          </View>
        </View>
      </ScrollView>
      <View
        style={[
          paymentmethodstyle.footer,
          {
            backgroundColor: colors.colors.background,
            borderTopColor: colors.colors.borderColor,
          },
        ]}
      >
        <TouchableOpacity
          style={paymentmethodstyle.paymentButton}
          onPress={() => navigation.navigate("Payment")}
        >
          <Text style={paymentmethodstyle.paymentText}>
            {strings.confirmpayment}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentMethod;
