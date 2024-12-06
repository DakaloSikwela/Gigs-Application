// screens/components/OAuth.js

import { useOAuth } from "@clerk/clerk-expo";
import { router } from "expo-router";
import { Alert, Image, Text, View } from "react-native";

import CustomButton from "../components/CustomButton.js";  
import { icons } from '../../assets/icons/index.js';  // Ensure correct path to icons
import { googleOAuth } from "../../auth.js";  

const OAuth = () => {
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const handleGoogleSignIn = async () => {
    try {
      const result = await googleOAuth(startOAuthFlow);  // Initiate OAuth flow
      
      if (result.code === "session_exists") {
        Alert.alert("Success", "Session exists. Redirecting to home screen.");
        router.replace("/(root)/(tabs)/home");  // Redirect to home if session exists
      } else {
        Alert.alert(result.success ? "Success" : "Error", result.message);  // Show result message
      }
    } catch (error) {
      Alert.alert("Error", error.message);  // Handle any errors during the OAuth flow
    }
  };

  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 16 }}>
        <View style={{ flex: 1, height: 1, backgroundColor: "#d3d3d3" }} />
        <Text style={{ fontSize: 18 }}>Or</Text>
        <View style={{ flex: 1, height: 1, backgroundColor: "#d3d3d3" }} />
      </View>

      <CustomButton
        title="Log In with Google"
        style={{ marginTop: 20, width: "100%", elevation: 0 }}
        IconLeft={() => (
          <Image
            source={icons.google}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginHorizontal: 8 }}
          />
        )}
        bgVariant="outline"
        textVariant="primary"
        onPress={handleGoogleSignIn}
      />
    </View>
  );
};

export default OAuth;
