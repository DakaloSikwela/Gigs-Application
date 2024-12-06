// ConfirmWorkLocationScreen.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { useDispatch } from 'react-redux';
import { setWorkLocation } from '../../slices/LocationSlice';

const ConfirmWorkLocationScreen = ({ route, navigation }) => {
  const { location, description } = route.params;
  const dispatch = useDispatch();

  const handleConfirmLocation = () => {
    dispatch(setWorkLocation({ location, description }));
    navigation.navigate('Profile');
  };

  return (
    <View style={tw`flex-1`}>
      <MapView
        style={tw`flex-1`}
        initialRegion={{
          latitude: location.lat,
          longitude: location.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: location.lat, longitude: location.lng }}
          title={description}
        />
      </MapView>
      <View style={tw`p-4`}>
        <Text style={tw`text-lg mb-4`}>{description}</Text>
        <TouchableOpacity
          style={tw`bg-green-500 p-4 rounded`}
          onPress={handleConfirmLocation}
        >
          <Text style={tw`text-white text-center`}>Confirm Location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConfirmWorkLocationScreen;
