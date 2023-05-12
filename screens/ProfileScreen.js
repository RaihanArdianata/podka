import React from 'react';
import { Dimensions, SafeAreaView, View } from 'react-native';
import TabTest from '../components/tabs-profile/TabsProfile';
const { width, height } = Dimensions.get('window');
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';

const CARD_WIDTH = width * 0.80;

function ProfileScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#F9F9F9' }}>
      <TabTest />
    </View>
  );
}

export default ProfileScreen;