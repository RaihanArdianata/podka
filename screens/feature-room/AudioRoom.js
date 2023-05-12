import { View, Text, ScrollView, RefreshControl, StyleSheet, Pressable, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { useRefresh } from '../../components/useRefresh';
import { Layout, Icon, Button } from '@ui-kitten/components/ui';
import { useState } from 'react';
import { faker } from '@faker-js/faker';
import DividerCustom from '../../components/DividerCustom';

const UnMuteIcon = (props) => (
  <Icon
    style={[styles.icon, { color: '#1E9F69' }]}
    fill='#6B7280'
    name='volume-high'
  />
);
const MuteIcon = (props) => (
  <Icon
    style={[styles.icon, { color: '#DB4F58' }]}
    fill='#6B7280'
    name='volume-off'
  />
);
const MicrophoneIcon = (props) => (
  <Icon
    style={[styles.iconSmall, { color: '#DB4F58' }]}
    fill='#6B7280'
    name='microphone'
  />
);
const MicrophoneMuteIcon = (props) => (
  <Icon
    style={[styles.iconSmall, { color: '#aeaeae' }]}
    fill='#6B7280'
    name='microphone-off'
  />
);
const MicrophoneIconLarge = (props) => (
  <Icon
    style={[styles.iconLarge, { color: '#6B7280' }]}
    fill='#6B7280'
    name='microphone'
  />
);
const MicrophoneMuteIconLarge = (props) => (
  <Icon
    style={[styles.iconLarge, { color: '#6B7280' }]}
    fill='#6B7280'
    name='microphone-off'
  />
);
const PlusIconLarge = (props) => (
  <Icon
    style={[styles.iconLarge, { color: '#6B7280' }]}
    fill='#6B7280'
    name='plus'
  />
);

const dataHost = [
  {
    name: 'Sandra',
    isMute: false,
    isTalk: true
  },
  {
    name: 'Diana (You)',
    isMute: true,
    isTalk: false
  },
];
const followedBySpeaker = [
  {
    name: 'Sandra',
    isMute: true,
    isTalk: false
  },
  {
    name: 'Diana',
    isMute: true,
    isTalk: false
  },
];
const OtherInRoom = [
  {
    name: 'Sandra',
    isMute: true,
    isTalk: false
  },
  {
    name: 'Diana',
    isMute: true,
    isTalk: false
  },
  {
    name: 'Diana',
    isMute: true,
    isTalk: false
  },
  {
    name: 'Diana',
    isMute: true,
    isTalk: false
  },
  {
    name: 'Diana',
    isMute: true,
    isTalk: false
  },
  {
    name: 'Diana',
    isMute: true,
    isTalk: false
  },
  {
    name: 'Diana',
    isMute: true,
    isTalk: false
  },
  {
    name: 'Diana',
    isMute: true,
    isTalk: false
  },
  {
    name: 'Diana',
    isMute: true,
    isTalk: false
  },
  {
    name: 'Diana',
    isMute: true,
    isTalk: false
  },
  {
    name: 'Diana',
    isMute: true,
    isTalk: false
  },
  {
    name: 'Diana',
    isMute: true,
    isTalk: false
  },
  {
    name: 'Diana',
    isMute: true,
    isTalk: false
  },
];

const AudioRoom = ({ route }) => {
  const { title } = route.params;
  const [isRefreshing, startRefreshing] = useRefresh();
  const [isMute, setIsMute] = useState(false);
  const [isUserMute, setIsUserMute] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: '#F9F9F9', }}>

      <Layout style={[styles.root]}>
        <View style={[styles.container]}>
          {/* header */}
          <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={startRefreshing} />}>
            <View style={{}}>
              <View style={[styles.cardHeader]}>
                <Text style={{ marginRight: 10, color: '#6B7280', fontSize: 14 }}>Audio Room</Text>
                <Pressable onPress={() => setIsMute(!isMute)}>
                  {
                    isMute ?
                      <MuteIcon />
                      :
                      <UnMuteIcon />
                  }
                </Pressable>
              </View>
              <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 10 }}>{title}</Text>
            </View>
            {/* content */}
            <View >
              {/* Host */}
              <View style={{ marginTop: 40, }}>
                <Text style={{ color: '#aeaeae', fontSize: 14, }}>Host</Text>
                <View style={[styles.contentContainer]}>
                  {
                    dataHost.map(({ isMute, isTalk, name }, index) => (
                      <View key={index} >
                        <View style={[styles.imageContainer, isTalk ? styles.borderActive : styles.borderInActive]}>
                          <Image
                            style={[styles.image]}
                            source={{ uri: faker.image.avatar(640, 480, true) }}
                          />
                          <View style={[{ position: 'absolute', backgroundColor: '#eaeaea', borderRadius: 100, bottom: 0, right: 0 }]}>
                            {
                              isMute ?
                                <MicrophoneMuteIcon />
                                :
                                <MicrophoneIcon />
                            }
                          </View>
                        </View>
                        <Text style={{ textAlign: 'center' }}>{name}</Text>
                      </View>
                    ))
                  }
                </View>
              </View>
              {/* Followed By Speaker */}
              <View style={{ marginTop: 40, }}>
                <Text style={{ color: '#aeaeae', fontSize: 14 }}>Followed By Speaker</Text>
                <View style={[styles.contentContainer]}>
                  {
                    followedBySpeaker.map(({ isMute, isTalk, name }, index) => (
                      <View key={index} >
                        <View style={[styles.imageContainer, isTalk ? styles.borderActive : styles.borderInActive]}>
                          <Image
                            style={[styles.image]}
                            source={{ uri: faker.image.avatar(640, 480, true) }}
                          />
                          <View style={[{ position: 'absolute', backgroundColor: '#eaeaea', borderRadius: 100, bottom: 0, right: 0 }]}>
                            {
                              isMute ?
                                <MicrophoneMuteIcon />
                                :
                                <MicrophoneIcon />
                            }
                          </View>
                        </View>
                        <Text style={{ textAlign: 'center' }}>{name}</Text>
                      </View>
                    ))
                  }
                </View>
              </View>
              {/* Other */}
              <View style={{ marginTop: 40, }}>
                <Text style={{ color: '#aeaeae', fontSize: 14 }}>Other In Room</Text>
                <View style={[styles.contentContainer]}>
                  {
                    OtherInRoom.map(({ isMute, isTalk, name }, index) => (
                      <View key={index} >
                        <View style={[styles.imageContainer, isTalk ? styles.borderActive : styles.borderInActive]}>
                          <Image
                            style={[styles.image]}
                            source={{ uri: faker.image.avatar(640, 480, true) }}
                          />
                          <View style={[{ position: 'absolute', backgroundColor: '#eaeaea', borderRadius: 100, bottom: 0, right: 0 }]}>
                            {
                              isMute ?
                                <MicrophoneMuteIcon />
                                :
                                <MicrophoneIcon />
                            }
                          </View>
                        </View>
                        <Text style={{ textAlign: 'center' }}>{name}</Text>
                      </View>
                    ))
                  }
                </View>
              </View>
            </View>
          </ScrollView>
          {/* Footer */}
          <View style={{ padding: 10 }}>
            <View style={{ flexDirection: 'row', width: '100%', }}>
              <Button
                style={[styles.button, { flexGrow: 1 }]}
                size='large'
              >
                👋 Leave Quietly
              </Button>
              <Button
                style={[styles.button, styles.buttonRound, { flex: 1, backgroundColor: '#F9F9F9' }]}
                appearance='ghost'
                status='danger'
                accessoryLeft={isUserMute ? MicrophoneMuteIconLarge : MicrophoneIconLarge}
                onPress={() => setIsUserMute(!isUserMute)}
              />
              <Button
                style={[styles.button, styles.buttonRound, { flex: 1, backgroundColor: '#F9F9F9' }]}
                appearance='ghost'
                status='danger'
                accessoryLeft={PlusIconLarge}
              />
            </View>
          </View>
        </View>
      </Layout>

    </View >
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 5,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: '10%',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    height: '100%',
    marginTop: '10%',
  },
  icon: {
    width: 20,
    height: 20,
    color: '#6B7280'
  },
  iconLarge: {
    width: 28,
    height: 28,
    color: '#6B7280'
  },
  iconSmall: {
    width: 16,
    height: 16,
    color: '#6B7280'
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageContainer: {
    borderRadius: 100,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 10
  },
  borderActive: {
    borderWidth: 2,
    borderColor: '#2aba6f'
  },
  borderInActive: {
    borderWidth: 2,
    borderColor: '#aeaeae'
  },
  image: {
    borderRadius: 100,
    backgroundColor: 'orange',
    resizeMode: 'cover',
    width: '92%',
    height: '92%'
  },
  contentContainer: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  button: {
    margin: 2,
    borderRadius: 15
  },
  buttonRound: {
    borderRadius: 100
  }
});


export default AudioRoom;