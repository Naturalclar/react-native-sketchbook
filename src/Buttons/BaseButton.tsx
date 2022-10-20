import * as React from 'react';
import {Pressable, PressableProps, StyleSheet} from 'react-native';

type Props = {
  /**
   * Component to be displayed on the left side of the button
   */
  leadingComponent?: React.ReactNode;
  /**
   * Component to be displayed on the right side of the button
   */
  tailingComponent?: React.ReactNode;
} & PressableProps;

export const BaseButton: React.FC<React.PropsWithChildren<Props>> = React.memo(
  ({children, style = {}, leadingComponent, tailingComponent, ...rest}) => {
    return (
      <Pressable
        style={(state) => ({
          opacity: state.pressed ? 0.4 : 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          ...StyleSheet.flatten(style),
        })}
        accessibilityRole="button"
        {...rest}>
        {leadingComponent && leadingComponent}
        {children}
        {tailingComponent && tailingComponent}
      </Pressable>
    );
  },
);
BaseButton.displayName = 'BaseButton';
