import { Image, Text, TouchableOpacity, View } from "react-native";
import { useColors } from "../hooks/useColors";
import { profilestyle } from "../styles/ProfileStyle";
import { images } from "../utils/images";

export const ProfileOption = ({
  icon,
  text,
  onPress,
  colors,
}: {
  icon: any;
  text: string;
  onPress: () => void;
  colors: ReturnType<typeof useColors>;
}) => (
  <TouchableOpacity style={profilestyle.profileholder} onPress={onPress}>
    <View style={profilestyle.profilefirstView}>
      <Image
        source={icon}
        style={[
          profilestyle.profileIconImage,
          { tintColor: colors.colors.iconColor },
        ]}
      />
      <Text style={[profilestyle.profileText, { color: colors.colors.text }]}>
        {text}
      </Text>
    </View>
    <Image
      source={images.arrowright}
      style={[
        profilestyle.profileIconImage,
        { tintColor: colors.colors.iconColor },
      ]}
    />
  </TouchableOpacity>
);
