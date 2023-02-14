import { View, ImageBackground, Image } from 'react-native';
import React from 'react';
import { Text } from '@ui-kitten/components';

const Banner = () => {
  const image = { uri: 'https://reactjs.org/logo-og.png' };
  return (
    <View>
      <ImageBackground source={require('../assets/banner.jpg')} resizeMode="cover" style={{ width: '100%', height: 135, marginVertical: 24 }} >
        <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', padding: 16 }}>
          <View>
            <Text category='h6' style={{ color: 'white' }}>Quiz Negara</Text>
            <Text style={{ color: 'white' }}>Mengenal lembaga NKRI</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
              style={{}}
              source={require('../assets/piala.png')}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Banner;