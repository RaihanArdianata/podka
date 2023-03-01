import { View, Text } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

const Test = () => (
  <View style={{ flex: 1, backgroundColor: 'blue' }}>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
    <Text>Posts</Text>
  </View>
);

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{
      swipeEnabled: true,
      animationEnabled: true,
      tabBarOptions: {
        scrollEnabled: true,
      },
    }}>
      <Tab.Screen name="Posts" component={Test} />
      <Tab.Screen name="Tagged" component={Test} />
    </Tab.Navigator>
  );
};

export default TabNavigation;