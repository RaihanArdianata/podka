import { View, Text, Touchable, Pressable, TouchableHighlight } from 'react-native';
import React from 'react';
import { Avatar } from '@ui-kitten/components';
import { faker } from '@faker-js/faker';
import { useNavigation } from '@react-navigation/native';

const AvatarStory = () => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.push('Status', {
      name: 'test',
      image: faker.image.business(250, 250, true)
    })} style={{ borderRadius: 50, marginRight: 15, }}>
      {({ pressed }) => (
        <View style={{ borderWidth: 2, borderColor: '#8380F4', padding: 1, borderRadius: 50, transform: [{ scale: pressed ? 0.85 : 1 }] }}>
          <Avatar size='giant' source={{ uri: faker.image.business(250, 250, true) }} />
        </View>
      )}
    </Pressable>
  );
};

export default AvatarStory;