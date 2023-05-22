import React, { useCallback } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import {
  Tabs,

} from 'react-native-collapsible-tab-view';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';
import HeaderProfile from './HeaderProfile';
import Constants from 'expo-constants';

import Albums from './Albums';


function TabItem({
  index,
  indexDecimal,
  label,
}) {
  const dotStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            indexDecimal.value,
            [index - 1, index, index + 1],
            [0, -8, 0],
            Animated.Extrapolate.CLAMP
          ),
        },
      ],
      opacity: interpolate(
        indexDecimal.value,
        [index - 1, index, index + 1],
        [0, 1, 0],
        Animated.Extrapolate.CLAMP
      ),
    };
  });

  const textStyle = useAnimatedStyle(() => {
    return {
      fontWeight:
        Math.abs(index - indexDecimal.value) < 0.5 ? 'bold' : undefined,
      transform: [
        {
          translateX: interpolate(
            indexDecimal.value,
            [index - 1, index, index + 1],
            [0, 8, 0],
            Animated.Extrapolate.CLAMP
          ),
        },
      ],
      color: interpolateColor(
        indexDecimal.value,
        [index - 1, index, index + 1],
        ['black', '#2196f3', 'black']
      ),
    };
  });

  return (
    <View style={styles.tabItemContainer}>
      <Animated.Text style={textStyle}>
        {label}
      </Animated.Text>
      {/* <Animated.View style={[styles.tabItemDot, dotStyle]} /> */}
    </View>
  );
}

const TabsProfile = React.forwardRef(({ emptyContacts, ...props }, ref) => {
  console.log(props);

  const makeLabel = useCallback(
    (label) => (props) => (
      <TabItem
        index={props.index}
        indexDecimal={props.indexDecimal}
        label={label}
      />
    ),
    []
  );

  return (
    <Tabs.Container ref={ref} renderHeader={() => <HeaderProfile {...props.data} />} {...props}>
      <Tabs.Tab name="posts" label={makeLabel('Posts')}>
        <Albums />
      </Tabs.Tab>
      <Tabs.Tab name="tagged" label={makeLabel('Tagged')}>
        <Albums />
      </Tabs.Tab>
    </Tabs.Container>
  );
}
);

export default TabsProfile;

const styles = StyleSheet.create({
  tabItemDot: {
    // position: 'absolute',
    width: 10,
    height: 10,
    backgroundColor: '#2196f3',
    borderRadius: 10,
  },
  tabItemContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});