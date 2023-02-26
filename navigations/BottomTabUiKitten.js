import { View, Text } from 'react-native';
import React from 'react';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';

const BottomTabUiKitten = ({ navigation, state }) => {
  return (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab title='Home' />
      <BottomNavigationTab title='Search' />
      <BottomNavigationTab title='Store' />
    </BottomNavigation>
  );
};

export default BottomTabUiKitten;