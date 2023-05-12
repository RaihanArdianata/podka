import { View, Text, SafeAreaView, ScrollView, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { Avatar, Button, Icon, Layout } from '@ui-kitten/components/ui';
import Pill from '../components/Pill';
import { faker } from '@faker-js/faker';
import { useNavigation } from '@react-navigation/core';

const pillData = [
  'amerika', 'jepang', 'daniel', 'sella'
];

const avatarData = [
  {
    name: faker.name.fullName(),
    image: faker.image.business(1234, 2345, true),
    username: `@${faker.name.firstName()}`
  },
];

const TrashIcon = (props) => (
  <Icon
    style={styles.icon}
    fill='#000'
    name='trash-can'
  />
);

const SearchScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: '#F9F9F9' }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Layout style={styles.container}>
          <View style={{ paddingHorizontal: 24, marginTop: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '80%' }}>
                {
                  pillData.map((item, index) => (<View key={index} style={{ marginRight: 5, marginVertical: 5 }}><Pill text={item} /></View>))
                }
              </View>
              <View>
                <Button
                  style={{ borderRadius: 20 }}
                  appearance='ghost'
                  accessoryLeft={TrashIcon}
                  size="tiny"
                />
              </View>
            </View>
            {/* avatar history */}
            <View style={{ marginTop: 40 }}>
              {
                avatarData.map((item, index) => (
                  <Pressable key={index} onPress={() => navigation.navigate('Profile', {
                    myProfile: false,
                  })}>
                    <View style={styles.avatarWrapper}>
                      <Avatar size='large' source={{ uri: item.image }} style={{ marginRight: 10 }} />
                      <View>
                        <Text category='label'>{item.name}</Text>
                        <Text category='s2' style={{ color: '#AEAEAE' }}>{item.username}</Text>
                      </View>
                    </View>
                  </Pressable>
                ))
              }
            </View>
          </View>
        </Layout>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  storyWrapper: {
    flexDirection: 'row'
  },
  icon: {
    width: 25,
    height: 25,
    backgroundColor: 'transparent'
  },
  avatarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10
  }
});

export default SearchScreen;