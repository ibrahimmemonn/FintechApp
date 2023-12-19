import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigationWrapper from './BottomNavigationWrapper';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="BottomNavigation"
        component={BottomNavigationWrapper}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
