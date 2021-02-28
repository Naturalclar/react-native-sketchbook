import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {useColors} from '../Themes';

export type TypographyProps = {
  color?: string;
  size?: number;
  bold?: boolean;
} & TextProps;

const styles = StyleSheet.create({
  bold: {
    fontWeight: '700',
  },
});

export const Typography: React.FC<TypographyProps> = ({
  color,
  size,
  bold,
  style,
  ...rest
}) => {
  const {baseTextColor} = useColors();
  const textColor = color ? color : baseTextColor;
  return (
    <Text
      style={[
        {
          color: textColor,
        },
        bold ? styles.bold : null,
        size
          ? {
              fontSize: size,
            }
          : null,
        style,
      ]}
      {...rest}
    />
  );
};
