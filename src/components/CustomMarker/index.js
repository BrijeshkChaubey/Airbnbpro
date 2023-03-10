import React from "react";
import { View, Text } from "react-native";
import { Marker } from "react-native-maps";

const CustomMarker = (props) => {
  const { coordinate, price, isSelected, onPress } = props;
  return (
    <Marker
      coordinate={coordinate} onPress={onPress}>
      <View style={{
        backgroundColor: isSelected ? 'black' : 'white', padding: 3,
        borderRadius: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
      }}>
        <Text style={{ color: isSelected ? 'white' : 'black', fontWeight: 'bold' }}>{price}</Text>
      </View>
    </Marker>
  );
};

export default CustomMarker;
