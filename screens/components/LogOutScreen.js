import React from 'react';
import { View, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from "./components/NavOptions"; 

const LogOutScreen = () => {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-xl font-bold`}>Log Out Screen</Text>
    </View>
  );
};

export default LogOutScreen;
