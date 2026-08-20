import type * as React from 'react';
import {StyleSheet} from 'react-native';
import {useFontSizes} from '../Themes';
import {Typography, type TypographyProps} from './Typography';

const styles = StyleSheet.create({
  heading: {
    fontWeight: '700',
  },
});

export const Heading: React.FC<TypographyProps> = ({style, ...rest}) => {
  const {xlarge} = useFontSizes();
  return (
    <Typography
      style={[styles.heading, style]}
      size={xlarge}
      accessibilityRole={'header'}
      {...rest}
    />
  );
};
