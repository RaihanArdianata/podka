import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import React, { useRef, useState } from 'react';
import { Carousel, Pagination } from 'react-native-snap-carousel';
import Banner from './Banner';

const carouselItems = [
  {
    title: "Aenean leo",
    body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    imgUrl: "https://picsum.photos/id/11/200/300",
  },
  {
    title: "In turpis",
    body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
    imgUrl: "https://picsum.photos/id/10/200/300",
  },
  {
    title: "Lorem Ipsum",
    body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
    imgUrl: "https://picsum.photos/id/12/200/300",
  },
];

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Banner image={item.imgUrl} />
      {/* <Image
        source={{ uri: item.imgUrl }}
        style={styles.image}
      />
      <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text> */}
    </View>
  );
};

export const SLIDER_WIDTH = Dimensions.get('window').width - (24 * 2);
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const CarouselCustom = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  return (
    <View style={{ position: 'relative', alignItems: 'center', }}>
      <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={ref}
        data={carouselItems}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={SLIDER_WIDTH}
        inactiveSlideShift={0}
        onSnapToItem={(index) => setActiveIndex(index)}
        useScrollView={true}
      />
      <View style={{ position: 'absolute', bottom: 0 }}>
        <Pagination
          dotsLength={carouselItems.length}
          activeDotIndex={activeIndex}
          carouselRef={ref}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            borderColor: '#aeaeae',
            borderWidth: 1,
            backgroundColor: 'white',
            shadowOffset: {
              width: 2, height: 2
            },
            shadowRadius: 10,
            shadowColor: '#333',

            marginTop: 2,
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'green',
    marginVertical: 24
    // borderRadius: 8,
    // width: ITEM_WIDTH,
    // paddingBottom: 40,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.29,
    // shadowRadius: 4.65,
    // elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 300,
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    // paddingLeft: 20,
    // paddingTop: 20
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
});

export default CarouselCustom;