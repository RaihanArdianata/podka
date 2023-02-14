import { Image, View, } from 'react-native';
import React from 'react';
import { Card, Text } from '@ui-kitten/components';

const CardCustom = () => {
  const string = 'The Maldives, officially the Republic of Maldives, is a small country in South Asia,; located in the Arabian Sea of the Indian Ocean. It lies southwest of Sri Lanka and India, about 1, 000 kilometres(620 mi) from the Asian continent';
  return (
    <Card style={{ width: '48%', borderRadius: 10 }}>
      <Image
        source={require('../assets/1.png')}
      />
      <Text style={{ fontSize: 16 }} category='label'>Presiden</Text>
      <Text category='c2'>
        {string.length > 70 ? string.substring(0, 65).concat('...') : string}
      </Text>
    </Card>
  );
};

export default CardCustom;