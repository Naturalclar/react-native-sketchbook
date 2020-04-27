import React from 'react';
import {Text, TextProps} from 'react-native';
import {useColors} from '../Themes';

export type TypographyProps = {
  color?: string;
  size?: number;
} & TextProps;

export const Typography: React.FC<TypographyProps> = ({
  color,
  size,
  style,
  ...rest
}) => {
  const {baseTextColor} = useColors();
  const textColor = color ? color : baseTextColor;
  return (
    <Text
      style={[
        style,
        {
          color: textColor,
        },
        size
          ? {
              fontSize: size,
            }
          : null,
      ]}
      {...rest}
    />
  );
};
