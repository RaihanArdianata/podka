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
  const randomColor = (param) => Math.floor(Math.random() * 16777215 + param).toString(16);

  useEffect(() => {

  }, [selectedDate]);

  return (
    <View style={[styles.root]}>
      <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={startRefreshing} style={{ paddingHorizontal: 10, marginVertical: 5 }} />}>
        <Calendar
          date={selectedDate}
          onSelect={nextDate => setDate(nextDate)}
          style={[{ width: '100%', borderBottomWidth: 0, }]}
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
        // filter={filter}
        // min={yesterday}
        // max={tomorrow}
        // {...minMaxCalendarState}
        />
        <View className="bg-slate-100 h-1 w-screen" style={{ paddingHorizontal: 24, marginTop: 30 }}>
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
    borderRadius: 100,
    color: '#3b82f6',
    borderColor: 'green',
  },
  dot: {
    borderWidth: 1,
    borderRadius: 100,
    // borderColor: 'blue',
    // backgroundColor: 'blue',
    height: 5,
    width: 5,
    // marginHorizontal: ,
  }
});

export default CalendarScreen;