import { View, Text } from 'react-native';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTab from './BottomTab';
import SearchScreen from '../screens/SearchScreen';
import BottomTabUiKitten from './BottomTabUiKitten';
import HeaderNavigations from './HeaderNavigation';
import HeaderSearch from './HeaderSearch';
import StoreScreen from '../screens/StoreScreen';
import HeaderStore from './HeaderStore';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={props => <BottomTabUiKitten {...props} />}
      // screenOptions={{headerShown: false}}
      safeAreaInsets={{
        bottom: 10
      }}
      sceneContainerStyle={{
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: HeaderNavigations
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          header: HeaderSearch
        }}
      />
      <Tab.Screen
        name="Store"
        component={StoreScreen}
        options={{
          header: HeaderStore
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;