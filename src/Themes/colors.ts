export const lightTheme = {
  primaryColor: 'rgb(20,132,255)',
  secondaryColor: 'rgb(48,209,88)',
  tertiaryColor: 'rgb(94,92,230)',
  negativeColor: 'rgb(255,55,95)',
  warningColor: 'rgb(255,159,10)',
  disabledColor: 'rgba(0,0,0,0.4)',
  overlay: 'rgba(0,0,0,0.4)',
  // TextColors
  baseTextColor: '#222',
  disabledTextColor: '#ccc',
  // backgroundColors
  baseBackgroundColor: '#eee',
  // Const Colors (limit to black and white)
  white: '#fff',
  black: '#000',
};

export const darkTheme = {
  ...lightTheme,
  baseTextColor: '#eee',
  baseBackgroundColor: '#222',
};

export const DefaultTheme = {
  light: lightTheme,
  dark: darkTheme,
};

export type Color = keyof typeof lightTheme;
