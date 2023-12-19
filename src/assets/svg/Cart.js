import React from 'react';
import {Path, Svg} from 'react-native-svg';

const Cart = () => {
  return (
    <Svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6 2L2 6.8V23.6C2 24.9255 3.19391 26 4.66667 26H23.3333C24.8061 26 26 24.9255 26 23.6V6.8L22 2H6Z"
        stroke="#202020"
        stroke-width="2.28571"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M2 7.14258H24.71"
        stroke="#202020"
        stroke-width="2.28571"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18.5714 12.2857C18.5714 14.8104 16.5247 16.8571 14 16.8571C11.4753 16.8571 9.42856 14.8104 9.42856 12.2857"
        stroke="#202020"
        stroke-width="2.28571"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Cart;
