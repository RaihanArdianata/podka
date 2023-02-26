import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import { Layout, Text } from '@ui-kitten/components';
import CardPost from '../components/CardPost';
import AvatarStory from '../components/AvatarStory';
import CardManyContent from '../components/CardManyContent';

const testStory = [1, 2, 3, 4, 5, 6];

function ProfileScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Layout style={styles.container}>
          <Text>Profile</Text>
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    // marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: 'transparent',
  },
  storyWrapper: {
    flexDirection: 'row'
  }
});

export default ProfileScreen;