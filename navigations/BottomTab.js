import { Button, Icon, Text } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import { View, Dimensions, StyleSheet, Platform, Keyboard } from 'react-native';

const { width } = Dimensions.get('window');

const ICON = {
  Home: "home",
  Search: "search",
  Profile: "person"
};

const StarIcon = (props) => (
  <Icon {...props} name='star' />
);


const BottomTab = ({ state, descriptors, navigation }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let keyboardEventListeners;
    if (Platform.OS === 'android') {
      keyboardEventListeners = [
        Keyboard.addListener('keyboardDidShow', () => setVisible(false)),
        Keyboard.addListener('keyboardDidHide', () => setVisible(true)),
      ];
    }
    return () => {
      if (Platform.OS === 'android') {
        keyboardEventListeners &&
          keyboardEventListeners.forEach(eventListener => eventListener.remove());
      }
    };
  }, []);

  if (!visible) return null;
  return (
    <View style={styles.mainContainer} justifyContent="center" alignItems="center">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <View key={index} style={[styles.mainItemContainer]}>
            <Button style={styles.button} appearance='ghost' status='danger' accessoryLeft={StarIcon} />
            {/* <Pressable
                            onPress={onPress}
                            style={{ backgroundColor: isFocused ? "transparent" : "transparent", borderRadius: 20, padding: 0, margin: 0 }}
                        >
                            <HStack style={{ justifyContent: 'center', alignItems: 'center', flex: 1, padding: 10 }}>
                                <Ionicons name={ICON[label]} style={{
                                    transform: [{
                                        scale: isFocused ? 0.80 : 1
                                    }]
                                }} size={24} color={isFocused ? "#dc2626" : "#000"} />
                                {isFocused && <PresenceTransition visible={isFocused} initial={{
                                    opacity: 0
                                }} animate={{
                                    opacity: 1,
                                    transition: {
                                        duration: 250
                                    }
                                }}>
                                    <Text fontWeight={"bold"} _dark={{ color: isFocused ? "white" : "white" }} _light={{ color: isFocused ? "#dc2626" : "white" }}>{label}</Text>
                                </PresenceTransition>}
                            </HStack>
                        </Pressable> */}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    backgroundColor: "transparent"
  },
  mainItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white",
    paddingVertical: 10
  },
  button: {
    margin: 2,
  },
});


export default BottomTab; 