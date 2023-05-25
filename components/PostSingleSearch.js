import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { Button, Icon } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/core';

const Magnify = (props) => {
  return (
    <Icon
      {...props}
      style={[styles.iconSmall,]}
      name='magnify'
    />
  );
};

const PostSingleSearch = () => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, { justifyContent: 'flex-end' }]}>
      <Button
        style={[{ borderRadius: 99999 }]}
        appearance='ghost'
        accessoryLeft={Magnify}
        onPress={() => navigation.navigate("SearchProfile")}
      // size="large"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 9999,
    top: 0,
    padding: 25,
    alignItems: 'center',
    flexDirection: 'row',
    width: Dimensions.get('window').width,
  },
  iconSmall: {
    width: 30,
    height: 30,
    color: '#ffffff'
  },
});

export default PostSingleSearch;