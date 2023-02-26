import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Logo from '../assets/logo.svg';
import Constants from 'expo-constants';
import { Button, Icon } from '@ui-kitten/components';

const BellIcon = (props) => (
  <Icon
    style={styles.icon}
    fill='#000'
    name='bell-outline'
  />
);

const HeaderNavigations = () => {
  return (
    <View style={{ ...styles.container, paddingHorizontal: 24, paddingVertical: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
      <Logo />
      <Button
        style={{ borderRadius: 20 }}
        appearance='ghost'
        accessoryLeft={BellIcon}
        size="tiny"
      />
    </View>
  );
};

export default HeaderNavigations;

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    paddingVertical: 10,
    // height: 40
  },
  icon: {
    width: 25,
    height: 25,
    backgroundColor: 'transparent'
  },
});