import { StyleSheet, View } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { default as theme } from './custom-theme.json';
import { default as mapping } from './mapping.json';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNav from './navigations/BottomNav';
import { MaterialCommunityIconsIconsPack } from './components/Icons/material-community-icons-provider';
import StatusScreen from './screens/root/StatusScreen';
import AudioRoom from './screens/feature-room/AudioRoom';
import ProfileScreen from './screens/ProfileScreen';
import NotificationScreen from './screens/root/NotificationScreen';
import CalendarScreen from './screens/root/CalendarScreen';

// const MoreIcon = (props) => (
//   <Icon
//     style={styles.icon}
//     fill='#000'
//     name='more-horizontal-outline'
//   />
// );

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <IconRegistry icons={MaterialCommunityIconsIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }} customMapping={mapping}>
        <NavigationContainer >
          <Stack.Navigator initialRouteName={"HomeTabs"} screenOptions={{ headerShown: true }}>
            <Stack.Screen name="HomeTabs" component={BottomNav} options={{
              headerShown: false
            }} />
            <Stack.Screen name="Status" component={StatusScreen} options={{
              headerShown: false,
              animation: 'fade',
              config: {
                stiffness: 1000,
                damping: 500,
                mass: 3,
                overshootClamping: true,
                restDisplacementThreshold: 0.01,
                restSpeedThreshold: 0.01,
              },
            }} />
            <Stack.Screen name="AudioRoom" component={AudioRoom} options={{
              title: 'Audio Room',
              headerShown: true,
              animation: 'fade',
              config: {
                stiffness: 1000,
                damping: 500,
                mass: 3,
                overshootClamping: true,
                restDisplacementThreshold: 0.01,
                restSpeedThreshold: 0.01,
              },
            }} />
            <Stack.Screen name="Notification" component={NotificationScreen} options={{
              title: 'Notification',
              headerShown: true,
              animation: 'fade',
              config: {
                stiffness: 1000,
                damping: 500,
                mass: 3,
                overshootClamping: true,
                restDisplacementThreshold: 0.01,
                restSpeedThreshold: 0.01,
              },
            }} />
            <Stack.Screen name="Calendar" component={CalendarScreen} options={{
              title: 'Calendar',
              headerShown: true,
              animation: 'fade',
              config: {
                stiffness: 1000,
                damping: 500,
                mass: 3,
                overshootClamping: true,
                restDisplacementThreshold: 0.01,
                restSpeedThreshold: 0.01,
              },
            }} />
            {/* <Stack.Screen name="HomeTabs" component={BottomNavigation} /> */}
          </Stack.Navigator>
          {/* <BottomNavigation /> */}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    backgroundColor: 'blue'
  },
  icon: {
    width: 32,
    height: 32,
  },
});
