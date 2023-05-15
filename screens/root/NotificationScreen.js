import { View, Text, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import React from 'react';
import { useRefresh } from '../../components/useRefresh';

const NotificationScreen = () => {
  const [isRefreshing, startRefreshing] = useRefresh();
  return (
    <View style={[styles.root]}>
      <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={startRefreshing} style={{ paddingHorizontal: 10, marginVertical: 5 }} />}>
        <View style={{ paddingHorizontal: 24, marginTop: 30 }}>
          {/* <Text style={[styles.textTitle]}>Request Meet</Text> */}
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
  textTitle: {
    fontWeight: 'bold',
    fontSize: 16
  }
});

export default NotificationScreen;