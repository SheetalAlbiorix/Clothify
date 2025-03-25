import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useRef, useState } from "react";
import { verifystyle } from "../styles/VerifyStyle";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../themes/theme";
import { useColors } from "../hooks/useColors";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { strings } from "../utils/strings";
import { images } from "../utils/images";

type VerifyNavigationProp = StackNavigationProp<RootStackParamList, "SignUp">;

const OTP_LENGTH = 4;

const Verify = () => {
  const navigation = useNavigation<VerifyNavigationProp>();
  const { statusBarStyle } = useTheme();
  const colors = useColors();

  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef<Array<TextInput | null>>([]);

  const handleChange = (text: string, index: number) => {
    if (!/^\d?$/.test(text)) return;

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newOtp.join("").length === OTP_LENGTH) {
      handleVerify(newOtp.join(""));
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = (otpValue: string) => {
    navigation.navigate('NewPass')
    console.log("OTP Entered:", otpValue);
  };

  return (
    <View
      style={[
        verifystyle.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <StatusBar style={statusBarStyle} />
        <TouchableOpacity style={[verifystyle.backButton, { backgroundColor: colors.colors.background}]} onPress={() => navigation.navigate("SignUp")}>
          <Image
            style={[verifystyle.leftarrowImage, {tintColor: colors.colors.tintColor}]}
            source={images.leftarrow}
          />
        </TouchableOpacity>
      <View style={verifystyle.verifyTextContainer}>
        <Text style={[verifystyle.heading, { color: colors.colors.text }]}>
          {strings.verify}
        </Text>
        <Text
          style={[
            verifystyle.VerifytextSecondary,
            { color: colors.colors.textAccent },
          ]}
        >
          {strings.enterthecode}
        </Text>
        <Text style={verifystyle.emailtextdemo}>{strings.emailTextdemo}</Text>
      </View>

      <View style={verifystyle.OtpInputContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputRefs.current[index] = ref)}
            style={[
              verifystyle.OtpInputvalue,
              {
                borderColor: colors.colors.borderColor,
                backgroundColor: colors.colors.background,
                color: colors.colors.text,
              },
            ]}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            keyboardType="numeric"
            maxLength={1}
            onKeyPress={(e) => handleKeyPress(e, index)}
          />
        ))}
      </View>

      <View style={verifystyle.Otpreceivecontainer}>
        <Text style={verifystyle.didntreceiveotp}>
          {strings.didntreceiveotp}
        </Text>
        <TouchableOpacity>
          <Text style={verifystyle.resendcode}>{strings.resendCode}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[
          verifystyle.verifybutton,
          { opacity: otp.join("").length === OTP_LENGTH ? 1 : 0.5 },
        ]}
        onPress={() => handleVerify(otp.join(""))}
        disabled={otp.join("").length < OTP_LENGTH}
      >
        <Text style={verifystyle.verifyText}>{strings.verify}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Verify;
