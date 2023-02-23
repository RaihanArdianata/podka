import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import { Layout, Text } from '@ui-kitten/components';
import CardPost from '../components/CardPost';
import AvatarStory from '../components/AvatarStory';
import CardManyContent from '../components/CardManyContent';

const testStory = [1, 2, 3, 4, 5, 6];

function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Layout style={styles.container}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ padding: 24, }}>
            {
              testStory.map((item, key) => <AvatarStory key={key} />)
            }
          </ScrollView>
          <View style={{ padding: 24 }}>
            {
              testStory.map((item, key) => {
                if (key % 2 == 0) return <CardManyContent key={key} />;
                return <CardPost key={key} />;
              })
            }
          </View>
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    // marginTop: Constants.statusBarHeight,
    flex: 1,
  },
  storyWrapper: {
    flexDirection: 'row'
  }
});

export default HomeScreen;