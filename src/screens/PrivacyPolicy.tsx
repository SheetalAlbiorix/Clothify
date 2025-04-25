import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { strings } from "../utils/strings";
import { images } from "../utils/images";
import { useColors } from "../hooks/useColors";
import { privacystyle } from "../styles/PrivacypolicyStyle";
import { RootStackParamList } from "../../App";
import { useTheme } from "../themes/theme";
import { StatusBar } from "expo-status-bar";

type PrivacyNavigationProp = StackNavigationProp<RootStackParamList, "privacy">;

const PrivacyTextBlock = ({ content }: { content: string }) => {
  const { colors } = useColors();
  return (
    <Text
      style={[privacystyle.termsConditiontext, { color: colors.textAccent }]}
    >
      {content}
    </Text>
  );
};

const PrivacyPolicy = () => {
  const colors = useColors();
  const { statusBarStyle } = useTheme();
  const navigation = useNavigation<PrivacyNavigationProp>();

  const renderRepeatedText = (count: number, content: string) =>
    Array.from({ length: count }, (_, i) => (
      <PrivacyTextBlock key={i} content={content} />
    ));

  return (
    <View
      style={[
        privacystyle.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <StatusBar style={statusBarStyle} />
      <View style={privacystyle.headerContainer}>
        <TouchableOpacity
          style={privacystyle.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={images.leftarrow}
            style={privacystyle.leftarrowImage}
          />
        </TouchableOpacity>
        <Text style={[privacystyle.header, { color: colors.colors.text }]}>
          {strings.privacypolicy}
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={privacystyle.CancellationContainer}>
          <Text style={privacystyle.headingCancellation}>
            {strings.cancellationpolicy}
          </Text>
          <View style={privacystyle.cancellationPara}>
            <PrivacyTextBlock content={strings.loremPara} />
            <PrivacyTextBlock content={strings.loremsmallpara} />
          </View>
        </View>

        <View style={privacystyle.termsConditionContainer}>
          <Text style={privacystyle.headingtermsCondition}>
            {strings.termsconditions}
          </Text>
          <View style={privacystyle.termsConditionPara}>
            {renderRepeatedText(7, strings.loremPara)}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PrivacyPolicy;
