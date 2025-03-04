import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { AppState, LogBox, StatusBar } from 'react-native';

LogBox.ignoreAllLogs();

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Rubik_Light: require("../assets/fonts/rubik/Rubik-Light.ttf"),
    Rubik_Regular: require("../assets/fonts/rubik/Rubik-Regular.ttf"),
    Rubik_Medium: require("../assets/fonts/rubik/Rubik-Medium.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
    const subscription = AppState.addEventListener("change", (_) => {
      StatusBar.setBarStyle("light-content");
    });
    return () => {
      subscription.remove();
    };
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false, animation: 'ios_from_right' }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="auth/signinScreen" />
      <Stack.Screen name="auth/verificationScreen" />
      <Stack.Screen name="bottomTabBar/bottomTabBarScreen" options={{ gestureEnabled: false }} />
      <Stack.Screen name="selectContact/selectContactScreen" />
      <Stack.Screen name="newGroup/newGroupScreen" />
      <Stack.Screen name="groupInfo/groupInfoScreen" />
      <Stack.Screen name="messages/messagesScreen" />
      <Stack.Screen name="calling/callingScreen" />
      <Stack.Screen name="videoCalling/videoCallingScreen" />
      <Stack.Screen name="groupMessages/groupMessagesScreen" />
      <Stack.Screen name="profile/profileScreen" />
      <Stack.Screen name="account/accountScreen" />
      <Stack.Screen name="deleteAccount/deleteAccountScreen" />
      <Stack.Screen name="privacy/privacyScreen" />
      <Stack.Screen name="chatDetail/chatDetailScreen" />
      <Stack.Screen name="mediaFullView/mediaFullViewScreen" options={{ animation: 'slide_from_bottom' }} />
      <Stack.Screen name="groupDetail/groupDetailScreen" />
      <Stack.Screen name="displayImageFullView/displayImageFullViewScreen" options={{ animation: 'slide_from_bottom' }} />
      <Stack.Screen name="attachmentFullView/attachmentFullViewScreen" options={{ animation: 'slide_from_bottom' }} />
      <Stack.Screen name="privacyPolicy/privacyPolicyScreen" />
      <Stack.Screen name="termsOfUse/termsOfUseScreen" />
    </Stack>
  );
}
