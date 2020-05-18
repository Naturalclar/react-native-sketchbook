import {DefaultColorTheme, Color} from './colors';
import {DefaultFontSize, DefaultSpaceSize, FontSize, SpaceSize} from './size';

export type Theme = {
  colors: Record<'light' | 'dark', Colors>;
  fontSizes: Record<FontSize, number>;
  spaceSizes: Record<SpaceSize, number>;
};

export const DefaultTheme: Theme = {
  colors: DefaultColorTheme,
  fontSizes: DefaultFontSize,
  spaceSizes: DefaultSpaceSize,
} as const;

type Colors = Record<Color, string>;
