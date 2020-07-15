import React, {memo} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {COLOR_2, COLOR_4} from '../constants/ui';

function Product({image, price, name, addToBasket = () => false}) {
  return (
    <View style={styles.content}>
      <View style={styles.wrapper}>
        <View style={styles.root}>
          <Image source={{uri: image}} style={styles.image} />
          <View style={styles.infoWrapper}>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.text}>{price} $</Text>
          </View>
          <TouchableOpacity onPress={addToBasket} style={styles.button}>
            <Text style={styles.text}>Add to Basket</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

Product.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  addToBasket: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  content: {
    width: '50%',
    padding: 5,
  },
  wrapper: {
    paddingTop: '100%',
    position: 'relative',
    backgroundColor: COLOR_2,
    borderRadius: 10,
  },
  root: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    padding: 5,
  },
  image: {
    width: '100%',
    height: '50%',
    borderWidth: 3,
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
  infoWrapper: {
    flex: 1,
  },
  button: {
    backgroundColor: COLOR_4,
    borderRadius: 5,
    padding: 5,
    alignItems: 'center',
  },
});

export default memo(Product);
