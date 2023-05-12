import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Constants from 'expo-constants';
import { Button, Icon } from '@ui-kitten/components';

const CartIcon = (props) => {
  return (
    <Icon
      {...props}
      style={[styles.iconTiny]}
      name='shopping-outline'
    />
  );
};

const DotIcon = (props) => {
  return (
    <Icon
      {...props}
      style={[styles.iconTiny,]}
      name='dots-horizontal'
    />
  );
};

const HeaderProfile = () => {
  return (
    <View style={[styles.container, { paddingHorizontal: 24, paddingVertical: 10, flexDirection: 'row', justifyContent: 'flex-end' }]}>
      <Button
        style={{ borderRadius: 20 }}
        appearance='ghost'
        accessoryLeft={CartIcon}
        size="tiny"
      />
      <Button
        style={[{ borderRadius: 20 }]}
        appearance='ghost'
        accessoryLeft={DotIcon}
        size="tiny"
      />
    </View>
  );
};

export default HeaderProfile;

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight * 1.5,
    paddingVertical: 10,
    backgroundColor: '#ffffff'
    // height: 40
  },
  iconTiny: {
    width: 25,
    height: 25,
    color: 'black'
  },
  rotate: {
    transform: [{
      rotateX: '50deg'
    }]
  }
});