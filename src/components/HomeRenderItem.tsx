import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { homeStyles } from '../styles/HomeStyle';
import { images } from '../utils/images';
import { useColors } from '../hooks/useColors';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import Data from '../utils/Data.json';
import { strings } from '../utils/strings';

export const flashSaleItems = Data.flashSaleItems.map((item) => ({
  id: item.id,
  name: strings[item.name as keyof typeof strings] || item.name,
  image1: images[item.image1 as keyof typeof images],
  price: strings[item.price as keyof typeof strings] || item.price,
  image: images[item.image as keyof typeof images],
  rating: item.rating,
}));

const HomeRenderItem = ({ item }: { item: (typeof flashSaleItems)[0] }) => {
  const colors = useColors();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Home'>>();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('productDetail', {
          id: item.id,
          name: item.name,
          image1: item.image1,
          price: item.price,
          image: item.image,
          rating: item.rating,
        });
      }}
      style={homeStyles.flashSaleItem}
    >
      <View style={homeStyles.bgheartContainer}>
        <Image source={item.image1} style={homeStyles.heartImage} />
      </View>

      <Image source={item.image} style={homeStyles.flashSaleImage} />

      <View style={homeStyles.namestarconatiner}>
        <Text style={[homeStyles.flashSaleTitle, { color: colors.colors.text }]}>
          {item.name}
        </Text>
        <View style={homeStyles.ratingContainer}>
          <Image source={images.starIcon} style={homeStyles.starIcon} />
          <Text style={[homeStyles.ratingText, { color: colors.colors.text }]}>
            {item.rating}
          </Text>
        </View>
      </View>

      <Text style={[homeStyles.flashSalePrice, { color: colors.colors.text }]}>
        {item.price}
      </Text>
    </TouchableOpacity>
  );
};

export default HomeRenderItem;
