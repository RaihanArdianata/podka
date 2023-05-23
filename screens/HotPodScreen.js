import { View, StyleSheet, Dimensions, ScrollView, RefreshControl, FlatList } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import React from 'react';
import { useRefresh } from '../components/useRefresh';
import { Layout, Text } from '@ui-kitten/components';
import PostSingle from '../components/PostSingle';
import { useRef } from 'react';

const data = [1, 2, 3, 4, 5, 6, 7, 8];

const HotPodScreen = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [isRefreshing, startRefreshing] = useRefresh();
  const mediaRefs = useRef([]);

  const onViewableItemChanged = useRef(({ changed }) => {
    changed.forEach(element => {
      const cell = mediaRefs.current[element.key];

      if (cell) {
        // console.log('onViewChanged', element, element.isViewable);
        if (element.isViewable) {
          cell.play();
        } else {
          cell.stop();
        }
      }
    });
  });

  const renderItem = ({ item, index }) => {
    return (
      <View style={[{ flex: 1, height: Dimensions.get('window').height - 118 }, index % 2 ? { backgroundColor: 'blue' } : { backgroundColor: 'pink' }]}>
        <PostSingle ref={PostSingleRef => (mediaRefs.current[item] = PostSingleRef)} />
      </View>
    );
  };

  return (
    <View style={[styles.container]}>
      {<FlatList
        refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={startRefreshing} />}
        data={data}
        windowSize={4}
        initialNumToRender={0}
        maxToRenderPerBatch={2}
        removeClippedSubviews={true}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 100
        }}
        renderItem={renderItem}
        pagingEnabled
        keyExtractor={(item) => item}
        decelerationRate="normal"
        onViewableItemsChanged={onViewableItemChanged.current}
      />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#033',
    height: '100%',
  },
  video: {
    flex: 1,
    height: '100%',
  }
});


export default HotPodScreen;