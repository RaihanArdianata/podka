import { Dimensions, Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { Avatar, Icon, Text, Button } from '@ui-kitten/components';
import { faker } from '@faker-js/faker';
import moment from 'moment';
import Poll from './Poll';

const MoreIcon = (props) => (
  <Icon
    style={styles.icon}
    fill='#000'
    name='dots-horizontal'
  />
);
const heartIcon = (props) => (
  <Icon
    style={styles.iconTiny}
    fill='#000'
    name='heart-outline'
  />
);
const messageIcon = (props) => (
  <Icon
    style={styles.iconTiny}
    fill='#000'
    name='message-processing-outline'
  />
);
const bookmarkIcon = (props) => (
  <Icon
    style={styles.iconTiny}
    fill='#000'
    name='bookmark-outline'
  />
);

const CardManyContent = ({ style }) => {

  return (
    <View style={{ ...style, backgroundColor: '#fff', paddingHorizontal: 15, paddingVertical: 25, borderRadius: 15 }}>
      {/* Header */}
      <View style={styles.CardWrapper}>
        <View style={styles.CardHeaderWrapper}>
          <Avatar source={{ uri: faker.image.business(250, 250, true) }} style={{ marginRight: 10 }} />
          <View>
            <Text category='label'>{faker.name.fullName()}</Text>
            <Text category='s2' style={{ color: '#AEAEAE' }}>{moment(faker.date.between('2021-01-01T00:00:00.000Z', new Date())).startOf('hour').fromNow()}</Text>
          </View>
        </View>
        <Button
          style={{ borderRadius: 20 }}
          appearance='ghost'
          accessoryLeft={MoreIcon}
          size="tiny"
        />
      </View>
      {/* Content */}
      <View style={{ marginVertical: 20, justifyContent: 'center', }}>
        <Image
          style={{ aspectRatio: 2 / 2, borderRadius: 10, marginBottom: 12, minWidth: '100%' }}
          source={{ uri: faker.image.business(640, 480, true) }}
        />
        <Image
          style={{ aspectRatio: 2 / 2, borderRadius: 10, marginBottom: 12, minWidth: '100%' }}
          source={{ uri: faker.image.business(640, 480, true) }}
        />
        <Poll />
        <Text category='s2' style={{ color: '#AEAEAE', letterSpacing: 0.3 }}>{faker.lorem.lines(5)}</Text>
      </View>
      {/* Footer */}
      <View style={styles.itemRowCenter}>
        <View style={styles.itemRowCenter}>
          <View style={{ ...styles.itemRowCenter, marginRight: 20 }}>
            <Button
              style={{ borderRadius: 20 }}
              appearance='ghost'
              accessoryLeft={heartIcon}
              size="tiny"
            />
            <Text category='s2' style={{ letterSpacing: 0.3 }}>
              4.5K
            </Text>
          </View>
          <View style={{ ...styles.itemRowCenter }}>
            <Button
              style={{ borderRadius: 20 }}
              appearance='ghost'
              accessoryLeft={messageIcon}
              size="tiny"
            />
            <Text category='s2' style={{ letterSpacing: 0.3 }}>
              4.5K
            </Text>
          </View>
        </View>
        <Button
          style={{ borderRadius: 20 }}
          appearance='ghost'
          accessoryLeft={bookmarkIcon}
          size="tiny"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  CardWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  CardHeaderWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  CardHeaderTextWrapper: {

  },
  icon: {
    width: 32,
    height: 32,
  },
  iconTiny: {
    width: 25,
    height: 25,
  },
  itemRowCenter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }
});

export default CardManyContent;