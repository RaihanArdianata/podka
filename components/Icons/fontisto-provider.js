import Icon from 'react-native-vector-icons/Fontisto';
import { StyleSheet } from 'react-native';

export const FontistoIconsPack = {
  name: 'fontisto',
  icons: createIconsMap(),
};

function createIconsMap() {
  return new Proxy({}, {
    get(target, name) {
      return IconProvider(name);
    },
  });
}

const IconProvider = (name) => ({
  toReactElement: (props) => FontistoIcon({ name, ...props }),
});

function FontistoIcon({ name, style }) {
  const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
  return (
    <Icon name={name} size={height} color={tintColor} style={iconStyle} />
  );
}