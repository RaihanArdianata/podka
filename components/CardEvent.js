import { View, Dimensions, StyleSheet, Image, TouchableHighlight } from 'react-native';
import React from 'react';
import { Icon, Text, Avatar, Button } from '@ui-kitten/components';
import { faker } from '@faker-js/faker';

const { width, height } = Dimensions.get('window');

const Metrics = {
  section: 16,
  halfSection: 8,
};

const MoreIcon = (props) => (
  <Icon
    style={styles.icon}
    fill='#6B7280'
    name='volume-high'
  />
);
const ChatIcon = (props) => (
  <Icon
    style={styles.iconSmall}
    fill='#6B7280'
    name='message-processing-outline'
  />
);
const TimeIcon = (props) => (
  <Icon
    style={styles.iconSmall}
    fill='#6B7280'
    name='clock-time-five-outline'
  />
);
const PersonIcon = (props) => (
  <Icon
    style={styles.iconSmall}
    fill='#6B7280'
    name='comment-account-outline'
  />
);

const CARD_WIDTH = width * 1; //* 100 %
const CARD_ASPECT_RATIO = 345 / 170;
const CARD_HEIGHT = CARD_WIDTH / CARD_ASPECT_RATIO;
const IMAGE_CONTAINER_ASPECT_RATIO = 150 / 150;
const IMAGE_CONTAINER_WIDTH = CARD_WIDTH - 20;
const IMAGE_CONTAINER_HEIGHT =
  IMAGE_CONTAINER_WIDTH / IMAGE_CONTAINER_ASPECT_RATIO;

const CardEvent = ({ roomType = 1 }) => {
  return (
    <View style={{ ...styles.cardWrapper, backgroundColor: '#fff', }}>
      {/* header */}
      <View style={[styles.cardHeader]}>
        <MoreIcon />
        <Text style={{ marginLeft: 10, color: '#6B7280', fontSize: 14 }}>Audio Room</Text>
      </View>
      {/* content */}
      <Text style={{ fontWeight: 'bold', fontSize: 16, marginVertical: 10 }}>Conversation About Art</Text>
      <View style={[styles.detailWrapper]}>
        <View style={[styles.avatarWrapper]}>
          {/* avatar */}
          <View style={[styles.imageContainer]}>
            <Image
              style={[styles.image]}
              source={{ uri: faker.image.fashion(640, 480, true) }}
            />
          </View>
          <View style={[styles.imageContainer]}>
            <Image
              style={[styles.image, styles.avatarStyle]}
              source={{ uri: faker.image.fashion(640, 480, true) }}
            />
          </View>
        </View>
        <View style={[{ height: '100%', flex: 1, justifyContent: 'space-between' }]}>
          {/* name */}
          <View>
            <View style={[{ flexDirection: 'row' }]}>
              <ChatIcon />
              <Text style={[{ fontSize: 12, marginLeft: 5 }]}>Diana Malkova</Text>
            </View>
            <View style={[{ flexDirection: 'row' }]}>
              <ChatIcon />
              <Text style={[{ fontSize: 12, marginLeft: 5 }]}>Sabrina</Text>
            </View>
          </View>
          {/* time, button */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={[{ flexDirection: 'row' }]}>
                <Text style={[{ fontSize: 12, marginRight: 5 }]}>54</Text>
                <PersonIcon />
              </View>
              <View style={[{ flexDirection: 'row', marginLeft: 8 }]}>
                <Text style={[{ fontSize: 12, marginRight: 5 }]}>1h ago</Text>
                <TimeIcon />
              </View>
            </View>
            <Button onPress={() => console.log('ok')} size='small' style={{ borderRadius: 25 }}>
              Join
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#322EDD',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 15
  },
  imageContainer: {
    borderRadius: 100,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    borderRadius: 100,
    backgroundColor: 'orange',
    resizeMode: 'cover',
    width: '92%',
    height: '92%'
  },
  avatarStyle: {
    marginLeft: -90,
    marginTop: 30
  },
  avatarWrapper: {
    flexDirection: 'row',
  },
  detailWrapper: {
    flexDirection: 'row',
    flex: 1
  },
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
    color: '#6B7280'
  },
  iconSmall: {
    width: 18,
    height: 18,
    color: '#6B7280'
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default CardEvent;