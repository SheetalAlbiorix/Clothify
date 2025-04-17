import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { useColors } from "../hooks/useColors";
import { useNavigation } from "@react-navigation/native";
import { strings } from "../utils/strings";
import { images } from "../utils/images";
import { invitestyle } from "../styles/inviteStyle";

type InviteNavigationProp = StackNavigationProp<RootStackParamList, "invite">;

const contacts = [
  {
    id: 1,
    name: strings.avatar1,
    number: strings.number1,
    image: images.avatar1,
  },
  {
    id: 2,
    name: strings.avatar2,
    number: strings.number2,
    image: images.avatar2,
  },
  {
    id: 3,
    name: strings.avatar3,
    number: strings.number3,
    image: images.avatar3,
  },
  {
    id: 4,
    name: strings.avatar4,
    number: strings.number4,
    image: images.avatar4,
  },
  {
    id: 5,
    name: strings.avatar5,
    number: strings.number5,
    image: images.avatar5,
  },
  {
    id: 6,
    name: strings.avatar6,
    number: strings.number6,
    image: images.avatar6,
  },
  {
    id: 7,
    name: strings.avatar7,
    number: strings.number7,
    image: images.avatar7,
  },
  {
    id: 8,
    name: strings.avatar8,
    number: strings.number8,
    image: images.avatar8,
  },
  {
    id: 9,
    name: strings.avatar9,
    number: strings.number9,
    image: images.avatar11,
  },
  {
    id: 10,
    name: strings.avatar10,
    number: strings.number10,
    image: images.avatar13,
  },
];

const InviteCard = ({
  name,
  number,
  images,
  colors,
}: {
  name: string;
  number: string;
  images: any;
  colors: any;
}) => (
  <View style={invitestyle.inviteContainer}>
    <View style={invitestyle.mainInvite}>
      <Image source={images} style={invitestyle.profileIcon} />
      <View style={invitestyle.namenumber}>
        <Text style={[invitestyle.profilenameText, { color: colors.text }]}>
          {name}
        </Text>
        <Text
          style={[invitestyle.profilenumberText, { color: colors.textAccent }]}
        >
          {number}
        </Text>
      </View>
    </View>
    <TouchableOpacity style={invitestyle.invitebutton}>
      <Text style={invitestyle.inviteText}>{strings.invite}</Text>
    </TouchableOpacity>
  </View>
);

const InviteFriends = () => {
  const { colors } = useColors();
  const navigation = useNavigation<InviteNavigationProp>();

  return (
    <View
      style={[invitestyle.container, { backgroundColor: colors.background }]}
    >
      <View style={invitestyle.headerContainer}>
        <TouchableOpacity
          style={invitestyle.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image source={images.leftarrow} style={invitestyle.leftarrowImage} />
        </TouchableOpacity>
        <Text style={[invitestyle.header, { color: colors.text }]}>
          {strings.invitefriends}
        </Text>
      </View>

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
