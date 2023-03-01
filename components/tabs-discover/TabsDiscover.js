import { View, Text, useWindowDimensions, StyleSheet, TouchableOpacity, Animated, Dimensions, ScrollView, TouchableWithoutFeedback, Pressable } from 'react-native';
import React, { useState } from 'react';
import { TabView, SceneMap } from 'react-native-tab-view';
import { AlbumsContent } from './Albums';
import { Button } from '@ui-kitten/components';
const LazyPlaceholder = ({ route }) => (
  <View style={styles.scene}>
    <Text>Loading {route.title}…</Text>
  </View>
);

export default function Tabs() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'all', title: 'For You' },
    { key: 'podcast', title: 'Podcast' },
    { key: 'audioRoom', title: 'Audio Room' },
    { key: 'debateRoom', title: 'Debate Room' },
    { key: 'others', title: 'Others' },
  ]);

  const _renderLazyPlaceholder = ({ route }) => <LazyPlaceholder route={route} />;

  const _handleIndexChange = index => setIndex({ index });

  const _renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={[styles.tabBar]}>
          {props.navigationState.routes.map((route, i) => {
            const opacity = props.position.interpolate({
              inputRange,
              outputRange: inputRange.map((inputIndex) =>
                inputIndex === i ? 1 : 0.5
              ),
            });

            return (
              <Pressable
                key={i}
                style={[styles.tabItem, { borderBottomWidth: 2, borderBottomColor: props.navigationState.index == i ? 'green' : 'transparent', marginHorizontal: 5 }]}
                onPress={() => setIndex(i)}>
                <Animated.Text style={{ opacity }}>{route.title}</Animated.Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
    );
  };

  return (
    <TabView
      swipeEnabled={false}
      lazy
      navigationState={{ index, routes }}
      renderScene={SceneMap({
        all: AlbumsContent,
        podcast: AlbumsContent,
        audioRoom: AlbumsContent,
        debateRoom: AlbumsContent,
        others: AlbumsContent,
      })}
      renderLazyPlaceholder={_renderLazyPlaceholder}
      onIndexChange={_handleIndexChange}
      initialLayout={{ width: Dimensions.get('window').width }}
      renderTabBar={_renderTabBar}
      style={styles.container}
      sceneContainerStyle={{ marginTop: 20 }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
  },
  tabItem: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});