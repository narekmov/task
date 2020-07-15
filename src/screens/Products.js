import React, {useCallback, useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import {COLOR_3} from '../constants/ui';
import {Product} from '../components';
import {useDispatch, useSelector} from 'react-redux';
import {addProducts, reset} from '../actions/products';
import {addToBasket} from '../actions/basket';

function Products() {
  const [page, setPage] = useState(0);
  const {products, isLoading, isLastPage} = useSelector(
    ({products}) => products,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  useEffect(() => {
    dispatch(addProducts(page));
  }, [dispatch, page]);

  const handelAddToBasket = useCallback(
    item => {
      dispatch(addToBasket(item));
    },
    [dispatch],
  );

  const renderProduct = useCallback(
    ({item}) => (
      <Product
        image={item.image}
        price={item.price}
        name={item.name}
        addToBasket={() => handelAddToBasket(item)}
      />
    ),
    [handelAddToBasket],
  );

  const keyExtractor = useCallback(item => item.id.toString(), []);

  const handleEndReached = useCallback(() => {
    if (!isLoading && !isLastPage) {
      setPage(p => p + 1);
    }
  }, [isLastPage, isLoading]);

  const renderFooterComponent = useCallback(() => {
    if (isLoading) {
      return <ActivityIndicator size="large" />;
    }
    return null;
  }, [isLoading]);

  return (
    <View style={styles.root}>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.scroll}
        numColumns={2}
        ListFooterComponent={renderFooterComponent}
        onEndReachedThreshold={0.8}
        onEndReached={handleEndReached}
      />
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
});

export default Products;
