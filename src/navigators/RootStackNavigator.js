import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AppNavigator from './AppNavigator';

const RootStack = createStackNavigator();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        cardOverlayEnabled: true,
        gestureEnabled: false,
        presentation: 'modal',
      }}>
      <RootStack.Screen
        name="App"
        component={AppNavigator}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
