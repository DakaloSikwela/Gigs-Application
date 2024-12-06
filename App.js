import React, { useState, useEffect, useCallback } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
//import { navigationRef } from './RootNavigation'; // Navigation reference
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ClerkProvider } from '@clerk/clerk-expo';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { navigationRef } from './utils/RootNavigation'; 


// Importing screens
import SignIn from './app/(auth)/SignIn';
import SignUp from './app/(auth)/SignUp';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/components/MapScreen';
import Profile from './screens/components/Profile';
import PersonalInfoScreen from './screens/components/PersonalInfoScreen';
import LogInAndSecurity from './screens/components/LogInAndSecurityScreen';
import HomeLocationScreen from './screens/components/HomeLocationScreen';
import WorkLocationScreen from './screens/components/WorkLocationScreen';
import ConfirmHomeLocationScreen from './screens/components/ConfirmHomeLocationScreen';
import ConfirmWorkLocationScreen from './screens/components/ConfirmWorkLocationScreen';
import LanguageScreen from './screens/components/LanguageScreen';

// Prevent splash screen from hiding automatically
SplashScreen.preventAutoHideAsync();

export default function App() {
  const Stack = createStackNavigator();
  const [fontsLoaded] = useFonts({
    'JakartaSemiBold': require('./assets/fonts/PlusJakartaSans-SemiBold.ttf'),
  });
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const prepareApp = async () => {
      try {
        if (fontsLoaded) {
          setAppIsReady(true);
        }
      } catch (error) {
        console.warn('Error during preparation:', error);
      }
    };

    prepareApp();
  }, [fontsLoaded]);

  useEffect(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <ClerkProvider publishableKey="pk_test_c2V0dGxpbmctaGVybWl0LTc5LmNsZXJrLmFjY291bnRzLmRldiQ">
      <Provider store={store}>
        <NavigationContainer ref={navigationRef}>
          <SafeAreaProvider>
            <KeyboardAvoidingView
              onLayout={onLayoutRootView}
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={{ flex: 1 }}
              keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
            >
              <Stack.Navigator>
                <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: true, title: 'Sign In' }} />
                <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: true, title: 'Sign Up' }} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false }} />
                <Stack.Screen name="PersonalInfoScreen" component={PersonalInfoScreen} options={{ headerShown: true, title: 'Personal Info' }} />
                <Stack.Screen name="LogInAndSecurityScreen" component={LogInAndSecurity} options={{ headerShown: true, title: 'Login & Security' }} />
                <Stack.Screen name="HomeLocationScreen" component={HomeLocationScreen} options={{ headerShown: true, title: 'Enter Home Location' }} />
                <Stack.Screen name="WorkLocationScreen" component={WorkLocationScreen} options={{ headerShown: true, title: 'Enter Work Location' }} />
                <Stack.Screen name="ConfirmHomeLocationScreen" component={ConfirmHomeLocationScreen} options={{ headerShown: true, title: 'Confirm Location' }} />
                <Stack.Screen name="ConfirmWorkLocationScreen" component={ConfirmWorkLocationScreen} options={{ headerShown: true, title: 'Confirm Location' }} />
                <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name="LanguageScreen" component={LanguageScreen} options={{ headerShown: true, title: 'Language' }} />
              </Stack.Navigator>
            </KeyboardAvoidingView>
          </SafeAreaProvider>
        </NavigationContainer>
      </Provider>
    </ClerkProvider>
  );
}
