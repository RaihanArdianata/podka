import { View, Text, ScrollView, RefreshControl, StyleSheet } from 'react-native';
import React from 'react';
import { useEffect } from 'react';
import { useRefresh } from '../components/useRefresh';
import { CheckBox, Avatar, ButtonGroup, Button, Input, Icon } from '@ui-kitten/components';
import { useState } from 'react';
import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { matchSorter } from 'match-sorter';
import { isEmpty } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, setFilterUser, setUser } from '../redux/slices/sampleUserRequestSlice';
dayjs.extend(relativeTime);

const iconLens = (props) => {
  return (
    <Icon
      {...props}
      style={[{ color: '#000', width: 15, height: 15, }]}
      name='magnify'
    />
  );
};

const SpeakRequestScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { params } = route;
  const [value, setValue] = useState('');
  const [isRefreshing, startRefreshing] = useRefresh();
  const [selectedTime, setSelectedTime] = useState(0);
  const { user, filterUser } = useSelector(selectUser);

  useEffect(() => {
    navigation.setOptions({
      title: `${params.requestuser} Speak request`
    });
  }, []);

  useEffect(() => {
    if (isEmpty(value) && isEmpty(filterUser)) dispatch(setFilterUser(user));
  }, [value]);

  return (
    <View style={[styles.root]}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 20, marginVertical: 15 }} refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={startRefreshing} />}>
        <View style={[{ display: 'flex', alignItems: 'flex-start', marginBottom: 25 }]}>
          <Text style={[styles.textTitle]}>Time to talk</Text>
          <View
            style={styles.buttonGroup}
          >
            <Button
              appearance={selectedTime == 1 ? 'filled' : 'outline'}
              style={[{ borderRadius: 0, borderRightWidth: 0 }]}
              size='small'
              onPress={() => setSelectedTime(1)}
            >
              5 Minute
            </Button>
            <Button
              appearance={selectedTime == 2 ? 'filled' : 'outline'}
              style={[{ borderRadius: 0, borderRightWidth: 0 }]}
              size='small'
              onPress={() => setSelectedTime(2)}
            >
              10 Minute
            </Button>
            <Button
              appearance={selectedTime == 3 ? 'filled' : 'outline'}
              style={[{ borderRadius: 0, borderRightWidth: 0 }]}
              size='small'
              onPress={() => setSelectedTime(3)}
            >
              15 Minute
            </Button>
            <Button
              appearance={selectedTime == 0 ? 'filled' : 'outline'}
              style={[{ borderRadius: 0 }]}
              size='small'
              onPress={() => setSelectedTime(0)}
            >
              Free Talk
            </Button>
          </View>
        </View>
        <Text style={[styles.textTitle]}>Request user</Text>
        <Input
          size='small'
          value={value}
          placeholder='Find user'
          accessoryLeft={iconLens}
          onChangeText={nextValue => {
            setValue(nextValue);
            if (isEmpty(nextValue)) {
              return dispatch(setFilterUser(user));
            }
            return dispatch(setFilterUser(matchSorter(user, nextValue, { keys: ['userName'] })));
          }}
          style={{ marginBottom: 10 }}
        />
        {
          filterUser.map(({ id, image, isActive, userName, date }, index) => (
            <View key={index} style={[styles.profileContainer]}>
              <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                <Avatar
                  style={styles.avatar}
                  size='small'
                  source={{ uri: image }}
                />
                <View style={[{ justifyContent: 'center' }]}>
                  <Text style={[styles.displayName]}>{userName}</Text>
                  <Text style={[{ marginLeft: 10, fontSize: 12 }]}>{date}</Text>
                </View>
              </View>
              <CheckBox
                style={styles.checkbox}
                checked={isActive}
                onChange={nextChecked => {
                  let tmpUser = [...filterUser];
                  const i = tmpUser.findIndex(x => x.id == id);
                  const item = tmpUser.find(x => x.id == id);
                  tmpUser[i] = { ...item, isActive: nextChecked };
                  dispatch(setFilterUser(tmpUser));
                }}
              >
                {/* Active */}
              </CheckBox>
            </View>
          ))
        }
      </ScrollView >
    </View >
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  buttonGroup: {
    margin: 2,
    flexDirection: 'row'
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10
  },
  displayName: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 14
  },
  profileContainer: {
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  avatar: {
    borderWidth: 1,
    borderColor: '#ffffff'
  },
  checkbox: {
    margin: 2,
  },
});


export default SpeakRequestScreen;