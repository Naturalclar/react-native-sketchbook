import type * as React from 'react';
import {Typography, type TypographyProps} from './Typography';
import {useFontSizes} from '../Themes';

export const Paragraph: React.FC<TypographyProps> = ({style, ...rest}) => {
  const {medium} = useFontSizes();
  return (
    <Typography
      style={style}
      size={medium}
      accessibilityRole={'text'}
      {...rest}
    />
  );
};
