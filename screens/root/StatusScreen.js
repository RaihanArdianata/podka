import { View, Text, StyleSheet, SafeAreaView, StatusBar, Image, Pressable, TouchableOpacity, Dimensions, Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TextInput, } from 'react-native';
import React from 'react';
import Constants from 'expo-constants';
import { Icon, Input, Layout } from '@ui-kitten/components';
import { faker } from '@faker-js/faker';
import { useState } from 'react';
import { useEffect } from 'react';
import { TouchableHighlight } from 'react-native';

const CloseIcon = (props) => {
  return (
    <Icon
      {...props}
      style={[styles.icon]}
      name='close'
    />
  );
};
const PlaneIcon = (props) => {
  return (
    <Icon
      {...props}
      style={[styles.iconLarge]}
      name='send'
    />
  );
};

const StatusScreen = ({ route, navigation }) => {
  const { name, image } = route.params;

  const [keyboardStatus, setKeyboardStatus] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });

    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled={false}
        style={{ paddingTop: Constants.statusBarHeight + 10, backgroundColor: 'black' }}
      >
        {keyboardStatus && <TouchableWithoutFeedback onPress={Keyboard.dismiss}><View style={[styles.overlay]} /></TouchableWithoutFeedback>}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={[styles.root]}>
            <View style={[styles.line]}>
              <View style={[styles.progress]}>

              </View>
            </View>
            <View style={[styles.imageWrapper]}>
              <View style={[styles.imageContainer]}>
                <Image
                  style={[styles.image]}
                  source={{ uri: faker.image.fashion(640, 480, true) }}
                />
              </View>
              <View style={[styles.headerWrapper]}>
                <Text style={{ color: 'white', fontSize: 15 }}>{name}</Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <CloseIcon />
                </TouchableOpacity>
              </View>
            </View>
            <Image source={{ uri: faker.image.food(640, 480, true) }} style={[styles.mainImage]} />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <View style={[styles.inputWrapper]}>
        <Input style={[styles.inputContainer]} textStyle={{ color: 'white' }} placeholder='Send message' />
        <TouchableOpacity style={{ transform: [{ rotate: '-0deg' }] }}>
          <PlaneIcon />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    backgroundColor: 'black',
    flex: 1,
    height: '100%',
    width: '100%',
    zIndex: 2,
    opacity: 0.55
  },
  root: {
    height: '100%',
    zIndex: 1,
    position: 'relative',
    justifyContent: 'center',
    backgroundColor: 'black',
    alignItems: 'center'
  },
  line: {
    height: 3,
    width: '95%',
    borderWidth: 1,
    backgroundColor: 'gray',
    position: 'absolute',
    top: 18
  },
  progress: {
    height: '100%',
    width: '50%',
    backgroundColor: 'white',
  },
  imageWrapper: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    left: 0,
    width: '90%',
  },
  imageContainer: {
    borderRadius: 100,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%'
  },
  image: {
    borderRadius: 100,
    backgroundColor: 'orange',
    resizeMode: 'cover',
    width: '92%',
    height: '92%'
  },
  mainImage: {
    position: 'absolute',
    width: '100%',
    height: Dimensions.get('window').height - (Dimensions.get('window').height * 25 / 100)
  },
  icon: {
    width: 25,
    height: 25,
    color: 'white'
  },
  iconLarge: {
    width: 30,
    height: 30,
    color: 'white',
  },
  inputWrapper: {
    display: 'flex',
    position: 'absolute',
    bottom: 10,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginVertical: 10
  },
  inputContainer: {
    borderColor: 'white',
    borderRadius: 25,
    width: '85%',
    height: 50,
    paddingLeft: 20,
    borderWidth: 1,
    fontSize: 20,
    color: 'white',
    backgroundColor: 'transparent',
  }
});

export default StatusScreen;