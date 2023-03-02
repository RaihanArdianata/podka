import { View, Text, StyleSheet, TouchableWithoutFeedback, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { Button, Icon, Input } from '@ui-kitten/components';
import Constants from 'expo-constants';

const ArrowIcon = (props) => (
  <Icon
    style={styles.icon}
    fill='#000'
    name='arrow-left'
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

const HeaderSearch = () => {
  // const [value, setValue] = useState('');
  return (
    <View style={{ ...styles.container, paddingHorizontal: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <Button
        style={{ borderRadius: 20 }}
        appearance='ghost'
        accessoryLeft={ArrowIcon}
        size="tiny"
      />
      <Input
        value={''}
        placeholder='Place your Text'
        accessoryLeft={LensIcon}
        style={{ width: Dimensions.get('window').width - ((30 * 2) + 25), borderRadius: 10, }}
      // onChangeText={nextValue => setValue(nextValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#F9F9F9',
    paddingVertical: 10,
    // height: 40
  },
  icon: {
    width: 25,
    height: 25,
    backgroundColor: 'transparent'
  },
});

export default HeaderSearch;