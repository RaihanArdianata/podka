import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import { Text } from '@ui-kitten/components/ui';

const Pill = ({ text, action }) => {
  return (
    <TouchableWithoutFeedback action={action}>
      <View style={{ ...styles.pillWrapper, paddingHorizontal: 23, paddingVertical: 3, backgroundColor: '#fff', width: 'auto', borderRadius: 10 }}>
        <Text category='s2'>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
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