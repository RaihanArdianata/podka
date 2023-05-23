import { View, StyleSheet, Dimensions, Animated } from 'react-native';
import { Text, Avatar, Button, Icon } from '@ui-kitten/components';
import React from 'react';
import { faker } from '@faker-js/faker';
import { useState } from 'react';
import { useEffect } from 'react';

const Vote = (props) => {
  return (
    <Icon
      {...props}
      style={[styles.iconSmall,]}
      name='vote'
    />
  );
};

const PostSingleVoteOverlay = () => {
  const [progress, setProgress] = useState(new Animated.Value(0));
  const [hide, setHide] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      setHide(true);
    }, 8000);

    Animated.timing(progress, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start();
    return () => clearTimeout(timer);
  }, [hide]);

  const progressAnimation = progress.interpolate({
    inputRange: [0, 5],
    outputRange: ['0%', '80%']
  });
  const progressAnimation2 = progress.interpolate({
    inputRange: [0, 5],
    outputRange: ['0%', '20%']
  });

  return (
    <View style={[styles.container, { justifyContent: hide ? 'flex-end' : 'space-between', }]}>
      <View style={[styles.proggressWrapper, { display: hide ? 'none' : 'flex' }]}>
        <View style={[styles.line, { marginBottom: 5 }]}>
          <Text style={[styles.fontSmall]}>Voting</Text>
          <Animated.View style={[styles.progress, { width: progressAnimation, backgroundColor: 'blue', }]}>
          </Animated.View>
        </View>
        <View style={[styles.line]}>
          <Animated.View style={[styles.progress, { width: progressAnimation2, backgroundColor: 'red', }]}>
          </Animated.View>
          <Text style={[styles.fontSmall]}>Voting</Text>
        </View>
      </View>
      <Button
        style={[{ borderRadius: 99999 }]}
        appearance='ghost'
        accessoryLeft={Vote}
      // size="large"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 9999,
    top: 0,
    padding: 25,
    alignItems: 'center',
    flexDirection: 'row',
    width: Dimensions.get('window').width,
  },
  iconMedium: {
    width: 35,
    height: 35,
    color: '#ffffff'
  },
  iconSmall: {
    width: 25,
    height: 25,
    color: '#ffffff'
  },
  line: {
    height: 15,
    width: '100%',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'transparent',
    position: 'relative',
  },
  progress: {
    borderRadius: 10,
    height: '100%',
    // width: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  proggressWrapper: {
    flexDirection: 'column',
    width: '80%'
  },
  fontSmall: {
    position: 'absolute',
    fontSize: 8,
    zIndex: 999,
    left: '50%'
  }
});

export default PostSingleVoteOverlay;