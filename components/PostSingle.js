import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { ResizeMode, Video } from 'expo-av';
import { useRef } from 'react';
import { forwardRef } from 'react';
import { useImperativeHandle } from 'react';
import { useEffect } from 'react';
import PostSingleOverlay from './PostSingleOverlay';
import PostSingleVoteOverlay from './PostSingleVoteOverlay';
import PostSingleSearch from './PostSingleSearch';

const PostSingle = forwardRef((props, parentsRef) => {
  const ref = useRef(null);
  useImperativeHandle(parentsRef, () => ({
    play,
    unload,
    stop
  }));


  useEffect(() => {
    return () => unload();
  }, []);

  const play = async () => {
    if (ref.current == null) {
      return;
    }

    const status = await ref.current.getStatusAsync();
    if (status?.isPlaying) {
      return;
    }

    try {
      await ref.current.playAsync();
    } catch (error) {
      console.log(error);
    }
  };

  const stop = async () => {
    if (ref.current == null) {
      return;
    }

    const status = await ref.current.getStatusAsync();
    if (!status?.isPlaying) {
      return;
    }

    try {
      await ref.current.stopAsync();
    } catch (error) {
      console.log(error);
    }
  };

  const unload = async () => {
    if (ref.current == null) {
      return;
    }

    try {
      await ref.current.unloadAsync();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <PostSingleSearch />
      <PostSingleOverlay />
      <Video
        ref={ref}
        style={styles.container}
        source={{
          uri: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4',
        }}
        isLooping
        resizeMode={ResizeMode.COVER}
        shouldPlay={true}
      />
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default PostSingle;