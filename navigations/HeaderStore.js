import { View, Text, StyleSheet, TouchableWithoutFeedback, Dimensions } from 'react-native';
import React from 'react';
import Constants from 'expo-constants';
import { Button, Icon, Input } from '@ui-kitten/components';

const BookmarkIcon = (props) => (
  <Icon
    style={styles.icon}
    fill='#000'
    name='bookmark-outline'
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

const HeaderStore = () => {
  return (
    <View style={{ ...styles.container, paddingHorizontal: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <Input
        value={''}
        placeholder='Place your Text'
        accessoryLeft={LensIcon}
        style={{ width: Dimensions.get('window').width - ((30 * 2) + 25), borderRadius: 10 }}
      // onChangeText={nextValue => setValue(nextValue)}
      />
      <Button
        style={{ borderRadius: 20 }}
        appearance='ghost'
        accessoryLeft={BookmarkIcon}
        size="tiny"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingVertical: 10,
    // height: 40
  },
  icon: {
    width: 25,
    height: 25,
    backgroundColor: 'transparent'
  },
});

export default HeaderStore;