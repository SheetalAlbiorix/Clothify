import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import { shippingAddressStyle } from '../styles/ShippingAdressStyle'
import { images } from '../utils/images'
import { useColors } from '../hooks/useColors'

const ShippingRenderItem = ({
  item,
  selectedAddress,
  handleSelectAddress,
}: any) => {
  const colors = useColors()

  return (
    <Pressable
      style={shippingAddressStyle.addressItem}
      onPress={() => handleSelectAddress(item)}
    >
      <View style={shippingAddressStyle.addressInfo}>
        <Image
          source={images.locationpin}
          style={shippingAddressStyle.locationpinImage}
        />
        <View>
          <Text
            style={[
              shippingAddressStyle.addressTitle,
              { color: colors.colors.text },
            ]}
          >
            {item.label}
          </Text>
          <Text
            style={[
              shippingAddressStyle.addressDetails,
              { color: colors.colors.textAccent },
            ]}
          >
            {item.address}
          </Text>
        </View>
      </View>

      <View style={shippingAddressStyle.radioButtonContainer}>
        {selectedAddress?.id === item.id && (
          <View style={shippingAddressStyle.selectedRadio} />
        )}
      </View>
    </Pressable>
  )
}

export default ShippingRenderItem