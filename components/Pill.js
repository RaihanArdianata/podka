import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Text } from '@ui-kitten/components/ui';

const Pill = ({ text }) => {
  return (
    <View style={{ ...styles.pillWrapper, paddingHorizontal: 23, paddingVertical: 3, backgroundColor: '#fff', width: 'auto' }}>
      <Text category='s2'>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pillWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Pill;