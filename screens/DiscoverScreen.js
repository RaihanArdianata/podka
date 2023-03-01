import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import TabsAditionals from '../components/tabs-discover/TabsDiscover';

const DiscoverScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F9F9F9', }}>
      <TabsAditionals />
    </SafeAreaView>
  );
};

export default DiscoverScreen;