import { View, RefreshControl, StyleSheet, ScrollView, Text as RNtext, Dimensions } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { useRefresh } from '../components/useRefresh';
import { Calendar, Layout, RangeCalendar, Text, Avatar, Button } from '@ui-kitten/components';
import _ from 'lodash';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { faker } from '@faker-js/faker';

const sampleData = [
  {
    title: 'Your Schedule Live',
    date: '2023-05-20T17:00:00.000Z',
    type: 0,
  },
  {
    title: 'Request for consultation',
    date: '2023-05-20T17:00:00.000Z',
    type: 1,
  },
];

const useCalendarState = (initialState = null) => {
  const [date, setDate] = useState(initialState);
  return { date, onSelect: setDate };
};

const filter = (date) => {
  return _.filter(sampleData, function (o) { return dayjs(date).format('DD-MM-YYYY') != dayjs(o.date).format('DD-MM-YYYY'); }).length > 0;
};

const now = new Date();
const yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

const CalendarScreen = () => {

  const [isRefreshing, startRefreshing] = useRefresh();
  const [selectedDate, setDate] = useState(new Date());
  const randomColor = (param) => Math.floor(Math.random() * 16777215 + param).toString(16);

  useEffect(() => {

  }, [selectedDate]);

  return (
    <View style={[styles.root]}>
      <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={startRefreshing} style={{ paddingHorizontal: 10, marginVertical: 5 }} />}>
        <Calendar
          date={selectedDate}
          onSelect={nextDate => setDate(nextDate)}
          style={[{ width: '100%', borderWidth: 0, marginBottom: 20 }]}
          renderDay={({ date, holiday, bounding, range }) => {
            const data = _.filter(sampleData, function (o) {
              return dayjs(dayjs(o.date)).isSame(dayjs(date), 'date');
            });

            return (
              <View className={`rounded-full ${dayjs(dayjs(selectedDate)).isSame(dayjs(date), 'date') && 'bg-blue-200'}`} style={[dayjs(dayjs(selectedDate)).isSame(dayjs(date), 'date') && styles.selectedDate, { flexDirection: 'column', flexGrow: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center' }]}>
                <Text style={[{ textAlign: 'center', }]}>{date.getDate()}</Text>
                <View className="gap-x-1" style={[{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }]}>
                  {
                    data.map((_, index) => {
                      return (
                        <View key={index} style={[styles.dot, { backgroundColor: `#${randomColor(index)}` }]}>
                        </View>
                      );
                    })
                  }
                </View>
              </View>
            );
          }}
        />
        <View className={[styles.detailContainer]}>
          {
            _.filter(sampleData, function (o) {
              return dayjs(dayjs(o.date)).isSame(dayjs(selectedDate), 'date');
            }).map(({ date, title, type }, index) => {
              return (
                <View key={index} style={[styles.profileContainer]}>
                  <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                    <Avatar
                      style={styles.avatar}
                      size='small'
                      source={{ uri: faker.image.avatar(250, 250, true) }}
                    />
                    <View style={[{ justifyContent: 'center' }]}>
                      <Text style={[styles.displayName]}>{faker.internet.userName()}</Text>
                      <Text style={[{ marginLeft: 10, fontSize: 12 }]}>{title}</Text>
                    </View>
                  </View>
                  <Button
                    style={[{ width: 100, color: 'blue' }]}
                    appearance='outline'
                    size='tiny'
                    status='primary'
                  >
                    <RNtext style={{ color: 'blue' }}>{type == 1 ? 'Help Now' : 'Live Now'}</RNtext>
                  </Button>
                </View>
              );
            })
          }

        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 16
  },
  selectedDate: {
    borderRadius: 100,
    color: '#3b82f6',
    borderColor: 'green',
  },
  dot: {
    borderWidth: 1,
    borderRadius: 100,
    height: 5,
    width: 5,
  },
  detailContainer: {
    marginTop: 20,
    flex: 1
  },
  detailWrapper: {
    display: 'flex',
    flexDirection: 'column',
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
});

export default CalendarScreen;