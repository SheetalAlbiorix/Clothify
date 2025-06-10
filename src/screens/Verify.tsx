import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { verifystyle } from "../styles/VerifyStyle";
import { StatusBar } from "expo-status-bar";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "../themes/theme";
import { useColors } from "../hooks/useColors";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { strings } from "../utils/strings";
import { images } from "../utils/images";
import { generateOtp } from "../service/generateOtp";
import {
  createInputRefs,
  handleChange,
  handleKeyPress,
} from "../utils/Validation";

type VerifyNavigationProp = StackNavigationProp<RootStackParamList, "Verify">;

const OTP_LENGTH = 4;

const Verify = () => {
  const navigation = useNavigation<VerifyNavigationProp>();
  const route = useRoute<any>();
  const { statusBarStyle } = useTheme();
  const colors = useColors();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [generatedOtp, setGeneratedOtp] = useState(route.params.otp);
  const [email] = useState(route.params.email);
  const [timer, setTimer] = useState(30);

  const inputRefs = createInputRefs();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleVerify = (otpValue: string) => {
    if (otpValue === generatedOtp) {
      navigation.navigate("CompleteProfile");
      console.log(strings.otpentered, otpValue);
    } else {
      Alert.alert(strings.invalidOtp);
    }
  };

  const handleResendOtp = () => {
    const newOtp = generateOtp();
    setGeneratedOtp(newOtp);
    setTimer(30);
    console.log(strings.newemailsenttoemail, newOtp);
    Alert.alert(strings.otpsent, `${strings.newotphasbeensent} ${email}`);
  };

  return (
    <View
      style={[
        verifystyle.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <StatusBar style={statusBarStyle} />
      <TouchableOpacity
        style={[
          verifystyle.backButton,
          { backgroundColor: colors.colors.background },
        ]}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Image
          style={[
            verifystyle.leftarrowImage,
            { tintColor: colors.colors.tintColor },
          ]}
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
        <Text
          style={[verifystyle.emailtextdemo, { color: colors.colors.text }]}
        >
          {email}
        </Text>
      </View>

      <View style={verifystyle.OtpInputContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => {
              if (inputRefs.current) {
                inputRefs.current[index] = ref;
              }
            }}
            style={[
              verifystyle.OtpInputvalue,
              {
                borderColor: colors.colors.borderColor,
                backgroundColor: colors.colors.background,
                color: colors.colors.text,
              },
            ]}
            value={digit}
            onChangeText={(text) =>
              handleChange({
                text,
                index,
                otp,
                setOtp,
                inputRefs,
                handleVerify,
              })
            }
            keyboardType="numeric"
            maxLength={1}
            onKeyPress={(e) =>
              handleKeyPress({
                e,
                index,
                otp,
                inputRefs,
              })
            }
          />
        ))}
      </View>

      <View style={verifystyle.Otpreceivecontainer}>
        <Text style={verifystyle.didntreceiveotp}>
          {strings.didntreceiveotp}
        </Text>
        <TouchableOpacity disabled={timer > 0} onPress={handleResendOtp}>
          <Text
            style={[verifystyle.resendcode, { opacity: timer > 0 ? 0.5 : 1 }]}
          >
            {timer > 0
              ? `${strings.resendin} ${timer}${strings.s}`
              : strings.resendCode}
          </Text>
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
