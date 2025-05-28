import { Text } from "react-native";
import React from "react";
import { useColors } from "../hooks/useColors";
import { privacystyle } from "../styles/PrivacypolicyStyle";

export const PrivacyTextBlock = ({ content }: { content: string }) => {
  const { colors } = useColors();
  return (
    <Text
      style={[privacystyle.termsConditiontext, { color: colors.textAccent }]}
    >
      {content}
    </Text>
  );
};

export const renderRepeatedText = (count: number, content: string) =>
  Array.from({ length: count }, (_, i) => (
    <PrivacyTextBlock key={i} content={content} />
  ));
