import * as React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import {useColors} from '../Themes';

export type DividerProps = {
  size?: number;
  color?: string;
} & ViewProps;
export const Divider: React.FC<DividerProps> = ({
  size = 1,
  color,
  style,
  ...rest
}) => {
  const {borderColor} = useColors();
  const memoizedStyle = React.useMemo(
    () => [
      {
        height: size,
        backgroundColor: color ? color : borderColor,
      },
      StyleSheet.flatten(style),
    ],
    [size, style, borderColor, color],
  );
  return <View {...rest} style={memoizedStyle} />;
};
Divider.displayName = 'Divider';
