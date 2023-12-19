import {DarkTheme, DefaultTheme} from '@react-navigation/native';

const lightTheme = {
  primaryBackground: '#FAFAFB',
  secondaryBackground: '#FAFAFB',
  cardBackground: '#EAEAEA',
  cardSecondaryBg: '#F2F2F2',
  primaryText: '#3F3D56',
  secondaryText: '#3D3D4D',
  blacknWhite: '#1C1C1E',
  background: '#FAFAFA',
  icon: '#778392',
  white: '#FFFFFF',
  primaryBorder: '#E3E3E3',
};
const darkTheme = {
  primaryBackground: '#1C1C1E',
  secondaryBackground: '#000000',
  dashboardBackground: '#1C1C1E',
  cardSecondaryBg: '#2C2C2C',
  primaryText: '#FFFFFF',
  secondaryText: '#BFBFBF',
  blacknWhite: '#FFFFFF',
  background: '#202020',
  icon: '#778392',
  white: '#FFFFFF',
  cardBackground: '#3D3D3D',
  primaryBorder: '#454647',
};

export const getThemeObject = dark => {
  return {
    dark,
    colors: dark
      ? {
          ...DarkTheme.colors,
          ...darkTheme,
        }
      : {
          ...DefaultTheme,
          ...lightTheme,
        },
  };
};
