import { View, RefreshControl, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { useRefresh } from '../components/useRefresh';
import { Avatar, Button, Text } from '@ui-kitten/components';
import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const MessageScreen = () => {
  const [isRefreshing, startRefreshing] = useRefresh();

  return (
    <View style={[styles.root]}>
      <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={startRefreshing} style={{ paddingHorizontal: 10, marginVertical: 5 }} />}>
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
                <Text style={[{ marginLeft: 10, fontSize: 12 }]}>2 new message . {dayjs(new Date()).toNow()}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#ffffff'
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

export default MessageScreen;