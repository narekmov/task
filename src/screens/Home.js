import React, {useState, useCallback} from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {Products, Basket} from '../screens';
import {COLOR_1, COLOR_4} from '../constants/ui';

function Home() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'products', title: 'Products'},
    {key: 'basket', title: 'Basket'},
  ]);

  const renderScene = SceneMap({
    products: Products,
    basket: Basket,
  });

  const renderLabel = useCallback(
    ({route, focused}) => (
      <Text style={[styles.label, focused ? styles.focused : {}]}>
        {route.title}
      </Text>
    ),
    [],
  );

  const renderTabBar = useCallback(
    props => (
      <View style={styles.tabContainer}>
        <TabBar
          {...props}
          indicatorStyle={styles.indicatorStyle}
          style={styles.tabBar}
          renderLabel={renderLabel}
          scrollEnabled
        />
      </View>
    ),
    [renderLabel],
  );

  return (
    <View style={styles.root}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: Dimensions.get('window').width}}
        renderTabBar={renderTabBar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  indicatorStyle: {
    height: 0,
  },
  label: {
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 5,
    width: '100%',
    color: 'white',
  },
  focused: {
    backgroundColor: COLOR_1,
  },
  tabBar: {
    backgroundColor: COLOR_4,
    shadowOpacity: 0,
    elevation: 0,
    shadowColor: 'transparent',
  },
});

export default Home;
