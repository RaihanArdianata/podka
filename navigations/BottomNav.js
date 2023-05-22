import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from '../screens/SearchScreen';
import BottomTabUiKitten from './BottomTabUiKitten';
import HeaderNavigations from './HeaderNavigation';
import HeaderSearch from './HeaderSearch';
import StoreScreen from '../screens/StoreScreen';
import HeaderStore from './HeaderStore';
import ProfileScreen from '../screens/ProfileScreen';
import Constants from 'expo-constants';
import DiscoverScreen from '../screens/DiscoverScreen';
import HeaderDiscover from './HeaderDiscover';
import HeaderProfile from './HeaderProfile';

const Tab = createBottomTabNavigator();


const Header = () => (
  <View style={styles.container}>
  </View>
);

const BottomNav = () => {
  return (
    <View style={{ flex: 1 }}>
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
          name="Discover"
          component={DiscoverScreen}
          options={{
            // header: () => <View style={{ height: Constants.statusBarHeight, backgroundColor: '#F9F9F9' }}></View>,
            header: HeaderDiscover,
            // headerShown: false
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
            header: HeaderProfile,
            tabBarLabel: ''
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
});

export default BottomNav;