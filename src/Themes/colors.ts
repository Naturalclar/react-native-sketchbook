export const lightTheme = {
  primaryColor: '#1400d3',
  secondaryColor: '#0fd402',
  tertiaryColor: '#00AAAA',
  negativeColor: '#d400a6',
  warningColor: '#ff8800',
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
