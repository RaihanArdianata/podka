import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationTab, Button, Icon } from '@ui-kitten/components';
import Lottie from 'lottie-react-native';
import { useRef } from 'react';
import soundWaveAnimate from '../assets/sound-wave.json';
import PodLogo from '../assets/podLogo.svg';

const homeIcon = (props) => {
  return (
    <Icon
      {...props}
      // style={[styles.iconTiny]}
      name='home'
    />
  );
};
const chatIcon = (props) => {
  return (
    <Icon
      {...props}
      // style={[styles.iconTiny]}
      name='message-text'
    />
  );
};
const discoverIcon = (props) => {
  const animation = useRef(null);

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 25 }}>
      {/* <Lottie
        autoPlay
        loop
        ref={animation}
        // Find more Lottie files at https://lottiefiles.com/featured
        style={{

        }}
        source={soundWaveAnimate}
      /> */}
      {/* <Icon
        {...props}
        style={[styles.iconTiny]}
        fill={'#fff'}
        name='waveform'
      /> */}
      <PodLogo width={30} height={25} />
    </View>
  );
};
const storeIcon = (props) => {
  return (
    <Icon
      {...props}
      // style={[styles.iconTiny]}
      name='storefront'
    />
  );
};
const profileIcon = (props) => {
  return (
    <Icon
      {...props}
      // style={[styles.iconTiny]}
      name='account-circle'
    />
  );
};


const BottomTabUiKitten = ({ navigation, state }) => {
  return (
    <BottomNavigation
      selectedIndex={state.index}
      style={{ paddingVertical: 10 }}
      appearance="noIndicator"
      onSelect={index => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab icon={homeIcon} />
      <BottomNavigationTab icon={storeIcon} />
      <BottomNavigationTab icon={discoverIcon} />
      <BottomNavigationTab icon={chatIcon} />
      <BottomNavigationTab icon={profileIcon} />
    </BottomNavigation>
  );
};

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  icon: {
    width: 32,
    height: 32,
  },
  iconTiny: {
    width: 35,
    height: 35,
    color: 'white'
  },
  itemRowCenter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }
});

export default BottomTabUiKitten;