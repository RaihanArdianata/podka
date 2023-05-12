import { View, Text, StyleSheet, SafeAreaView, ScrollView, RefreshControl } from 'react-native';
import React, { useState } from 'react';
import { Layout } from '@ui-kitten/components/ui';
import StoreCard from '../components/StoreCard';
import Pill from '../components/Pill';
import { useRefresh } from '../components/useRefresh';

const categoryData = ['Clothes', 'Accessorise', 'Device', 'Book', 'Technology'];

const productData = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const StoreScreen = () => {
  const [isRefreshing, startRefreshing] = useRefresh();
  const [selectedCategory, setSelectedCategory] = useState('');

  const setCategory = (value) => {
    if (value == selectedCategory) setSelectedCategory('');
    setSelectedCategory(value);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#F9F9F9', }}>
      <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={startRefreshing} />}>
        <Layout style={styles.container}>
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 24, marginTop: 10 }}>
              {
                categoryData.map((item, index) => (<View key={index} style={{ marginRight: index == categoryData.length - 1 && 50 || 10, marginVertical: 5, }}><Pill text={item} action={() => setCategory(item)} /></View>))
              }
            </ScrollView>
            <View style={{ marginHorizontal: 24, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              {
                productData.map((item, index) => (
                  <View style={{ marginVertical: 10 }} key={index} >
                    <StoreCard />
                  </View>
                ))
              }
            </View>
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

export default StoreScreen;