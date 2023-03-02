import React from 'react';
import { Dimensions, SafeAreaView } from 'react-native';
import TabTest from '../components/tabs-profile/TabsProfile';
const { width, height } = Dimensions.get('window');

const CARD_WIDTH = width * 0.80;

function ProfileScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TabTest />
    </SafeAreaView>
  );
}

export default ProfileScreen;