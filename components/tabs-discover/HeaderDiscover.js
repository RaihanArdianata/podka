import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import { Text, Button } from '@ui-kitten/components';
import { faker } from '@faker-js/faker';
import AvatarCustom from '../AvatarCustom';
import DividerCustom from '../DividerCustom';
const { width, height } = Dimensions.get('window');

const CARD_WIDTH = width * 0.80;

const HeaderProfile = () => {
  return (
    <View style={{ paddingHorizontal: 24, marginTop: 50, justifyContent: 'center', alignItems: 'center' }}>
      {/* bio */}
      <View style={[{ justifyContent: 'center', alignItems: 'center' }]}>
        <AvatarCustom style={styles.avatar} source={{ uri: faker.image.business(1234, 2345, true) }} />
        <Text category='h6' style={[styles.styleText,
        {}]}>{faker.name.fullName()}</Text>
        <Text category='p2' style={[styles.styleText, { color: '#AEAEAE' }]}>@{faker.name.fullName()}</Text>
        <Text category='p2' style={[styles.styleText, { color: '#AEAEAE', textAlign: 'center', width: CARD_WIDTH }]}>{faker.lorem.paragraph(2)}</Text>
      </View>
      {/* profile follower and posts */}
      <View style={[{ flexDirection: 'row', marginVertical: 20 }]}>
        <View style={[{ flexDirection: 'column', justifyContent: 'center', flex: 1, alignItems: 'center' }]}>
          <Text category='h6'>{faker.datatype.float({ min: 10, max: 100, precision: 0.1 }).toString().concat('K')}</Text>
          <Text category='p2' style={{ color: '#aeaeae' }}>Follower</Text>
        </View>
        <DividerCustom />
        <View style={[{ flexDirection: 'column', justifyContent: 'center', flex: 1, alignItems: 'center' }]}>
          <Text category='h6'>{faker.datatype.float({ min: 10, max: 100, precision: 0.1 }).toString().concat('K')}</Text>
          <Text category='p2' style={{ color: '#aeaeae' }}>Following</Text>
        </View>
        <DividerCustom />
        <View style={[{ flexDirection: 'column', justifyContent: 'center', flex: 1, alignItems: 'center' }]}>
          <Text category='h6'>{faker.datatype.number({ min: 10, max: 100 }).toString()}</Text>
          <Text category='p2' style={{ color: '#aeaeae' }}>Posts</Text>
        </View>
      </View>
      {/* button action*/}
      <View style={{ marginVertical: 20 }}>
        <Button size='medium'>Edit Profile</Button>
      </View>
      {/* Content */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: 'transparent'
  },
  avatar: {
    margin: 8,
  },
  styleText: {
    marginVertical: 5
  }
});


export default HeaderProfile;