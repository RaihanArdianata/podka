import { View, StyleSheet, Dimensions } from 'react-native';
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

const PostSingleOverlay = () => {
  const dispatch = useDispatch();
  return (
    <View style={[styles.container]}>
      <View style={[styles.informationWrapper]}>
        <Text style={[styles.displayName]}>{faker.internet.userName()}</Text>
        <Text style={[styles.description, { maxWidth: Dimensions.get('window').width * (50 / 100) }]}>{faker.commerce.productDescription()}</Text>
      </View>
      <View style={[{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }]}>
        <Avatar
          style={styles.avatar}
          size='giant'
          source={{ uri: faker.image.avatar(250, 250, true) }}
        />
        <Button
          style={[{ marginTop: 16, borderRadius: 99999 }]}
          appearance='ghost'
          accessoryLeft={ShareOutline}
        // size="large"
        />
        <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 16, }}>
          <Button
            style={[{ borderRadius: 99999 }]}
            appearance='ghost'
            accessoryLeft={Chat}
            onPress={() => dispatch(openCommentModal({ open: true, sheetType: 0, data: [] }))}
          // size="large"
          />
          <Text style={{ color: '#ffffff' }}>{faker.finance.account(3)}</Text>
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 16, }}>
          <Button
            style={[{ borderRadius: 99999 }]}
            appearance='ghost'
            accessoryLeft={Heart}
          // size="large"
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
  displayName: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16
  },
  description: {
    color: '#ffffff',
    marginTop: 10
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