import 'react-native-gesture-handler';
import React, {useEffect, useRef, useState} from 'react';
import {Appearance} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {getThemeObject} from '../theme/Theme';
import Login from '../screens/Home';
import {useSelector} from 'react-redux';
import SplashScreen from '../screens/splash/SplashScreen';
import RootStackNavigator from './RootStackNavigator';

const Stack = createStackNavigator();

const Navigation = () => {
  const dark = useSelector(state => state.app.dark);
  const [showSplash, setShowSplash] = useState(true);
  const isDarkMode = Appearance.getColorScheme() === 'dark';
  const [theme, setTheme] = useState(getThemeObject(dark));
  const changeTheme = isDarkMode => {
    // 0 means default , 1 means light, 2 means dark
    setTheme(
      getThemeObject(
        dark == '2'
          ? true
          : dark == '1'
          ? false
          : dark == '0'
          ? isDarkMode
          : false,
      ),
    );
  };
  useEffect(() => {
    changeTheme(isDarkMode);
    const init = async () => {
      setTimeout(() => setShowSplash(false), 1 * 1000);
    };
    init();
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  } else
    return (
      <NavigationContainer theme={theme}>
        <RootStackNavigator />
      </NavigationContainer>
    );
};

export default Navigation;
