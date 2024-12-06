import React from 'react';
import { View, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const DeleteAccountScreen = () => {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-xl font-bold`}>Delete Account Screen</Text>
    </View>
  );
};

export default DeleteAccountScreen;
