import { View, SafeAreaView, ScrollView, StyleSheet, TouchableWithoutFeedback, RefreshControl } from 'react-native';
import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import Banner from '../Banner';
import CardEvent from '../CardEvent';
import CarouselCustom from '../Carousel';
import { useRefresh } from '../useRefresh';
import { useNavigation } from '@react-navigation/core';
import Constants from 'expo-constants';

const DiscoverTabPage = () => {
  const [isRefreshing, startRefreshing] = useRefresh();
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, paddingHorizontal: 24 }}>
      <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={startRefreshing} />}>
        <Layout style={styles.container}>
          <CarouselCustom />
          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text category='h6'>Online Now</Text>
              <TouchableWithoutFeedback onPress={() => console.log('ok')}>
                <Text>View All</Text>
              </TouchableWithoutFeedback>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <CardEvent />
            </ScrollView>
          </View>
          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text category='h6'>Upcomming Event</Text>
              <TouchableWithoutFeedback onPress={() => console.log('ok')}>
                <Text>View All</Text>
              </TouchableWithoutFeedback>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <CardEvent />
            </ScrollView>
          </View>
        </Layout>
      </ScrollView>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column'
  },
  storyWrapper: {
    flexDirection: 'row'
  }
});


export default DiscoverTabPage;