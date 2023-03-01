import { faker } from '@faker-js/faker';
import * as React from 'react';
import {
  Image,
  Dimensions,
  StyleSheet,
  View,
  RefreshControl,
} from 'react-native';
import { Tabs } from 'react-native-collapsible-tab-view';

import { useRefresh } from './useRefresh';

export const AlbumsContent = () => {
  return <View style={styles.content}>
    <Image source={{ uri: faker.image.fashion(1234, 2345, true) }} style={styles.cover} />
  </View>;
};

export const Albums = () => {
  const [isRefreshing, startRefreshing] = useRefresh();

  return (
    <Tabs.ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={startRefreshing} />
      }
    >
      <AlbumsContent />
    </Tabs.ScrollView>
  );
};

export default Albums;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cover: {
    width: '50%',
    height: Dimensions.get('window').width / 2,
  },
});