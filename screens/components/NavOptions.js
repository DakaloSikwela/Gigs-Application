import { FlatList, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import MapScreen from "../components/MapScreen";
import HomeScreen from "../HomeScreen";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectOrigin} from "../../slices/navSlice";


const data = [
  {
    id: "123",
    title: "Get a Photographer",
    image: require("../../assets/gigsbg.png"),
    screen: "HomeScreen",
  },
  {
    id: "456",
    title: "Appoint a Gig",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const origin = useSelector(selectOrigin);

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 `}
          disabled={!origin}
        >
          <View style={tw`${!origin && "opacity-20" }`}>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={
                typeof item.image === "string"
                  ? { uri: item.image } // Remote image
                  : item.image // Local image
              }
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

//const styles = StyleSheet.create({})
