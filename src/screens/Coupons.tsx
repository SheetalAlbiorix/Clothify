import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { couponsStyle } from "../styles/CouponsStyle";
import { strings } from "../utils/strings";
import { useNavigation } from "@react-navigation/native";
import { useColors } from "../hooks/useColors";
import { RootStackParamList } from "../../App";
import { StackNavigationProp } from "@react-navigation/stack";
import CouponCard from "../components/CouponCard";
import { useTheme } from "../themes/theme";
import { StatusBar } from "expo-status-bar";
import Header from "../components/HeaderGlobal";
import NoDataFound from "../service/NoDataFound";
import NetInfo from "@react-native-community/netinfo";

type CouponNavigationProp = StackNavigationProp<RootStackParamList, "Coupons">;

const Coupons = () => {
  const colors = useColors();
  const { statusBarStyle } = useTheme();
  const navigation = useNavigation<CouponNavigationProp>();
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
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
          couponsStyle.container,
          { backgroundColor: colors.colors.background },
        ]}
      >
        <StatusBar style={statusBarStyle} />
        <Header type="coupons" />
        <NoDataFound message={strings.noCouponDataFound} />
      </View>
    );
  }

  return (
    <View
      style={[
        couponsStyle.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <StatusBar style={statusBarStyle} />
      <Header type="coupons" />
      <View style={couponsStyle.MainView}>
        <Text
          style={[couponsStyle.bestforyouText, { color: colors.colors.text }]}
        >
          {strings.bestoffersText}
        </Text>
        <ScrollView>
          <View
            style={[
              couponsStyle.couponWrapper,
              { backgroundColor: colors.colors.background },
            ]}
          >
            <CouponCard
              code={strings.welcome200}
              amountNeeded={strings.dollar2}
              discount={strings.fiftyoff}
              onApplyCoupon={(appliedCode) => {
                setAppliedCoupon(appliedCode);
              }}
            />
            <CouponCard
              code={strings.cashback12}
              amountNeeded={strings.dollar2}
              discount={strings.upto12offcashback}
              onApplyCoupon={(appliedCode) => {
                setAppliedCoupon(appliedCode);
              }}
            />
            <CouponCard
              code={strings.fest2cost}
              amountNeeded={strings.dollar28}
              discount={strings.get50offcombo}
              onApplyCoupon={(appliedCode) => {
                setAppliedCoupon(appliedCode);
              }}
            />
            <CouponCard
              code={strings.first100}
              amountNeeded={strings.dollar10}
              discount={strings.getflat100off}
              onApplyCoupon={(appliedCode) => {
                setAppliedCoupon(appliedCode);
              }}
            />
            <CouponCard
              code={strings.happynew500}
              amountNeeded={strings.dollar350}
              discount={strings.get500offflat}
              onApplyCoupon={(appliedCode) => {
                setAppliedCoupon(appliedCode);
              }}
            />
            <CouponCard
              code={strings.freeforall}
              amountNeeded={strings.dollar0}
              discount={strings.get100offfull}
              onApplyCoupon={(appliedCode) => {
                setAppliedCoupon(appliedCode);
              }}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Coupons;
