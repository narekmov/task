import React, {memo} from 'react';
import {View, StyleSheet, ImageBackground, Text} from 'react-native';
import PropTypes from 'prop-types';
import {COLOR_2} from '../constants/ui';

function BasketItem({image, price, name, count}) {
  return (
    <View style={styles.root}>
      <View style={styles.infoWrapper}>
        <ImageBackground source={{uri: image}} style={styles.image} />
        <Text style={[styles.text, styles.name]}>{name}</Text>
        <Text style={styles.text}>{count}</Text>
      </View>
      <Text style={styles.text}>{price} $</Text>
    </View>
  );
}

BasketItem.propType = {
  image: PropTypes.string.isRequired(),
  name: PropTypes.string.isRequired(),
  price: PropTypes.number.isRequired(),
  count: PropTypes.number.isRequired(),
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: COLOR_2,
  },
  image: {
    width: 80,
    paddingTop: 40,
  },
  infoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    width: 100,
  },
  text: {
    fontSize: 16,
    color: 'white',
    padding: 10,
  },
});

export default memo(BasketItem);
