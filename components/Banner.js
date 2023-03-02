import { View, ImageBackground, Image, StyleSheet } from 'react-native';
import React, { memo } from 'react';
import { Text } from '@ui-kitten/components';
import { faker } from '@faker-js/faker';

const Banner = ({ imageURI }) => {
  const image = { uri: 'https://reactjs.org/logo-og.png' };
  return (
    <View style={{}}>
      <ImageBackground source={{ uri: faker.image.abstract(1234, 180, true) }} resizeMode="cover" style={{ width: '100%', height: 180 }} imageStyle={{ borderRadius: 20 }} >
        <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', padding: 16 }}>
          <View>
            <Text category='h6' style={[styles.text, { color: 'white' }]}>Quiz Negara</Text>
            <Text style={[styles.text, { color: 'white' }]}>Mengenal lembaga NKRI</Text>
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

const styles = StyleSheet.create({
  text: {
    textShadowOffset: {
      width: 2, height: 2
    },
    textShadowRadius: 10,
    textShadowColor: '#333',

    marginTop: 2,
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "white"
  },

});

export default memo(Banner);