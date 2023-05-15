import { View, RefreshControl, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { useRefresh } from '../../components/useRefresh';
import { Calendar, Layout, RangeCalendar, Text } from '@ui-kitten/components';

const CalendarScreen = () => {
  const [isRefreshing, startRefreshing] = useRefresh();
  const [date, setDate] = useState(new Date());
  const [range, setRange] = useState({});

  return (
    <View style={[styles.root]}>
      <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={startRefreshing} style={{ paddingHorizontal: 10, marginVertical: 5 }} />}>
        <View style={{ paddingHorizontal: 24, marginTop: 30 }}>
          <Calendar
            date={date}
            onSelect={nextDate => setDate(nextDate)}
          />
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
  }
});

export default CalendarScreen;