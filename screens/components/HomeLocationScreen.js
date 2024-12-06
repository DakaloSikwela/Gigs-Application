
import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';

const HomeLocationScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={tw`flex-1 p-4`}>
      <GooglePlacesAutocomplete
        placeholder="Search for home location"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          const location = details.geometry.location;
          navigation.navigate('ConfirmHomeLocationScreen', {
            location: location,
            description: data.description,
          });
        }}
        fetchDetails={true}
        query={{
          key: 'AIzaSyCZwE7MvAXfeGMauJKadh-7IVo2-AuJD7g', // replace with your Google Maps API key
          language: 'en',
        }}
        styles={{
          textInputContainer: tw`border-b border-gray-300`,
          textInput: tw`h-10 bg-white text-lg`,
        }}
      />
    </View>
  );
};

export default HomeLocationScreen;
