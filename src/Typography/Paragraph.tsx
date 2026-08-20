import type * as React from 'react';
import {useFontSizes} from '../Themes';
import {Typography, type TypographyProps} from './Typography';

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
