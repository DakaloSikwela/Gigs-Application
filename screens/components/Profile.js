// Profile.js
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = () => {
  const navigation = useNavigation();
  const homeLocation = useSelector((state) => state.location.homeLocation);
  const workLocation = useSelector((state) => state.location.workLocation);

  const options = [
    { id: 1, title: 'Personal info', icon: 'person', screen: 'PersonalInfoScreen' },
    { id: 2, title: 'Login & security', icon: 'lock', screen: 'LogInAndSecurityScreen' },
    { id: 3, title: 'Enter home location', icon: 'home', screen: 'HomeLocationScreen' },
    { id: 4, title: 'Enter work location', icon: 'briefcase', screen:'WorkLocationScreen'},
    { id: 5, title: 'Add a place', icon: 'add-location' },
    { id: 6, title: 'Language', icon: 'language', screen: 'LanguageScreen' },
    { id: 7, title: 'Communication preferences', icon: 'chat' },
    { id: 8, title: 'Log out', icon: 'logout' },
    { id: 9, title: 'Delete account', icon: 'delete' },
    { id: 10, title: 'Support', icon: 'help' },
    { id: 11, title: 'About', icon: 'info' },
  ];

  return (
    <View style={tw`flex-1`}>
      <SafeAreaView>
        <View style={tw`flex-row justify-start p-4`}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              name="arrow-back"
              type="ionicon"
              size={30}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <View style={tw`items-center pt-2`}>
          <Text style={tw`text-xl font-bold`}>Sikwela Dakalo</Text>
        </View>
      </SafeAreaView>
      <ScrollView style={tw`flex-1 px-4 mt-4`}>
        {options.map((option) => (
          <View key={option.id} style={tw`mb-4`}>
            <TouchableOpacity
              style={tw`flex-row items-center py-3`}
              onPress={() => option.screen && navigation.navigate(option.screen)}
            >
              <Icon
                name={option.icon}
                type="material"
                size={24}
                color="black"
                style={tw`mr-3`}
              />
              <Text style={tw`text-lg`}>{option.title}</Text>
            </TouchableOpacity>
            {option.id === 3 && homeLocation && (
              <View style={tw`ml-8 mt-2`}>
                <Text style={tw`text-base`}>{homeLocation.description}</Text>
              </View>
            )}

              {option.id === 4 && workLocation && (
              <View style={tw`ml-8 mt-2`}>
                <Text style={tw`text-base`}>{workLocation.description}</Text>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Profile;
