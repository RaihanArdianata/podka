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
import NotificationScreen from './screens/NotificationScreen';
import CalendarScreen from './screens/CalendarScreen';
import HotPodScreen from './screens/HotPodScreen';
import Modal from './components/actionSheet';
import { Provider } from 'react-redux';
import store from './redux';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SearchScreen from './screens/SearchScreen';
import HeaderSearch from './navigations/HeaderSearch';
import LiveCamera from './components/LiveCamera';
import SpeakRequestScreen from './screens/SpeakRequestScreen';

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
      <GestureHandlerRootView style={{ flex: 1 }}>{/* content */}
        <Provider store={store}>
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
                <Stack.Screen name="HotPod" component={HotPodScreen} options={{
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
                <Stack.Screen name="SearchProfile" component={SearchScreen} options={{
                  headerShown: true,
                  animation: 'fade',
                  header: HeaderSearch,
                  config: {
                    stiffness: 1000,
                    damping: 500,
                    mass: 3,
                    overshootClamping: true,
                    restDisplacementThreshold: 0.01,
                    restSpeedThreshold: 0.01,
                  },
                }} />
                <Stack.Screen name="LiveCamera" component={LiveCamera} options={{
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
                <Stack.Screen name="SpeakRequest" component={SpeakRequestScreen} options={{
                  // headerShown: false,
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
              </Stack.Navigator>
              <Modal />
            </NavigationContainer>
          </ApplicationProvider>
        </Provider>
      </GestureHandlerRootView>
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
