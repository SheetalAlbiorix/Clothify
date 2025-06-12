import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { whistliststyle } from "../styles/WhistlistStyle";
import { images } from "../utils/images";
import { WhistlistRenderItemProps } from "../types/types";

const WhistlistRenderItem: React.FC<WhistlistRenderItemProps> = ({ item }) => {
  return (
    <TouchableOpacity style={whistliststyle.itemContainer}>
      <Image source={item.image} style={whistliststyle.itemImage} />
      <TouchableOpacity style={whistliststyle.heartButton}>
        <Image source={images.heartIcon} style={whistliststyle.heartIcon} />
      </TouchableOpacity>
      <View style={whistliststyle.ratingnamecontainer}>
        <Text style={whistliststyle.itemTitle}>{item.name}</Text>
        <View style={whistliststyle.ratingContainer}>
          <Image source={images.starIcon} style={whistliststyle.starIcon} />
          <Text style={whistliststyle.ratingText}>{item.rating}</Text>
        </View>
      </View>
      <Text style={whistliststyle.itemPrice}>{item.price}</Text>
    </TouchableOpacity>
  );
};

export default WhistlistRenderItem;
