import { View, RefreshControl, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { useRefresh } from '../../components/useRefresh';
import { Calendar, Layout, RangeCalendar, Text } from '@ui-kitten/components';
import _ from 'lodash';
import dayjs from 'dayjs';
import { useEffect } from 'react';


const sampleData = [
  {
    title: 'Request Meeting',
    date: '2023-05-05T17:00:00.000Z',
  },
  {
    title: 'Request Meeting',
    date: '2023-05-05T17:00:00.000Z',
  },
];

const useCalendarState = (initialState = null) => {
  const [date, setDate] = useState(initialState);
  return { date, onSelect: setDate };
};

const filter = (date) => {
  // console.log(dayjs(date).format('DD-MM-YYYY'), dayjs(sampleData[0].date).format('DD-MM-YYYY'));
  return _.filter(sampleData, function (o) { return dayjs(date).format('DD-MM-YYYY') != dayjs(o.date).format('DD-MM-YYYY'); }).length > 0;
};

const now = new Date();
const yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

const CalendarScreen = () => {

  const [isRefreshing, startRefreshing] = useRefresh();
  const [selectedDate, setDate] = useState(new Date());
  const [range, setRange] = useState({});

  const minMaxCalendarState = useCalendarState();
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  return (
    <View style={[styles.root]}>
      <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={startRefreshing} style={{ paddingHorizontal: 10, marginVertical: 5 }} />}>
        <Calendar
          date={selectedDate}
          onSelect={nextDate => setDate(nextDate)}
          style={[{ width: '100%', borderBottomWidth: 0 }]}
          renderDay={({ date, holiday, bounding, range }) => {
            const data = _.filter(sampleData, function (o) {
              return dayjs(dayjs(o.date)).isSame(dayjs(date), 'date');
            });

            return (
              <View style={[data.length > 0 && styles.selectedDate, { flexDirection: 'column' }]}>
                <Text style={[{ textAlign: 'center' }]}>{date.getDate()}</Text>
                <View style={[{ flexDirection: 'row', flexGrow: 1, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 2, }]}>
                  {
                    data.map(() => {
                      return (
                        <View style={[styles.dot]}>
                        </View>
                      );
                    })
                  }
                </View>
              </View>
            );
          }}
        // filter={filter}
        // min={yesterday}
        // max={tomorrow}
        // {...minMaxCalendarState}
        />
        <View style={{ paddingHorizontal: 24, marginTop: 30 }}>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 16
  },
  selectedDate: {
    borderWidth: 1,
    backgroundColor: 'green'
  },
  dot: {
    borderWidth: 1,
    borderRadius: 100,
    borderColor: 'blue',
    backgroundColor: 'blue',
    height: 5,
    width: 5,
    // marginHorizontal: ,
  }
});

export default CalendarScreen;