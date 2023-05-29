import { StyleSheet } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { default as theme } from './custom-theme.json';
import { default as mapping } from './mapping.json';
import { MaterialCommunityIconsIconsPack } from './components/Icons/material-community-icons-provider';
import { Provider } from 'react-redux';
import store from './redux';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Main from './navigations/Main';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
dayjs.extend(relativeTime);

export default function App() {

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>{/* content */}
        <Provider store={store}>
          <IconRegistry icons={MaterialCommunityIconsIconsPack} />
          <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }} customMapping={mapping}>
            <Main />
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
