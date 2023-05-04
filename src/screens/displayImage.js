import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    width: '100%',
    height: '70%',
    borderColor: '#ff9f80',
    borderWidth:5,
    borderRadius: 10
  }
});

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg',
        }}
      />
    </View>
  );
};

export default DisplayAnImage;