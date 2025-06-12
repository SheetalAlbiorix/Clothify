import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { compProfileStyle } from "../styles/CompProfileStyle";
import { images } from "../utils/images";
import { useTheme } from "../themes/theme";
import { useColors } from "../hooks/useColors";
import { strings } from "../utils/strings";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import Data from "../utils/Data.json";
import CompleteProfileRenderItem from "../components/CompleteprofileRenderItem";
import NoDataFound from "../service/NoDataFound";
import NetInfo from "@react-native-community/netinfo";

const genderOptions = Data.genderOption.map(
  (key) => strings[key as keyof typeof strings] || key
);
type completeprofileNavigationProp = StackNavigationProp<
  RootStackParamList,
  "CompleteProfile"
>;

const CompleteProfile = () => {
  const navigation = useNavigation<completeprofileNavigationProp>();
  const { statusBarStyle } = useTheme();
  const colors = useColors();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [errors, setErrors] = useState({ name: "", phone: "", gender: "" });
  const [isValid, setIsValid] = useState(false);
  const [isGenderDropdownVisible, setGenderDropdownVisible] = useState(false);
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(!!state.isConnected);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const validateFields = () => {
      let valid = true;
      let newErrors = { name: "", phone: "", gender: "" };

      if (!name.trim()) {
        newErrors.name = strings.namerequired;
        valid = false;
      }

      if (!/^\d{10}$/.test(phone)) {
        newErrors.phone = strings.enteravalidnumber;
        valid = false;
      }

      if (!gender) {
        newErrors.gender = strings.pleaseselectgender;
        valid = false;
      }

      setErrors(newErrors);
      setIsValid(valid);
    };
    validateFields();
  }, [name, phone, gender]);

  const handleCompleteProfile = () => {
    if (isValid) {
      navigation.navigate("AllowLocation");
      console.log(strings.profilecompleted);
    }
  };

  if (!isConnected) {
    return (
      <View
        style={[
          compProfileStyle.container,
          { backgroundColor: colors.colors.background },
        ]}
      >
        <StatusBar style={statusBarStyle} />

        <TouchableOpacity
          style={compProfileStyle.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={[
              compProfileStyle.arrowIcon,
              { tintColor: colors.colors.text },
            ]}
            source={images.leftarrow}
          />
        </TouchableOpacity>
        <NoDataFound message={strings.noCompletedProfileFound} />
      </View>
    );
  }

  return (
    <View
      style={[
        compProfileStyle.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <StatusBar style={statusBarStyle} />

      <TouchableOpacity
        style={compProfileStyle.backButton}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={[
            compProfileStyle.arrowIcon,
            { tintColor: colors.colors.text },
          ]}
          source={images.leftarrow}
        />
      </TouchableOpacity>

      <Text style={[compProfileStyle.heading, { color: colors.colors.text }]}>
        {strings.completeyourprofile}
      </Text>
      <Text
        style={[compProfileStyle.subText, { color: colors.colors.textAccent }]}
      >
        {strings.dataprofileInfo}
      </Text>

      <TouchableOpacity style={compProfileStyle.profileImageContainer}>
        <Image style={compProfileStyle.profileImage} source={images.profile} />
        <Image style={compProfileStyle.editIcon} source={images.editIcon} />
      </TouchableOpacity>

      <View
        style={[
          compProfileStyle.inputContainer,
          { backgroundColor: colors.colors.background },
        ]}
      >
        <Text style={[compProfileStyle.label, { color: colors.colors.text }]}>
          {strings.name}
        </Text>
        <TextInput
          style={compProfileStyle.input}
          placeholder={strings.johndoe}
          value={name}
          onChangeText={setName}
        />
        {errors.name ? (
          <Text style={compProfileStyle.errorText}>{errors.name}</Text>
        ) : null}

        <Text style={[compProfileStyle.label, { color: colors.colors.text }]}>
          {strings.phonenumber}
        </Text>
        <View style={compProfileStyle.phoneContainer}>
          <TextInput
            style={compProfileStyle.countryCode}
            keyboardType="phone-pad"
            placeholder="+1"
          />
          <Image
            style={compProfileStyle.dropdownIcon1}
            source={images.downarrow}
          />
          <TextInput
            style={compProfileStyle.phoneInput}
            placeholder={strings.enterphonenumber}
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
        </View>
        {errors.phone ? (
          <Text style={compProfileStyle.errorText}>{errors.phone}</Text>
        ) : null}

        <Text style={[compProfileStyle.label, { color: colors.colors.text }]}>
          {strings.gender}
        </Text>
        <TouchableOpacity
          style={compProfileStyle.dropdown}
          onPress={() => setGenderDropdownVisible(true)}
        >
          <Text style={compProfileStyle.dropdownText}>
            {gender || strings.select}
          </Text>
          <Image
            style={compProfileStyle.dropdownIcon2}
            source={images.downarrow}
          />
        </TouchableOpacity>
        {errors.gender ? (
          <Text style={compProfileStyle.errorText}>{errors.gender}</Text>
        ) : null}

        <Modal
          visible={isGenderDropdownVisible}
          transparent
          animationType="fade"
        >
          <TouchableOpacity
            style={compProfileStyle.modalOverlay}
            onPress={() => setGenderDropdownVisible(false)}
          >
            <View style={compProfileStyle.modalContainer}>
              <FlatList
                data={genderOptions}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <CompleteProfileRenderItem
                    item={item}
                    onSelect={(value) => {
                      setGender(value);
                      setGenderDropdownVisible(false);
                    }}
                  />
                )}
              />
            </View>
          </TouchableOpacity>
        </Modal>
      </View>

      <TouchableOpacity
        style={[
          compProfileStyle.completeProfileButton,
          { opacity: isValid ? 1 : 0.5 },
        ]}
        onPress={handleCompleteProfile}
        disabled={!isValid}
      >
        <Text style={compProfileStyle.buttonText}>
          {strings.completeprofile}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CompleteProfile;
