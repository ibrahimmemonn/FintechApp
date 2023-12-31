import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

const BurgerMenu = () => {
  const {colors} = useTheme();
  return (
    <Svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M15 26.25H1.875C0.84 26.25 0 25.41 0 24.375C0 23.34 0.84 22.5 1.875 22.5H15C16.035 22.5 16.875 23.34 16.875 24.375C16.875 25.41 16.035 26.25 15 26.25Z"
        fill={colors.blacknWhite}
      />
      <Path
        d="M28.125 7.53564H15C13.965 7.53564 13.125 6.69564 13.125 5.66064C13.125 4.62564 13.965 3.78564 15 3.78564H28.125C29.16 3.78564 30 4.62564 30 5.66064C30 6.69752 29.16 7.53564 28.125 7.53564Z"
        fill={colors.blacknWhite}
      />
      <Path
        d="M28.125 16.875H1.875C0.84 16.875 0 16.035 0 15C0 13.965 0.84 13.125 1.875 13.125H28.125C29.16 13.125 30 13.965 30 15C30 16.035 29.16 16.875 28.125 16.875Z"
        fill={colors.blacknWhite}
      />
    </Svg>
  );
};

export default BurgerMenu;
