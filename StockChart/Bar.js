import React from 'react';
import {Dimensions} from 'react-native';
import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';

const Bar = ({item, dotDetails}) => {
  const sendTappedDotDetails = () => {
    dotDetails(item.data[0]);
  };

  return (
    <View style={styles().flatListItem}>
      <TouchableOpacity style={styles(item.data[0], item.barColor).barView}></TouchableOpacity>
    </View>
  );
};

export default Bar;

const styles = (x, barColor) =>
  StyleSheet.create({
    flatListItem: {
      width: 34,
      backgroundColor: 'white',
    },
    mealImage: {
      marginTop: 0,
      height: 30,
      width: 30,
      alignSelf: 'center',
      backgroundColor: 'white',
      resizeMode: 'contain',
    },
    dotWithXaxis: {
      flex: 0.9,
      backgroundColor: 'white',
      marginHorizontal: 1,
    },

    barView: {
      height: 200,
      width: 19,
      top: ((Dimensions.get('window').width - 40) / 1000) * x,
      borderRadius: 14,
      alignSelf: 'center',
      justifyContent: 'flex-end',
      backgroundColor: barColor,
      position: 'absolute',
    },
    xAxisStyle: {
      height: 25,
      backgroundColor: 'white',
      marginBottom: 0,
    },
  });