import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { invitestyle } from "../styles/inviteStyle";
import { strings } from "../utils/strings";
import { inviteProps } from "../types/types";

export const InviteCard = ({ name, number, images, colors }: inviteProps) => (
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
