export const DefaultFontSize = {
  xxsmall: 8,
  xsmall: 10,
  small: 14,
  medium: 16,
  large: 20,
  xlarge: 24,
  xxlarge: 40,
} as const;

export type FontSize = keyof typeof DefaultFontSize;

export const DefaultSpaceSize = {
  none: 0,
  xxsmall: 2,
  xsmall: 4,
  small: 8,
  medium: 16,
  large: 24,
  xlarge: 32,
  xxlarge: 48,
} as const;

export type SpaceSize = keyof typeof DefaultSpaceSize;
