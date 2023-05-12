import { View, Text } from 'react-native';
import React from 'react';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

const data = [
  {
    video: require('../assets/video/pexels-valeriya-kobzar-16070714-1080x1920-50fps.mp4'),
    title: 'coffe',
    description: 'this is coffe',
    likes: 200,
    isLike: false,
  },
  {
    video: require('../assets/video/pexels-valeriya-kobzar-16070714-1080x1920-50fps.mp4'),
    title: 'coffe',
    description: 'this is coffe',
    likes: 200,
    isLike: false,
  },
];

const SnapScreen = () => {
  return (
    <SwiperFlatList
    />
  );
};

export default SnapScreen;