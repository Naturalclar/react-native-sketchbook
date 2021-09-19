import * as React from 'react';
import {View} from 'react-native';
import {useColors} from '../Themes';

export type DividerProps = {
  size?: number;
  color?: string;
};
export const Divider: React.FC<DividerProps> = ({size = 1, color}) => {
  const {borderColor} = useColors();
  const style = React.useMemo(
    () => ({
      height: size,
      backgroundColor: color ? color : borderColor,
    }),
    [size, borderColor, color],
  );
  return <View style={style} />;
};
Divider.displayName = 'Divider';
