import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Logo from '../assets/logo.svg';
import Constants from 'expo-constants';
import { Button, Icon } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/core';

const BellIcon = (props) => (
  <Icon
    style={styles.icon}
    fill='#000'
    name='bell-outline'
  />
);
const CalendarIcon = (props) => (
  <Icon
    style={styles.icon}
    fill='#000'
    name='calendar-account-outline'
  />
);

const HeaderNavigations = () => {
  const navigation = useNavigation();
  return (
    <View style={{ ...styles.container, paddingHorizontal: 24, paddingVertical: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
      <Logo />
      <View style={[styles.buttonWrapper]}>
        <Button
          style={{ borderRadius: 20 }}
          appearance='ghost'
          accessoryLeft={BellIcon}
          size="tiny"
          onPress={() => navigation.navigate("Notification")}
        />
        <Button
          style={{ borderRadius: 20 }}
          appearance='ghost'
          accessoryLeft={CalendarIcon}
          size="tiny"
          onPress={() => navigation.navigate("Calendar")}
        />
      </View>
    </View>
  );
};

export default HeaderNavigations;

const styles = StyleSheet.create({
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  container: {
    paddingTop: Constants.statusBarHeight * 1.5,
    paddingVertical: 10,
    backgroundColor: '#F9F9F9'
    // height: 40
  },
  icon: {
    width: 25,
    height: 25,
    backgroundColor: 'transparent'
  },
});