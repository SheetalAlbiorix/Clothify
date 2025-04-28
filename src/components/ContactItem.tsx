import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { helpcenterstyle } from "../styles/HelpCenterStyle";
import { images } from "../utils/images";

interface ContactItemProps {
  id: string;
  title: string;
  icon: any;
  phone?: string;
  expanded: boolean;
  onToggle: (id: string) => void;
}

export const ContactItem: React.FC<ContactItemProps> = ({
  id,
  title,
  icon,
  phone,
  expanded,
  onToggle,
}) => (
  <TouchableOpacity
    style={helpcenterstyle.contactItem}
    onPress={() => onToggle(id)}
  >
    <View style={helpcenterstyle.contactHeader}>
      <Image source={icon} style={helpcenterstyle.contactIcon} />
      <Text style={helpcenterstyle.contactTitle}>{title}</Text>
      <Image
        source={expanded ? images.arrowUp : images.downarrow}
        style={helpcenterstyle.arrowIcon}
      />
    </View>
    {expanded && phone && (
      <View style={helpcenterstyle.contactDetail}>
        <View style={helpcenterstyle.contactPhoneContainer}>
          <View style={helpcenterstyle.contactBullet} />
          <Text style={helpcenterstyle.contactPhone}>{phone}</Text>
        </View>
      </View>
    )}
  </TouchableOpacity>
);
