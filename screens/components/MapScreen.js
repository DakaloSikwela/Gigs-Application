import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Avatar, Text, Icon } from "react-native-elements";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";
import { useNavigation } from "@react-navigation/native";
import Profile, { profileScreenOptions } from "../components/Profile";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerContent = () => {
  const navigation = useNavigation();

  const options = [
    { id: 1, name: "Payment", icon: "credit-card" },
    { id: 2, name: "Promotions", icon: "tag" },
    { id: 3, name: "My Gigs", icon: "camera" },
    { id: 4, name: "Expense Your Gigs", icon: "money" },
    { id: 5, name: "Support", icon: "life-ring" },
    { id: 6, name: "About", icon: "info-circle" },
  ];

  return (
    <DrawerContentScrollView>
      <View style={tw`flex-1 items-center justify-center pt-8`}>
        <View style={tw`flex-row items-center`}>
          {/* Avatar */}
          <TouchableOpacity
            onPress={() => console.log("Profile picture pressed")}
            style={tw`mb-8 bg-green-200 p-3 rounded-full`}
          >
            <Avatar
              rounded
              size="medium"
              title="Profile"
              onPress={() => navigation.navigate("Profile")}
              activeOpacity={0.7}
              containerStyle={tw`bg-green-200 rounded-full`}
            />
          </TouchableOpacity>
          {/* My Account */}
          <TouchableOpacity
            onPress={() => navigation.navigate("Profile")}
            style={tw`ml-4`}
          >
            <Text style={tw`text-lg text-black`}>My Account</Text>
          </TouchableOpacity>
        </View>
        
        {/* Options */}
        {options.map(option => (
          <TouchableOpacity
            key={option.id}
            onPress={() => console.log(`${option.name} pressed`)}
            style={tw`flex-row items-center w-full p-4 border-b border-gray-200`}
          >
            <Icon
              name={option.icon}
              type="font-awesome"
              size={24}
              containerStyle={tw`mr-4`}
            />
            <Text style={tw`text-lg text-black`}>{option.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </DrawerContentScrollView>
  );
};

const MapScreen = () => {
  return (
    <Drawer.Navigator drawerContent={DrawerContent}>
      <Drawer.Screen name="Main" component={MainScreen} />
    </Drawer.Navigator>
  );
};

const MainScreen = () => {
  return (
    <View style={tw`flex-1 relative`}>
      <View style={tw`h-1/2`}>
        <Map />
      </View>

      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen 
          name="Profile"
          component={Profile}
          options={{...profileScreenOptions, headerShown: false, gestureEnabled: false,}}  
          /> */}
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
