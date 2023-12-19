import React from 'react';
import {Text, View} from 'react-native';
import Logo from '../../assets/svg/Logo';

const SplashScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Logo />
      <Text
        style={{
          position: 'absolute',
          bottom: 1,
          fontSize: 10,
          marginBottom: 30,
        }}>
        © Copyright 2023 Ibrahim Memon
      </Text>
    </View>
  );
};

export default SplashScreen;
