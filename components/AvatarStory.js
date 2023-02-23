import { View, Text } from 'react-native';
import React from 'react';
import { Avatar } from '@ui-kitten/components';
import { faker } from '@faker-js/faker';

const AvatarStory = () => {
  return (
    <View style={{ borderWidth: 2, borderColor: '#45CB85', padding: 1, borderRadius: 50, marginRight: 15 }}>
      <Avatar size='giant' source={{ uri: faker.image.business(1234, 2345, true) }} />
    </View>
  );
};

export default AvatarStory;