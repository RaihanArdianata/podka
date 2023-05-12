import { View, StyleSheet, Image, Dimensions } from 'react-native';
import React from 'react';
import { faker } from '@faker-js/faker';
import { Avatar, Icon, Button, Text } from '@ui-kitten/components';

const { width, height } = Dimensions.get('window');

const Metrics = {
  section: 16,
  halfSection: 8,
};

const CARD_WIDTH = width * 0.42;
const CARD_ASPECT_RATIO = 170 / 280;
const CARD_HEIGHT = CARD_WIDTH / CARD_ASPECT_RATIO;
const IMAGE_CONTAINER_ASPECT_RATIO = 150 / 150;
const IMAGE_CONTAINER_WIDTH = CARD_WIDTH - 20;
const IMAGE_CONTAINER_HEIGHT =
  IMAGE_CONTAINER_WIDTH / IMAGE_CONTAINER_ASPECT_RATIO;

const BookmarkIcon = (props) => (
  <Icon
    style={styles.icon}
    fill='#000'
    name='bookmark-outline'
  />
);

const StoreCard = () => {
  return (
    <View style={{ ...styles.cardWrapper, backgroundColor: '#fff', }}>
      {/* header */}
      <View>
        {/* <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Toped_2018-05.png/150px-Toped_2018-05.png' }} style={{ height: 25, width: 25 }} /> */}
        <Text category="label">{faker.company.name().length < 10 && faker.company.name() || faker.company.name().substring(0, 10).concat('...')}</Text>
      </View>
      {/* product image */}
      <View style={{ marginVertical: 20 }}>
        <Image source={{ uri: faker.image.abstract(1234, 2345, true) }} style={{ ...styles.cardImage }} />
      </View>
      {/* footer */}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View>
          <Text category='p1'>{faker.finance.amount(5, 10, 3, 'Rp', false)}</Text>
          <Text category='label'>Kaos</Text>
        </View>
        <View>
          <Button
            style={{ borderRadius: 20 }}
            appearance='ghost'
            accessoryLeft={BookmarkIcon}
            size="tiny"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    borderRadius: 12,
    padding: 10
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


export default StoreCard;