import React from 'react';
import { View, Text, Image } from 'react-native';
import { filterstyle } from '../styles/FilterStyle';
import ReusableRadioButton from './ReusableRadioButton';
import { useColors } from '../hooks/useColors';
import { images } from '../utils/images';

type RatingItem = {
  id: string;
  stars: number;
  label: string;
};

type FilterRenderItemProps = {
  item: RatingItem;
  selectedRating: string;
  handleRadioPress: (value: string) => void;
};

const FilterRenderItem: React.FC<FilterRenderItemProps> = ({
  item,
  selectedRating,
  handleRadioPress,
}) => {
  const colors = useColors();

  return (
    <View style={filterstyle.ratingTextContainer}>
      <View style={filterstyle.starIconContainer}>
        {[...Array(item.stars)].map((_, index) => (
          <Image
            key={index}
            source={images.starIcon}
            style={filterstyle.starIconImage}
          />
        ))}
      </View>
      <Text style={[filterstyle.ratingText, { color: colors.colors.text }]}>
        {item.label}
      </Text>
      <ReusableRadioButton
        value={item.id}
        label={item.label}
        selectedValue={selectedRating}
        onPress={handleRadioPress}
      />
    </View>
  );
};

export default FilterRenderItem;
