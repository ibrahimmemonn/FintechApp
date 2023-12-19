import {DarkTheme, DefaultTheme} from '@react-navigation/native';

const lightTheme = {
  primaryBackground: '#FAFAFB',
  secondaryBackground: '#FAFAFB',
  cardBackground: '#fff',
  cardSecondaryBg: '#FFFFFF',
  primaryText: '#3F3D56',
  secondaryText: '#3D3D4D',
  blacknWhite: '#1C1C1E',
  background: '#F2F6F7',
  icon: '#778392',
  white: '#FFFFFF',
  primaryBorder: '#E3E3E3',
  headerBackground: '#FFFFFF',
};
const darkTheme = {
  primaryBackground: '#1C1C1E',
  secondaryBackground: '#000000',
  dashboardBackground: '#1C1C1E',
  cardSecondaryBg: '#202020',
  primaryText: '#FFFFFF',
  secondaryText: '#BFBFBF',
  blacknWhite: '#FFFFFF',
  background: '#111',
  icon: '#778392',
  white: '#FFFFFF',
  cardBackground: '#2C2C2C',
  primaryBorder: '#454647',
  headerBackground: '#000000',
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
