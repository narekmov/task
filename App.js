import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import AppNavigator from './src/navigation/AppNavigation';
import store from './src/store';
import {COLOR_4} from './src/constants/ui';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.root}>
        <StatusBar backgroundColor={COLOR_4} barStyle="light-content" />
        <AppNavigator />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
