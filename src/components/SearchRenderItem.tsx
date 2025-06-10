import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { searchscreenstyle } from '../styles/SearchScreenStyle';
import { useColors } from '../hooks/useColors';
import { images } from '../utils/images';
import { RootStackParamList } from '../../App';

type NavigationProp = StackNavigationProp<RootStackParamList, 'productDetail'>;

const SearchRenderItem = ({ item }: any) => {
  const colors = useColors();
  const navigation = useNavigation<NavigationProp>();

  return (
    <TouchableOpacity
      style={searchscreenstyle.mainResultContainer}
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
    >
      <View style={searchscreenstyle.jacketContainer}>
        <View style={searchscreenstyle.jacketImageContainer}>
          <View style={searchscreenstyle.HeartContainer}>
            <TouchableOpacity style={searchscreenstyle.bgheartContainer}>
              <Image
                source={item.image1}
                style={searchscreenstyle.heartImage}
              />
            </TouchableOpacity>
          </View>
          <Image source={item.image} style={searchscreenstyle.MainImageStyle} />
          <View style={searchscreenstyle.jacketTextContainer}>
            <Text
              style={[
                searchscreenstyle.jacketText,
                { color: colors.colors.text },
              ]}
            >
              {item.name}
            </Text>
            <View style={searchscreenstyle.jacketRatingContainer}>
              <Image
                source={images.starIcon}
                style={searchscreenstyle.starIcon}
              />
              <Text
                style={[
                  searchscreenstyle.ratingText,
                  { color: colors.colors.text },
                ]}
              >
                {item.rating}
              </Text>
            </View>
          </View>
        </View>
        <Text
          style={[
            searchscreenstyle.jacketPrice,
            { color: colors.colors.text },
          ]}
        >
          {item.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SearchRenderItem;
