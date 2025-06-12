import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { useColors } from "../hooks/useColors";
import { useNavigation } from "@react-navigation/native";
import { strings } from "../utils/strings";
import { images } from "../utils/images";
import { invitestyle } from "../styles/inviteStyle";
import { InviteCard } from "../components/InviteCard";
import { useTheme } from "../themes/theme";
import { StatusBar } from "expo-status-bar";
import Data from "../utils/Data.json";
import Header from "../components/HeaderGlobal";
import NoDataFound from "../service/NoDataFound";
import NetInfo from "@react-native-community/netinfo";

type InviteNavigationProp = StackNavigationProp<RootStackParamList, "invite">;

const contacts = Data.inviteFriends.map((item) => ({
  id: item.id,
  name: strings[item.name as keyof typeof strings] || item.name,
  number: strings[item.number as keyof typeof strings] || item.number,
  image: images[item.image as keyof typeof images],
}));

const InviteFriends = () => {
  const { colors } = useColors();
  const { statusBarStyle } = useTheme();
  const navigation = useNavigation<InviteNavigationProp>();
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
        style={[invitestyle.container, { backgroundColor: colors.background }]}
      >
        <StatusBar style={statusBarStyle} />
        <Header type="invitefriends" />
        <NoDataFound message={strings.noInviteListFound} />
      </View>
    );
  }

  return (
    <View
      style={[invitestyle.container, { backgroundColor: colors.background }]}
    >
      <StatusBar style={statusBarStyle} />
      <Header type="invitefriends" />
      <ScrollView>
        <View style={invitestyle.listholder}>
          {contacts.map((contact, index) => (
            <View key={contact.id}>
              <InviteCard
                name={contact.name}
                number={contact.number}
                images={contact.image}
                colors={colors}
              />
              {index !== contacts.length - 1 && (
                <View style={invitestyle.divider} />
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default InviteFriends;
