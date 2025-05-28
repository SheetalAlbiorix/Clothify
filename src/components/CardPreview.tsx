import React from "react";
import { View, Text } from "react-native";
import { addcardstyles } from "../styles/AddCardStyle";
import { strings } from "../utils/strings";

interface CardPreviewProps {
  cardType: string | null;
  cardNumber: string;
  cardHolderName: string;
  expiryDate: string;
}

const CardPreview: React.FC<CardPreviewProps> = ({
  cardType,
  cardNumber,
  cardHolderName,
  expiryDate,
}) => {
  return (
    <View style={addcardstyles.cardPreview}>
      <Text style={addcardstyles.visaText}>{cardType || strings.cardType}</Text>
      <Text style={addcardstyles.cardNumberPreview}>
        {cardNumber || strings.hiddenText}
      </Text>
      <View style={addcardstyles.cardPreviewBottom}>
        <View>
          <Text style={addcardstyles.cardPreviewLabel}>
            {strings.cardholdername}
          </Text>
          <Text style={addcardstyles.cardPreviewValue}>
            {cardHolderName || strings.estherhoward}
          </Text>
        </View>
        <View>
          <Text style={addcardstyles.cardPreviewLabel}>
            {strings.expirydate}
          </Text>
          <Text style={addcardstyles.cardPreviewValue}>
            {expiryDate || strings.expire0230}
          </Text>
        </View>
        <View style={addcardstyles.chipIcon}>
          <View style={addcardstyles.chipLines}></View>
        </View>
      </View>
    </View>
  );
};

export default CardPreview;
