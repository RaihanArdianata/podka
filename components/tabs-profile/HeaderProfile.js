import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import { Text, Button, Icon } from '@ui-kitten/components';
import { faker } from '@faker-js/faker';
import AvatarCustom from '../AvatarCustom';
import DividerCustom from '../DividerCustom';
const { width, height } = Dimensions.get('window');

const CARD_WIDTH = width * 0.80;
const CommentRwquestIcon = (props) => {
  return (
    <Icon
      {...props}
      style={[styles.iconTiny,]}
      name='comment-question-outline'
    />
  );
};

const HeaderProfile = ({ myProfile = true, followed = false }) => {
  return (
    <View style={{ paddingHorizontal: 24, justifyContent: 'center', alignItems: 'center', }}>
      {/* bio */}
      <View style={[{ justifyContent: 'center', alignItems: 'center' }]}>
        <AvatarCustom style={styles.avatar} source={{ uri: faker.image.business(1234, 2345, true) }} />
        <View style={[styles.nameWraper]}>
          <Text category='h6' style={[styles.styleText,
          {}]}>{faker.name.fullName()}</Text>
          {!myProfile && <Button
            style={{ borderRadius: 20 }}
            appearance='ghost'
            accessoryLeft={CommentRwquestIcon}
            size="tiny"
          />}
        </View>
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
      <View style={[styles.buttonGroup]}>
        <Button size='medium'>Edit Profile</Button>
        {
          !myProfile && <>
            <Button size='medium' style={{ marginRight: 10 }}>Follow</Button>
            <Button size='medium' appearance='outline'>Message</Button>
          </>
        }
      </View>
      {/* Content */}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    // backgroundColor: 'green',
    // height: 40
  },
  nameWraper: {
    flexDirection: 'row'
  },
  container: {
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: 'transparent'
  },
  avatar: {
    margin: 8,
  },
  styleText: {
    marginVertical: 5
  },
  iconTiny: {
    width: 25,
    height: 25,
    color: 'black'
  },
  buttonGroup: {
    marginVertical: 20,
    flexDirection: 'row',
  },
});


export default HeaderProfile;