import React from 'react';
import { View, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const SupportScreen = () => {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-xl font-bold`}>Support Screen</Text>
    </View>
  );
};

export default SupportScreen;
