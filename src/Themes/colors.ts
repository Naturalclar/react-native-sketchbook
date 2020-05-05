export const lightTheme = {
  primaryColor: '#1400d3',
  secondaryColor: '#0fd402',
  tertiaryColor: '#00AAAA',
  negativeColor: '#d400a6',
  warningColor: '#ff8800',
  disabledColor: 'rgba(0,0,0,0.4)',
  overlay: 'rgba(0,0,0,0.4)',
  // TextColors
  baseTextColor: '#555',
  lightTextColor: '#aaa',
  disabledTextColor: '#ccc',
  // backgroundColors
  baseBackgroundColor: '#fff',
  dimBackgroundColor: '#eee',
  // Const Colors (limit to black and white)
  white: '#fff',
  black: '#000',
};

export const darkTheme = {
  ...lightTheme,
  baseTextColor: '#eee',
  lightTextColor: '#aaa',
  baseBackgroundColor: '#222',
  dimBackgroundColor: '#3d3d3d',
};

export const DefaultColorTheme = {
  light: lightTheme,
  dark: darkTheme,
} as const;

export type Color = keyof typeof lightTheme;
