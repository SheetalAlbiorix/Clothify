import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { strings } from "../utils/strings";
import { useColors } from "../hooks/useColors";
import { privacystyle } from "../styles/PrivacypolicyStyle";
import { RootStackParamList } from "../../App";
import { useTheme } from "../themes/theme";
import { StatusBar } from "expo-status-bar";
import {
  PrivacyTextBlock,
  renderRepeatedText,
} from "../components/PrivacyTextBlock";
import Header from "../components/HeaderGlobal";
import NoDataFound from "../service/NoDataFound";
import NetInfo from "@react-native-community/netinfo";

type PrivacyNavigationProp = StackNavigationProp<RootStackParamList, "privacy">;

const PrivacyPolicy = () => {
  const colors = useColors();
  const { statusBarStyle } = useTheme();
  const navigation = useNavigation<PrivacyNavigationProp>();
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(!!state.isConnected);
    });
    return () => unsubscribe();
  }, []);

  if (!isConnected) {
    return (
      <View
        style={[
          privacystyle.container,
          { backgroundColor: colors.colors.background },
        ]}
      >
        <StatusBar style={statusBarStyle} />
        <Header type="privacypolicy" />
        <NoDataFound message={strings.noPrivacyPolicyFound} />
      </View>
    );
  }

  return (
    <View
      style={[
        privacystyle.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <StatusBar style={statusBarStyle} />
      <Header type="privacypolicy" />

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
