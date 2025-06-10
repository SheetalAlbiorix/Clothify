import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { strings } from "../utils/strings";
import { images } from "../utils/images";
import { useColors } from "../hooks/useColors";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { filterstyle } from "../styles/FilterStyle";
import BrandFilter from "../components/BrandFilter";
import GenderFilter from "../components/GenderFilter";
import SortByFilter from "../components/SortByFilter";
import PricingRange from "../components/PricingRange";
import ReusableRadioButton from "../components/ReusableRadioButton";
import { useTheme } from "../themes/theme";
import { StatusBar } from "expo-status-bar";
import Data from "../utils/Data.json";
import Header from "../components/HeaderGlobal";
import FilterRenderItem from "../components/FilterRenderItem";

type FilterNavigationProp = StackNavigationProp<RootStackParamList, "Filter">;

const Filter = () => {
  const navigation = useNavigation<FilterNavigationProp>();
  const colors = useColors();
  const { statusBarStyle } = useTheme();
  const [selectedGender, setSelectedGender] = useState(strings.All);
  const [selectedBrand, setSelectedBrand] = useState(strings.All);
  const [selectedSort, setSelectedSort] = useState(strings.mostrecent);
  const [priceRange, setPriceRange] = useState([7, 100]);
  const [selectedRating, setSelectedRating] = useState("");

  const handleReset = () => {
    setSelectedGender(strings.All);
    setSelectedBrand(strings.All);
    setSelectedSort(strings.mostrecent);
    setPriceRange([7, 100]);
    setSelectedRating("");
  };

  const handleApply = () => {
    const filters = {
      gender: selectedGender,
      brand: selectedBrand,
      sort: selectedSort,
      price: priceRange,
      rating: selectedRating,
    };
    console.log(strings.appliedfilter, filters);
    navigation.navigate("Tab", { name: "Home", location: "" });
  };

  const handleRadioPress = (value: string) => {
    setSelectedRating(value);
  };

  const ratingData = Data.ratingStar.map((item) => ({
    ...item,
    label: strings[item.label as keyof typeof strings] || item.label,
  }));

  // const renderRatingItem = ({
  //   item,
  // }: {
  //   item: { id: string; stars: number; label: string };
  // }) => (
  //   <View style={filterstyle.ratingTextContainer}>
  //     <View style={filterstyle.starIconContainer}>
  //       {[...Array(item.stars)].map((_, index) => (
  //         <Image
  //           key={index}
  //           source={images.starIcon}
  //           style={filterstyle.starIconImage}
  //         />
  //       ))}
  //     </View>
  //     <Text style={[filterstyle.ratingText, { color: colors.colors.text }]}>
  //       {item.label}
  //     </Text>
  //     <ReusableRadioButton
  //       value={item.id}
  //       label={item.label}
  //       selectedValue={selectedRating}
  //       onPress={handleRadioPress}
  //     />
  //   </View>
  // );

  return (
    <View
      style={[
        filterstyle.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <StatusBar style={statusBarStyle} />
      <Header type="filter" />
      <ScrollView
        contentContainerStyle={filterstyle.MainViewContainer}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <View style={filterstyle.BrandsContainer}>
          <Text
            style={[filterstyle.BrandsHeader, { color: colors.colors.text }]}
          >
            {strings.Brands}
          </Text>
          <BrandFilter selected={selectedBrand} onSelect={setSelectedBrand} />
        </View>
        <View style={filterstyle.genderContainer}>
          <Text style={[filterstyle.genderText, { color: colors.colors.text }]}>
            {strings.gender}
          </Text>
          <GenderFilter
            selected={selectedGender}
            onSelect={setSelectedGender}
          />
        </View>
        <View style={filterstyle.sortbyContainer}>
          <Text style={[filterstyle.sortbyText, { color: colors.colors.text }]}>
            {strings.sortby}
          </Text>
          <SortByFilter selected={selectedSort} onSelect={setSelectedSort} />
        </View>
        <View style={filterstyle.pricerangeContainer}>
          <Text
            style={[filterstyle.pricerangeText, { color: colors.colors.text }]}
          >
            {strings.pricerange}
          </Text>
          <PricingRange value={priceRange} onChange={setPriceRange} />
        </View>
        <View style={filterstyle.reviewcontainer}>
          <Text style={[filterstyle.reviewText, { color: colors.colors.text }]}>
            {strings.reviews}
          </Text>
          <View style={filterstyle.MainContainer}>
            <FlatList
              data={ratingData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <FilterRenderItem
                  item={item}
                  selectedRating={selectedRating}
                  handleRadioPress={handleRadioPress}
                />
              )}
              scrollEnabled={false}
            />
          </View>
        </View>
      </ScrollView>
      <View
        style={[
          filterstyle.footer,
          {
            backgroundColor: colors.colors.background,
            borderTopColor: colors.colors.borderColor,
          },
        ]}
      >
        <TouchableOpacity style={filterstyle.resetButton} onPress={handleReset}>
          <Text style={filterstyle.resetText}>{strings.resetfilter}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={filterstyle.applyButton} onPress={handleApply}>
          <Text style={filterstyle.applyText}>{strings.apply}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Filter;
