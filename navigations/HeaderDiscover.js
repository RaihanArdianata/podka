import { View, Text, StyleSheet, TouchableWithoutFeedback, Dimensions } from 'react-native';
import React from 'react';
import Constants from 'expo-constants';
import { Button, Icon, Input } from '@ui-kitten/components';

const BellIcon = (props) => (
  <Icon
    style={styles.icon}
    fill='#000'
    name='bell-outline'
  />
);

const LensIcon = (props) => (
  <TouchableWithoutFeedback>
    <Icon
      style={styles.icon}
      fill='#000'
      name='magnify'
    />
  </TouchableWithoutFeedback>
);

const HeaderDiscover = () => {
  return (
    <View style={{ ...styles.container, paddingHorizontal: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F9F9F9' }}>
      <Input
        value={''}
        placeholder='Place your Text'
        accessoryLeft={LensIcon}
        style={{ width: Dimensions.get('window').width - ((30 * 2) + 25), borderRadius: 10, backgroundColor: '#fff' }}
      // onChangeText={nextValue => setValue(nextValue)}
      />
      <Button
        style={{ borderRadius: 20 }}
        appearance='ghost'
        accessoryLeft={BellIcon}
        size="tiny"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingTop: Constants.statusBarHeight * 1.5,
    paddingVertical: 20,
    // height: 40
  },
  icon: {
    width: 25,
    height: 25,
    backgroundColor: 'transparent'
  },
});

export default HeaderDiscover;