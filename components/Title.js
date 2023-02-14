import { Text } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';

const Title = () => {
  return (
    <View>
      <Text category='h4'>Lemabaga Negara</Text>
      <Text category='p2' style={styles.textSubtitle}>Mengenal lembaga NKRI</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textSubtitle: {
    color: '#A5A5A5'
  }
});

export default Title;
