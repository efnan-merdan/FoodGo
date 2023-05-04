import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    marginBottom:30
  },
  tinyLogo: {
    width: '100%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97cae5',
    borderColor: '#ff794d', 
    borderWidth:3,
    borderRadius: 10
  }
});

const DisplayImages = () => {
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

export default DisplayImages;