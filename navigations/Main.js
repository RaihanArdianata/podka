import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNav from './BottomNav';
import HeaderSearch from './HeaderSearch';
import StatusScreen from '../screens/root/StatusScreen';
import AudioRoom from '../screens/feature-room/AudioRoom';
import NotificationScreen from '../screens/NotificationScreen';
import CalendarScreen from '../screens/CalendarScreen';
import HotPodScreen from '../screens/HotPodScreen';
import Modal from '../components/actionSheet';
import SearchScreen from '../screens/SearchScreen';
import LiveCamera from '../components/LiveCamera';
import SpeakRequestScreen from '../screens/SpeakRequestScreen';

const Main = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName={"HomeTabs"} screenOptions={{ headerShown: true }} screenListeners={{
        state: (e) => {
          // Do something with the state
          console.log('state changed', e.data);
        },
      }}  >
        <Stack.Screen name="HomeTabs" component={BottomNav} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Status" component={StatusScreen} options={{
          headerShown: false,
          animation: 'fade',
          config: {
            stiffness: 1000,
            damping: 500,
            mass: 3,
            overshootClamping: true,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 0.01,
          },
        }} />
        <Stack.Screen name="AudioRoom" component={AudioRoom} options={{
          title: 'Audio Room',
          headerShown: true,
          animation: 'fade',
          config: {
            stiffness: 1000,
            damping: 500,
            mass: 3,
            overshootClamping: true,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 0.01,
          },
        }} />
        <Stack.Screen name="Notification" component={NotificationScreen} options={{
          title: 'Notification',
          headerShown: true,
          animation: 'fade',
          config: {
            stiffness: 1000,
            damping: 500,
            mass: 3,
            overshootClamping: true,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 0.01,
          },
        }} />
        <Stack.Screen name="Calendar" component={CalendarScreen} options={{
          title: 'Calendar',
          headerShown: true,
          animation: 'fade',
          config: {
            stiffness: 1000,
            damping: 500,
            mass: 3,
            overshootClamping: true,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 0.01,
          },
        }} />
        <Stack.Screen name="HotPod" component={HotPodScreen} options={{
          title: 'Calendar',
          headerShown: true,
          animation: 'fade',
          config: {
            stiffness: 1000,
            damping: 500,
            mass: 3,
            overshootClamping: true,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 0.01,
          },
        }} />
        <Stack.Screen name="SearchProfile" component={SearchScreen} options={{
          headerShown: true,
          animation: 'fade',
          header: HeaderSearch,
          config: {
            stiffness: 1000,
            damping: 500,
            mass: 3,
            overshootClamping: true,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 0.01,
          },
        }} />
        <Stack.Screen name="LiveCamera" component={LiveCamera} options={{
          headerShown: false,
          animation: 'fade',
          config: {
            stiffness: 1000,
            damping: 500,
            mass: 3,
            overshootClamping: true,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 0.01,
          },
        }} />
        <Stack.Screen name="SpeakRequest" component={SpeakRequestScreen} options={{
          // headerShown: false,
          animation: 'fade',
          config: {
            stiffness: 1000,
            damping: 500,
            mass: 3,
            overshootClamping: true,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 0.01,
          },
        }} />
      </Stack.Navigator>
      <Modal />
    </NavigationContainer>
  );
};

export default Main;