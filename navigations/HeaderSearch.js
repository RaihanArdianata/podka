import { View, Text, StyleSheet, TouchableWithoutFeedback, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { Button, Icon, Input } from '@ui-kitten/components';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/core';

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
  const navigation = useNavigation();
  // const [value, setValue] = useState('');
  return (
    <View style={{ ...styles.container, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <Button
        style={{ borderRadius: 20 }}
        appearance='ghost'
        accessoryLeft={ArrowIcon}
        size="tiny"
        onPress={() => navigation.navigate('Home')}
      />
      <Input
        value={''}
        placeholder='Place your Text'
        accessoryLeft={LensIcon}
        style={{ width: Dimensions.get('window').width - ((30 * 2) + 25), borderRadius: 10, backgroundColor: '#ffffff' }}
      // onChangeText={nextValue => setValue(nextValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingTop: Constants.statusBarHeight * 1.5,
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