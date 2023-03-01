import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const DividerCustom = ({ style = { width: 1, } }) => {
  return (
    <View style={[styles.divider, style]}>

    </View>
  );
};

const styles = StyleSheet.create({
  divider: {
    backgroundColor: '#aeaeae',
    marginHorizontal: 10,
  }
});

export default DividerCustom;