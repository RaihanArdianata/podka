import { View, Text, StyleSheet, Dimensions, Image, TouchableHighlight } from 'react-native';
import React from 'react';
import { faker } from '@faker-js/faker';

const { width, height } = Dimensions.get('window');

const AvatarCustom = () => {
  return (
    <TouchableHighlight style={[styles.profileImgContainer, {}]}>
      <Image style={[styles.image]} source={{ uri: faker.image.business(1234, 2345, true) }} />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  profileImgContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,

  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
});

export default AvatarCustom;