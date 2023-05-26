import { View, StyleSheet } from 'react-native';
import React from 'react';
import { Button, Icon } from '@ui-kitten/components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabUiKitten from './BottomTabUiKitten';
import HeaderNavigations from './HeaderNavigation';
import StoreScreen from '../screens/StoreScreen';
import HeaderStore from './HeaderStore';
import ProfileScreen from '../screens/ProfileScreen';
import HeaderProfile from './HeaderProfile';
import HotPodScreen from '../screens/HotPodScreen';
import LiveScreen from '../screens/LiveScreen';
import MessageScreen from '../screens/MessageScreen';
import Logo from '../assets/logo.svg';

const Tab = createBottomTabNavigator();


const PlusBoxIcon = (props) => {
  return (
    <Icon
      {...props}
      style={[styles.iconTiny,]}
      name='plus-box-outline'
    />
  );
};

const BottomNav = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        initialRouteName="Home"
        tabBar={props => <BottomTabUiKitten {...props} />}
        safeAreaInsets={{
          bottom: 10
        }}
        sceneContainerStyle={{
        }}
      >
        <Tab.Screen
          name="Home"
          component={HotPodScreen}
          options={{
            header: HeaderNavigations,
            headerShown: false
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
          name="Discover"
          component={LiveScreen}
          options={{
            // header: HeaderLive,
            title: '',
            headerLeft: () => <View style={{ marginLeft: 20 }}><Logo /></View>,
            lazy: true,
            headerRight: () => {
              return (
                <Button
                  style={[{ borderRadius: 20, marginLeft: 20 }]}
                  appearance='ghost'
                  accessoryLeft={PlusBoxIcon}
                  size="medium"
                  onPress={() => navigation.navigate('LiveCamera')}
                />
              );
            }
          }}
        />
        <Tab.Screen
          name="Inbox"
          component={MessageScreen}
          options={{
            headerTitle: 'Message'
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
  iconTiny: {
    width: 25,
    height: 25,
    color: 'black'
  },
});

export default BottomNav;