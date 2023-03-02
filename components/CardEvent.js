import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get('window');

const Metrics = {
  section: 16,
  halfSection: 8,
};

const CARD_WIDTH = width * 1; //* 100 %
const CARD_ASPECT_RATIO = 345 / 170;
const CARD_HEIGHT = CARD_WIDTH / CARD_ASPECT_RATIO;
const IMAGE_CONTAINER_ASPECT_RATIO = 150 / 150;
const IMAGE_CONTAINER_WIDTH = CARD_WIDTH - 20;
const IMAGE_CONTAINER_HEIGHT =
  IMAGE_CONTAINER_WIDTH / IMAGE_CONTAINER_ASPECT_RATIO;

const CardEvent = () => {
  return (
    <View style={{ ...styles.cardWrapper, backgroundColor: '#fff', }}>
      <Text>CardEvent</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    borderRadius: 20,
    padding: 15,
    marginVertical: 20
  },
  cardImage: {
    width: IMAGE_CONTAINER_WIDTH,
    height: IMAGE_CONTAINER_HEIGHT,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  icon: {
    width: 25,
    height: 25,
    backgroundColor: 'transparent'
  },
});

export default CardEvent;