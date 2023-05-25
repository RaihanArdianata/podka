import { View, StyleSheet, Dimensions, Text as RNtext } from 'react-native';
import { Text, Avatar, Button, Icon } from '@ui-kitten/components';
import React from 'react';
import { faker } from '@faker-js/faker';
import { useDispatch } from 'react-redux';
import { openCommentModal } from '../redux/slices/actionSheetSlice';

const Heart = (props) => {
  return (
    <Icon
      {...props}
      style={[styles.iconTiny,]}
      name='heart'
    />
  );
};
const ShareOutline = (props) => {
  return (
    <Icon
      {...props}
      style={[styles.iconTiny,]}
      name='share'
    />
  );
};
const Chat = (props) => {
  return (
    <Icon
      {...props}
      style={[styles.iconTiny,]}
      name='chat-processing'
    />
  );
};
const Bookmark = (props) => {
  return (
    <Icon
      {...props}
      style={[styles.iconTiny,]}
      name='bookmark-minus'
    />
  );
};

const PostSingleOverlay = () => {
  const dispatch = useDispatch();
  return (
    <View style={[styles.container]}>
      <View style={[styles.informationWrapper]}>
        <View style={[{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }]}>
          <View style={[styles.accountNameWrapper]}>
            <Avatar
              style={styles.avatar}
              size='small'
              source={{ uri: faker.image.avatar(250, 250, true) }}
            />
            <Text style={[styles.displayName]}>{faker.internet.userName()}</Text>
          </View>
          <Button
            style={[{ marginLeft: 10, borderColor: 'white' }]}
            appearance='outline'
            size='tiny'
            status='control'
          ><RNtext style={{ color: 'white' }}>Follow</RNtext></Button>
        </View>
        <Text style={[styles.description, { maxWidth: Dimensions.get('window').width * (60 / 100) }]}>{faker.commerce.productDescription()}</Text>
      </View>
      <View style={[{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }]}>
        <Button
          style={[{ marginTop: 16, borderRadius: 99999 }]}
          appearance='ghost'
          accessoryLeft={ShareOutline}
        />
        <Button
          style={[{ marginTop: 16, borderRadius: 99999 }]}
          appearance='ghost'
          accessoryLeft={Bookmark}
        />
        <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 16, }}>
          <Button
            style={[{ borderRadius: 99999 }]}
            appearance='ghost'
            accessoryLeft={Chat}
            onPress={() => dispatch(openCommentModal({ open: true, sheetType: 0, data: [] }))}
          />
          <Text style={{ color: '#ffffff' }}>{faker.finance.account(3)}</Text>
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 16, }}>
          <Button
            style={[{ borderRadius: 99999 }]}
            appearance='ghost'
            accessoryLeft={Heart}
          />
          <Text style={{ color: '#ffffff' }}>{faker.finance.account(3)}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 999,
    bottom: 0,
    padding: 25,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row',
    width: Dimensions.get('window').width,
  },
  informationWrapper: {
    flexDirection: 'column',
    bottom: 0,
  },
  accountNameWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  displayName: {
    marginLeft: 10,
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14
  },
  description: {
    color: '#ffffff',
    marginTop: 10,
    fontSize: 12,
  },
  avatar: {
    borderWidth: 1,
    borderColor: '#ffffff'
  },
  iconTiny: {
    width: 35,
    height: 35,
    color: '#ffffff'
  },
});

export default PostSingleOverlay;