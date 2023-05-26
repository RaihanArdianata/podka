import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Pressable, RefreshControl, ScrollView, Animated } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useRefresh } from '../components/useRefresh';
import { TabView, SceneMap } from 'react-native-tab-view';
import { useState } from 'react';
import CalendarScreen from './CalendarScreen';
import NotificationScreen from './NotificationScreen';

const requestUser = [
  {}
];

const followers = [
  {}
];

const LiveScreen = ({ }) => {
  const navigation = useNavigation();
  const [tab, setTab] = useState({
    index: 0,
    routes: [
      // { key: 'first', title: 'Activity' },
      { key: 'first', title: 'Notification' },
      { key: 'second', title: 'Calendar' },
    ],
  });
  const [isRefreshing, startRefreshing] = useRefresh();

  const handleIndexChange = (index) => setTab({ ...tab, index });

  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });

          return (
            <TouchableOpacity
              key={i}
              style={styles.tabItem}
              onPress={() => setTab({ ...tab, index: i })}>
              <Animated.Text style={{ opacity }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const renderScene = SceneMap({
    first: NotificationScreen,
    second: CalendarScreen,
  });

  return (
    <View style={styles.container}>
      <TabView
        navigationState={tab}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={handleIndexChange}
      />
      {/* <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={startRefreshing} />}>
        <View>
          <Text style={[styles.title]}>Activity</Text>
        </View>
      </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  title: {
    fontWeight: 'bold',
    letterSpacing: 0.75,
    fontSize: 16
  },
  tabBar: {
    flexDirection: 'row',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
});

export default LiveScreen;