import { StyleSheet } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import HomeScreen from './screens/HomeScreen';
import { default as theme } from './custom-theme.json';
import { default as mapping } from './mapping.json';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }} customMapping={mapping}>
        <NavigationContainer >
          <Stack.Navigator initialRouteName={"HomeTabs"} screenOptions={{ headerShown: true }}>
            <Stack.Screen name="HomeTabs" component={HomeScreen} />
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
