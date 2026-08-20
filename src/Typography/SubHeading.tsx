import type * as React from 'react';
import {StyleSheet} from 'react-native';
import {useFontSizes} from '../Themes';
import {Typography, type TypographyProps} from './Typography';

const styles = StyleSheet.create({
  heading: {
    fontWeight: '600',
  },
});

export const SubHeading: React.FC<TypographyProps> = ({style, ...rest}) => {
  const {large} = useFontSizes();
  return (
    <Typography
      style={[styles.heading, style]}
      size={large}
      accessibilityRole={'header'}
      {...rest}
    />
  );
};
