import * as React from 'react';
import {PressableProps, StyleSheet} from 'react-native';
import {PressableOpacity} from 'src/Utils';

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
      <PressableOpacity
        style={(state) => ({
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
      </PressableOpacity>
    );
  },
);
BaseButton.displayName = 'BaseButton';
