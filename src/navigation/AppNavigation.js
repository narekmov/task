import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './StackNavigator';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator initialRouteName="Home" />
    </NavigationContainer>
  );
};

export default AppNavigator;
