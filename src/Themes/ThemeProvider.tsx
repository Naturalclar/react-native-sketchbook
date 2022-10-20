import React from 'react';
import {ColorSchemeName} from 'react-native';
import {DefaultTheme, Theme} from './theme';

type ThemeProp = {
  appearance: ColorSchemeName;
  theme: Theme;
};

const ThemeContext = React.createContext<ThemeProp>({
  appearance: 'light',
  theme: DefaultTheme,
});

const {Provider} = ThemeContext;

export const useTheme = () => {
  return React.useContext(ThemeContext).theme;
};

export const useAppearance = () => {
  return React.useContext(ThemeContext).appearance;
};

export const ThemeProvider: React.FC<
  React.PropsWithChildren<Partial<ThemeProp>>
> = ({appearance, theme = DefaultTheme, children}) => {
  return <Provider value={{appearance, theme}}>{children}</Provider>;
};

export const useColors = () => {
  const appearance = useAppearance();
  const {colors} = React.useContext(ThemeContext).theme;
  if (appearance === 'dark') {
    return colors.dark;
  }
  return colors.light;
};

export const useFontSizes = () => {
  const {fontSizes} = React.useContext(ThemeContext).theme;
  return fontSizes;
};

export const useSpaceSizes = () => {
  const {spaceSizes} = React.useContext(ThemeContext).theme;
  return spaceSizes;
};
