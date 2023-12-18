import {DarkTheme, DefaultTheme} from '@react-navigation/native';

const lightTheme = {
  primaryBackground: '#FAFAFB',
  secondaryBackground: '#FAFAFB',
  primaryText: '#3F3D56',
  secondaryText: '#3D3D4D',
  background: '#FFFFFF',
  icon: '#778392',
  white: '#FFFFFF',
  cardBackground: '#FFFFFF',
};
const darkTheme = {
  primaryBackground: '#1C1C1E',
  secondaryBackground: '#000000',
  dashboardBackground: '#1C1C1E',
  primaryText: '#FFFFFF',
  secondaryText: '#BFBFBF',
  background: '#000000',
  icon: '#778392',
  white: '#FFFFFF',
  cardBackground: '#1C1C1E',
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
