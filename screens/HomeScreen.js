import { View, SafeAreaView, StyleSheet, Dimensions, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Button, Layout, Text } from '@ui-kitten/components';
import Title from '../components/Title';
import Constants from 'expo-constants';
import Banner from '../components/Banner';
import InputCustom from '../components/Input';
import Card from '../components/Card';

const dataLembaga = ['MPR', 'Presiden', 'BPK', 'KPK', 'DPR', 'KPU', 'MA', 'MK'];

const HomeScreen = () => {
  const [state, setState] = useState('MPR');
  const onClick = (item) => () => {
    setState(item);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Layout style={styles.container}>
          <Title />
          <Banner />
          <InputCustom />
          <View style={{ marginVertical: 24, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text category='h6'>Lembaga Negara</Text>
            <Text category='s1' style={{ color: '#B835D9' }}>Lainnya</Text>
          </View>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ height: '100%' }} >
            {
              dataLembaga.map((item, index) => <Button status='basic' key={index} onPress={onClick(item)} style={{ height: 40, minWidth: 65, paddingHorizontal: 10, borderRadius: 10, backgroundColor: state == item ? '#B835D9' : 'whitesmoke', borderWidth: 0, marginRight: 15, }} size='tiny'>
                <Text style={{ color: state == item ? '#fff' : '#000' }}>{item}</Text>
              </Button>)
            }
          </ScrollView>
          <View style={{ marginVertical: 24, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text category='h6'>Lembaga Negara</Text>
            <Text category='s1' style={{ color: '#B835D9' }}>Lainnya</Text>
          </View>
          <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row', rowGap: 10, columnGap: 10, justifyContent: 'space-around', }}>
            <Card />
            <Card />
            <Card />
            <Card />
          </View>
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    padding: 24,
  },
});

export default HomeScreen;