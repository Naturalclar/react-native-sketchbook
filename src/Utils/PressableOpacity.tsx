import * as React from 'react';
import {Pressable, PressableProps, StyleProp, ViewStyle} from 'react-native';

type Props = {
  style?: StyleProp<ViewStyle>;
} & PressableProps;

export const PressableOpacity: React.FC<Props> = ({style, ...rest}) => {
  return (
    <Pressable
      style={(state) => [{opacity: state.pressed ? 0.4 : 1}, style]}
      {...rest}
    />
  );
};
