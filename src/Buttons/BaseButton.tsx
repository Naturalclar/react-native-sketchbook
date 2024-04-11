import * as React from 'react';
import {type PressableProps, type StyleProp, type ViewStyle, StyleSheet} from 'react-native';
import {PressableOpacity} from '../Utils';

type Props = {
  /**
   * Component to be displayed on the left side of the button
   */
  leadingComponent?: React.ReactNode;
  /**
   * Component to be displayed on the right side of the button
   */
  tailingComponent?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
} & PressableProps;

export const BaseButton: React.FC<React.PropsWithChildren<Props>> = React.memo(
  ({children, style, leadingComponent, tailingComponent, ...rest}) => {
    return (
      <PressableOpacity
        style={[styles.container, style]}
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
