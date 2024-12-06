import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";

import tw from "tailwind-react-native-classnames";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../../slices/navSlice";

const data = [
  {
    id: "Gigs-X-123",
    title: "Wedding",
    multiplier: 1,
    Image: "https://links.papareact.com/3pn",
  },

  {
    id: "Gigs-X-456 ",
    title: "Birthday Party",
    multiplier: 1.2,
    Image: "https://links.papareact.com/5w8",
  },

  {
    id: "Gigs-LUX-789",
    title: "Graduations",
    multiplier: 1.75,
    Image: "https://links.papareact.com/3pf",
  },
  {
    id: "Gigs-X-123",
    title: "Wedding",
    multiplier: 1,
    Image: "https://links.papareact.com/3pn",
  },

  {
    id: "Gigs-X-456 ",
    title: "Birthday Party",
    multiplier: 1.2,
    Image: "https://links.papareact.com/5w8",
  },

  {
    id: "Gigs-LUX-789",
    title: "Graduations",
    multiplier: 1.75,
    Image: "https://links.papareact.com/3pf",
  },
  {
    id: "Gigs-X-123",
    title: "Wedding",
    multiplier: 1,
    Image: "https://links.papareact.com/3pn",
  },

  {
    id: "Gigs-X-456 ",
    title: "Birthday Party",
    multiplier: 1.2,
    Image: "https://links.papareact.com/5w8",
  },

  {
    id: "Gigs-LUX-789",
    title: "Graduations",
    multiplier: 1.75,
    Image: "https://links.papareact.com/3pf",
  },
];

//if we have SURGE PRICING, THIS GOES UP 
const SURGE_CHARGE_RATE = 1.5; 

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-x`}>
          Select a gig - {travelTimeInformation?.duration.text}
        </Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row justify-between items-center px-3 ${
              id === selected?.id && "bg-gray-200"
            }`}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
              }}
              source={{ uri: "https://links.papareact.com/3pn" }}  //////////require("../../assets/gigsbg.png") ///////// uri: "https://links.papareact.com/3pn"
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>{travelTimeInformation?.duration.text}Travel time</Text>
            </View>

            <Text style={tw`text-xl`}>

            {new Intl.NumberFormat('en-gb', {
              style: 'currency',
              currency: 'GBP'
            } ).format(

              (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE
                 * multiplier ) / 100
            )}


            </Text>
          </TouchableOpacity>
        )}
      />
      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity
          disabled={!selected}
          style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`} ////////////////////////////////////////need to be fixed.
        >
          <Text style={tw`text-center text-white text-xl`}>
            choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
