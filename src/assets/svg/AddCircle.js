import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Circle, Path, Svg} from 'react-native-svg';

const AddCircle = () => {
  const {dark} = useTheme();
  return (
    <Svg
      width="55"
      height="55"
      viewBox="0 0 55 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Circle
        cx="27.5"
        cy="27.5"
        r="27.5"
        fill={dark ? '#202020' : '#5B5B5B'}
      />
      <Path
        d="M27.5 20V35"
        stroke="#FAFAFA"
        stroke-width="3"
        stroke-linecap="round"
      />
      <Path
        d="M20 27.5021L35 27.5021"
        stroke="#FAFAFA"
        stroke-width="3"
        stroke-linecap="round"
      />
    </Svg>
  );
};

export default AddCircle;
