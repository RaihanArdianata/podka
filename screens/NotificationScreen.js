import { View, Text as RNtext, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import React from 'react';
import { useRefresh } from '../components/useRefresh';
import { faker } from '@faker-js/faker';
import { Avatar, Button, Text } from '@ui-kitten/components';

const data = [
  {
    type: 0,
    message: 'Suggested for you'
  },
  {
    type: 0,
    message: 'Suggested for you'
  },
  {
    type: 0,
    message: 'Suggested for you'
  },
  {
    type: 0,
    message: 'Suggested for you'
  },
  {
    type: 0,
    message: 'Suggested for you'
  },
  {
    type: 0,
    message: 'Suggested for you'
  },
  {
    type: 0,
    message: 'Suggested for you'
  },
  {
    type: 0,
    message: 'Suggested for you'
  },
  {
    type: 0,
    message: 'Suggested for you'
  },
];

const data2 = [
  {
    type: 1,
    message: 'Press panic button'
  },
  {
    type: 2,
    message: 'Upload new post'
  },
];

const NotificationScreen = () => {
  const [isRefreshing, startRefreshing] = useRefresh();
  return (
    <View style={[styles.root]}>
      <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={startRefreshing} style={{ paddingHorizontal: 10, marginVertical: 5 }} />}>
        {/* Text */}
        <Text style={[styles.textTitle]}>This week</Text>
        {
          data2.map(({ message, type }, index) => (
            <View style={{ paddingHorizontal: 24, marginTop: 15 }}>
              {/* profile */}
              <View style={[styles.profileContainer]}>
                <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                  <Avatar
                    style={styles.avatar}
                    size='small'
                    source={{ uri: faker.image.avatar(250, 250, true) }}
                  />
                  <View style={[{ justifyContent: 'center' }]}>
                    <Text style={[styles.displayName]}>{faker.internet.userName()}</Text>
                    <Text style={[{ marginLeft: 10, fontSize: 12 }]}>{message}</Text>
                  </View>
                </View>
                <Button
                  style={[{ width: 100, color: 'blue' }]}
                  appearance='outline'
                  size='tiny'
                  status='primary'
                >
                  <RNtext style={{ color: 'blue' }}>{type == 1 ? 'Help Now' : 'Open'}</RNtext>
                </Button>
              </View>
            </View>
          ))
        }
        {/* suggest */}
        <Text style={[styles.textTitle]}>Suggested for you</Text>
        {
          data.map(({ message, type }, index) => {
            return (<View key={index} style={{ paddingHorizontal: 24, marginTop: 15 }}>
              {/* profile */}
              <View style={[styles.profileContainer]}>
                <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                  <Avatar
                    style={styles.avatar}
                    size='small'
                    source={{ uri: faker.image.avatar(250, 250, true) }}
                  />
                  <View style={[{ justifyContent: 'center' }]}>
                    <Text style={[styles.displayName]}>{faker.internet.userName()}</Text>
                    <Text style={[{ marginLeft: 10, fontSize: 12 }]}>{message}</Text>
                  </View>
                </View>
                <Button
                  style={[{ width: 100, color: 'blue' }]}
                  appearance='outline'
                  size='tiny'
                  status='primary'
                >
                  <RNtext style={{ color: 'blue' }}>Follow</RNtext>
                </Button>
              </View>
            </View>);
          })
        }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 16
  },
  displayName: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 14
  },
  profileContainer: {
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  avatar: {
    borderWidth: 1,
    borderColor: '#ffffff'
  },
});

export default NotificationScreen;