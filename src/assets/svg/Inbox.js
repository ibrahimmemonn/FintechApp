import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Circle, Path, Svg} from 'react-native-svg';

const Inbox = () => {
  const {colors} = useTheme();
  return (
    <Svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M27.873 2.12691C27.7547 2.00775 27.5771 1.96875 27.4189 2.02595L2.28556 11.1259C2.12176 11.1853 2.0091 11.3374 2.00043 11.5116C1.99176 11.6858 2.0884 11.8483 2.2457 11.9241L11.2963 16.2683L19.4716 10.2255C19.6718 10.0777 19.9227 10.3286 19.7745 10.5284L13.7321 18.7036L18.0762 27.7542C18.1486 27.9046 18.3007 27.9999 18.4667 27.9999C18.474 27.9999 18.481 27.9999 18.4883 27.9995C18.6625 27.9904 18.8146 27.8782 18.8744 27.7144L27.9744 2.58105C28.0312 2.42288 27.9918 2.24565 27.873 2.12691Z"
        fill={colors.blacknWhite}
      />
      <Circle cx="22" cy="19" r="4" fill="#EB001B" />
    </Svg>
  );
};

export default Inbox;
