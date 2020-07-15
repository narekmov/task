import React, {useCallback, useMemo} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {COLOR_4, COLOR_3} from '../constants/ui';
import {useSelector} from 'react-redux';
import {BasketItem} from '../components';

function Basket() {
  const {basket} = useSelector(({basket}) => basket);

  const total = useMemo(() => {
    return basket.reduce(
      (acc, cur) => ({
        count: acc.count + cur.count,
        price: acc.price + cur.count * cur.product.price,
      }),
      {count: 0, price: 0},
    );
  }, [basket]);

  const renderItem = useCallback(
    ({item}) => (
      <BasketItem
        name={item.product.name}
        image={item.product.image}
        count={item.count}
        price={item.product.price}
      />
    ),
    [],
  );

  const keyExtractor = useCallback(item => item.product.id.toString(), []);

  return (
    <View style={styles.root}>
      <FlatList
        data={basket}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.scroll}
      />
      <View style={styles.footerWrapper}>
        <Text style={styles.text}>Total count: {total.count}</Text>
        <Text style={styles.text}>Total price: {total.price} $</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLOR_3,
  },
  scroll: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  footerWrapper: {
    height: 60,
    backgroundColor: COLOR_4,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: 'white',
    paddingHorizontal: 4,
    width: 140,
  },
});

export default Basket;
