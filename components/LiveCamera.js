import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, Icon } from '@ui-kitten/components';
import PodLogo from '../assets/podLogo.svg';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { openCommentModal } from '../redux/slices/actionSheetSlice';

const requestUser = [
  {}
];

const followers = [
  {}
];


const CloseIcon = (props) => {
  return (
    <Icon
      {...props}
      style={[{ color: '#fff', width: 25, height: 25, }]}
      name='close'
    />
  );
};
const cogIcon = (props) => {
  return (
    <Icon
      {...props}
      style={[{ color: '#fff', width: 25, height: 25, }]}
      name='cog'
    />
  );
};
const calendarIcon = (props) => {
  return (
    <Icon
      {...props}
      style={[{ color: '#fff', width: 25, height: 25, }]}
      name='calendar-month'
    />
  );
};
const accountIcon = (props) => {
  return (
    <Icon
      {...props}
      style={[{ color: '#fff', width: 25, height: 25, }]}
      name='account'
    />
  );
};
const eyeIcon = (props) => {
  return (
    <Icon
      {...props}
      style={[{ color: '#fff', width: 25, height: 25, }]}
      name='eye-outline'
    />
  );
};

const LiveCamera = ({ navigation }) => {
  const dispatch = useDispatch();
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <View style={[{ flex: 1, alignSelf: 'flex-end', alignItems: 'center', }]}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
              <View style={[{ backgroundColor: 'whitesmoke', paddingHorizontal: 10, paddingVertical: 12, borderRadius: 999999 }]}>
                <PodLogo width={45} height={40} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={[{ flex: 1, width: '100%', alignSelf: 'flex-start', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', position: 'absolute', }]}>
            <Button
              style={[{ borderRadius: 99999 }]}
              appearance='ghost'
              accessoryLeft={CloseIcon}
            />
            <Button
              style={[{ borderRadius: 99999 }]}
              appearance='ghost'
              accessoryLeft={cogIcon}
            />
          </View>
          <View style={[{ marginLeft: 20, flex: 1, width: '100%', alignSelf: 'center', flexDirection: 'column', alignItems: 'flex-start', position: 'absolute' }]}>
            <Button
              style={[{ borderRadius: 99999 }]}
              appearance='ghost'
              accessoryLeft={accountIcon}
              onPress={() => navigation.navigate('SpeakRequest', { requestuser: 5 })}
            />
            <Button
              style={[{ borderRadius: 99999 }]}
              appearance='ghost'
              accessoryLeft={calendarIcon}
              onPress={() => dispatch(openCommentModal({ open: true, sheetType: 1, data: [], position: 1, snapPoints: ['25%'] }))}
            />
            <Button
              style={[{ borderRadius: 99999 }]}
              appearance='ghost'
              accessoryLeft={eyeIcon}
            />
          </View>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // height: Dimensions.get('window').height - 30
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    position: 'relative'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#ffffff',
    borderRadius: 99999,
    paddingHorizontal: 2,
    paddingVertical: 2,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default LiveCamera;