// import { useSignUp } from "@clerk/clerk-expo";
// import { Link, router } from "expo-router";
// import { useState } from "react";
// import { Alert, Image, ScrollView, Text, TextInput, View } from "react-native";
// import ReactNativeModal from "react-native-modal";

// import CustomButton from "../components/CustomButton";
// import OAuth from "../components/OAuth";
// import { icons } from '../../assets/icons/index.js';
// import { images } from '../../assets/images/index.js';

// const SignUp = () => {
//   const { isLoaded, signUp, setActive } = useSignUp();
//   const [showSuccessModal, setShowSuccessModal] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [verification, setVerification] = useState({
//     state: "default",
//     error: "",
//     code: "",
//   });

//   const onSignUpPress = async () => {
//     if (!isLoaded) return;
//     try {
//       await signUp.create({
//         emailAddress: form.email,
//         password: form.password,
//       });
//       await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
//       setVerification({
//         ...verification,
//         state: "pending",
//       });
//     } catch (err) {
//       console.log(JSON.stringify(err, null, 2));
//       Alert.alert("Error", err.errors[0].longMessage);
//     }
//   };

//   const onPressVerify = async () => {
//     if (!isLoaded) return;
//     try {
//       const completeSignUp = await signUp.attemptEmailAddressVerification({
//         code: verification.code,
//       });
//       if (completeSignUp.status === "complete") {
//         await fetchAPI("/(api)/user", {
//           method: "POST",
//           body: JSON.stringify({
//             name: form.name,
//             email: form.email,
//             clerkId: completeSignUp.createdUserId,
//           }),
//         });
//         await setActive({ session: completeSignUp.createdSessionId });
//         setVerification({
//           ...verification,
//           state: "success",
//         });
//       } else {
//         setVerification({
//           ...verification,
//           error: "Verification failed. Please try again.",
//           state: "failed",
//         });
//       }
//     } catch (err) {
//       setVerification({
//         ...verification,
//         error: err.errors[0].longMessage,
//         state: "failed",
//       });
//     }
//   };

//   return (
//     <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
//       <View style={{ flex: 1, backgroundColor: "white" }}>
//         {/* Background Image Section */}
//         <View style={{ position: "relative", width: "100%", height: 250 }}>
//           <Image source={images["signup-car"]} style={{ width: "100%", height: 250, zIndex: 0 }} />
//           <Text
//             style={{
//               fontSize: 24,
//               color: "black",
//               fontFamily: "JakartaSemiBold",
//               position: "absolute",
//               bottom: 5,
//               left: 5,
//             }}
//           >
//             Create Your Account
//           </Text>
//         </View>

//         {/* Form Section */}
//         <View style={{ padding: 20 }}>
//           {/* Name Input */}
//           <Text style={{ fontSize: 14, color: "#757575", marginBottom: 5 }}>Name</Text>
//           <TextInput
//             style={{
//               borderWidth: 1,
//               borderColor: "#E0E0E0",
//               borderRadius: 5,
//               padding: 10,
//               marginBottom: 20,
//               fontSize: 16,
//               color: "#000",
//             }}
//             placeholder="Enter name"
//             value={form.name}
//             onChangeText={(value) => setForm({ ...form, name: value })}
//           />

//           {/* Email Input */}
//           <Text style={{ fontSize: 14, color: "#757575", marginBottom: 5 }}>Email</Text>
//           <TextInput
//             style={{
//               borderWidth: 1,
//               borderColor: "#E0E0E0",
//               borderRadius: 5,
//               padding: 10,
//               marginBottom: 20,
//               fontSize: 16,
//               color: "#000",
//             }}
//             placeholder="Enter email"
//             textContentType="emailAddress"
//             value={form.email}
//             onChangeText={(value) => setForm({ ...form, email: value })}
//           />

//           {/* Password Input */}
//           <Text style={{ fontSize: 14, color: "#757575", marginBottom: 5 }}>Password</Text>
//           <TextInput
//             style={{
//               borderWidth: 1,
//               borderColor: "#E0E0E0",
//               borderRadius: 5,
//               padding: 10,
//               marginBottom: 20,
//               fontSize: 16,
//               color: "#000",
//             }}
//             placeholder="Enter password"
//             secureTextEntry={true}
//             textContentType="password"
//             value={form.password}
//             onChangeText={(value) => setForm({ ...form, password: value })}
//           />

//           <CustomButton title="Sign Up" onPress={onSignUpPress} style={{ marginTop: 24 }} />
//           <OAuth />

//           <Link href="/sign-in" style={{ fontSize: 18, textAlign: "center", color: "#757575", marginTop: 40 }}>
//             Already have an account? <Text style={{ color: "#4CAF50" }}>Log In</Text>
//           </Link>
//         </View>

//         {/* Verification Modal */}
//         <ReactNativeModal
//           isVisible={verification.state === "pending"}
//           onModalHide={() => {
//             if (verification.state === "success") {
//               setShowSuccessModal(true);
//             }
//           }}
//         >
//           <View style={{ backgroundColor: "white", padding: 28, borderRadius: 20, minHeight: 300 }}>
//             <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 8 }}>Verification</Text>
//             <Text style={{ marginBottom: 20 }}>We've sent a verification code to {form.email}.</Text>
//             <TextInput
//               style={{
//                 borderWidth: 1,
//                 borderColor: "#E0E0E0",
//                 borderRadius: 5,
//                 padding: 10,
//                 fontSize: 16,
//                 color: "#000",
//                 marginBottom: 20,
//               }}
//               placeholder="Enter code"
//               value={verification.code}
//               keyboardType="numeric"
//               onChangeText={(code) => setVerification({ ...verification, code })}
//             />
//             {verification.error && (
//               <Text style={{ color: "red", fontSize: 12, marginTop: 4 }}>
//                 {verification.error}
//               </Text>
//             )}
//             <CustomButton title="Verify Email" onPress={onPressVerify} style={{ marginTop: 20, backgroundColor: "#28a745" }} />
//           </View>
//         </ReactNativeModal>

//         {/* Success Modal */}
//         <ReactNativeModal isVisible={showSuccessModal}>
//           <View style={{ backgroundColor: "white", padding: 28, borderRadius: 20, minHeight: 300 }}>
//             <Image source={images.check} style={{ width: 110, height: 110, alignSelf: "center", marginVertical: 20 }} />
//             <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}>Verified</Text>
//             <Text style={{ fontSize: 16, color: "gray", textAlign: "center", marginTop: 8 }}>
//               You have successfully verified your account.
//             </Text>
//             <CustomButton title="Browse Home" onPress={() => router.push(`/(root)/(tabs)/home`)} style={{ marginTop: 20 }} />
//           </View>
//         </ReactNativeModal>
//       </View>
//     </ScrollView>
//   );
// };

// export default SignUp;
