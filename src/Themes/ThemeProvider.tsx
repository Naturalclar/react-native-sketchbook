import React from 'react';
import {ColorSchemeName} from 'react-native';
import {DefaultTheme} from './colors';

type Colors = Record<string, string>;

type ThemeProp = {
  theme: ColorSchemeName;
  colors: Record<'light' | 'dark', Colors>;
};

const ThemeContext = React.createContext<ThemeProp>({
  theme: 'light',
  colors: DefaultTheme,
});

const {Provider} = ThemeContext;

export const useTheme = () => {
  return React.useContext(ThemeContext).theme;
};

export const ThemeProvider: React.FC<Partial<ThemeProp>> = ({
  theme,
  colors = DefaultTheme,
  children,
}) => {
  return <Provider value={{theme, colors}}>{children}</Provider>;
};

export const useColors = () => {
  const theme = useTheme();
  const colors = React.useContext(ThemeContext).colors;
  if (theme === 'dark') {
    return colors.dark;
  }
  return colors.light;
};
