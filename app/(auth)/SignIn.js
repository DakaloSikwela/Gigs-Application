import { useSignIn } from "@clerk/clerk-expo";
import { Link, router } from "expo-router";
import { useCallback, useState } from "react";
import { Alert, Image, ScrollView, Text, TextInput, View } from "react-native";

import CustomButton from "./../../screens/components/CustomButton.js";
import OAuth from "./../../screens/components/OAuth.js";

import { icons } from '../../assets/icons/index.js';
import { images } from '../../assets/images/index.js';

const SignIn = () => {
  const { signIn, setActive, isLoaded } = useSignIn();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSignInPress = useCallback(async () => {
    if (!isLoaded) return;

    try {
      const signInAttempt = await signIn.create({
        identifier: form.email,
        password: form.password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/(root)/(tabs)/home");
      } else {
        console.log(JSON.stringify(signInAttempt, null, 2));
        Alert.alert("Error", "Log in failed. Please try again.");
      }
    } catch (err) {
      console.log(JSON.stringify(err, null, 2));
      Alert.alert("Error", err.errors[0].longMessage);
    }
  }, [isLoaded, form]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ position: "relative", width: "100%", height: 250 }}>
          <Image source={images["signup-car"]} style={{ width: "100%", height: 250, zIndex: 0 }} />
          <Text
            style={{
              fontSize: 24,
              color: "black",
              fontFamily: "JakartaSemiBold",
              position: "absolute",
              bottom: 5,
              left: 5,
            }}
          >
            Welcome 👋
          </Text>
        </View>

        <View style={{ padding: 20 }}>
          <View style={{ position: "relative", marginBottom: 20 }}>
            <TextInput
              style={{
                height: 50,
                borderColor: "#ddd",
                borderWidth: 1,
                borderRadius: 10,
                paddingLeft: 40,
                paddingRight: 10,
                fontSize: 16,
                backgroundColor: "#f8f8f8",
              }}
              placeholder="Enter email"
              value={form.email}
              onChangeText={(value) => setForm({ ...form, email: value })}
              textContentType="emailAddress"
            />
            <View
              style={{
                position: "absolute",
                top: 15,
                left: 10,
                zIndex: 1,
                width: 20,
                height: 20,
              }}
            >
              <Image source={icons.email} style={{ width: 20, height: 20 }} />
            </View>
          </View>

          <View style={{ position: "relative", marginBottom: 20 }}>
            <TextInput
              style={{
                height: 50,
                borderColor: "#ddd",
                borderWidth: 1,
                borderRadius: 10,
                paddingLeft: 40,
                paddingRight: 10,
                fontSize: 16,
                backgroundColor: "#f8f8f8",
              }}
              placeholder="Enter password"
              value={form.password}
              onChangeText={(value) => setForm({ ...form, password: value })}
              secureTextEntry={true}
              textContentType="password"
            />
            <View
              style={{
                position: "absolute",
                top: 15,
                left: 10,
                zIndex: 1,
                width: 20,
                height: 20,
              }}
            >
              <Image source={icons.lock} style={{ width: 20, height: 20 }} />
            </View>
          </View>

          <CustomButton title="Sign In" onPress={onSignInPress} style={{ marginTop: 24 }} />

          <OAuth />

          <Link href="/SignUp" style={{ fontSize: 18, textAlign: "center", color: "#757575", marginTop: 40 }}>
            Don't have an account? <Text style={{ color: "#4CAF50" }}>Sign Up</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
