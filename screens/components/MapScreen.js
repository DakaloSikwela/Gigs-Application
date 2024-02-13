 import { StyleSheet, Text, View } from 'react-native'
 import React from 'react';
 import tw from "tailwind-react-native-classnames";
 import Map from '../components/Map';
 import NavigateCard from '../components/Map';
 import RideOptionsCard from '../components/Map';
 import MapView from 'react-native-maps';
import { createStackNavigator } from '@react-navigation/stack';
 
 const MapScreen = () => {
  const Stack = createStackNavigator();
   return (
     <View>
      

       <View style={tw`h-1/2`}>
        <Map />
       </View >

       <View  style={tw`h-1/2`}>
       <Stack.Navigator>
        <Stack.Screen
           name={"NavigateCard"}
           component={NavigateCard}
           options={{headerShown: false,
          }}
        
        />
        <Stack.Screen
           name={"RideOptionsCard"}        ////  where to put about camera option
           component={RideOptionsCard}
           options={{headerShown: false,
          }}
        
        />
       </Stack.Navigator>
       </View >
     </View>
   )
 }
 
 export default MapScreen
 
 const styles = StyleSheet.create({})