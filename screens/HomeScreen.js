import React, { useEffect } from 'react';
import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import { Layout, Text } from '@ui-kitten/components';
import CardPost from '../components/CardPost';
import AvatarStory from '../components/AvatarStory';
import CardManyContent from '../components/CardManyContent';
import { useRefresh } from '../components/useRefresh';

const testStory = [1, 2, 3, 4, 5, 6];

function HomeScreen() {
  const [isRefreshing, startRefreshing] = useRefresh();

  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={startRefreshing} />}>
        <Layout style={styles.container}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 10, marginVertical: 5 }}>
            {
              testStory.map((item, key) => <AvatarStory key={key} />)
            }
          </ScrollView>
          <View style={{ paddingHorizontal: 24, marginTop: 10 }}>
            {
              testStory.map((item, key) => {
                if (key % 2 == 0) return <CardManyContent key={key} style={{ marginBottom: 20 }} />;
                return <CardPost key={key} style={{ marginBottom: 20 }} />;
              })
            }
          </View>
        </Layout>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9'
  },
  storyWrapper: {
    flexDirection: 'row'
  }
});

export default HomeScreen;