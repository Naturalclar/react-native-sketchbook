import * as React from 'react';
import {Pressable, PressableProps, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

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

export const BaseButton: React.FC<Props> = ({
  children,
  style = {},
  leadingComponent,
  tailingComponent,
  ...rest
}) => {
  return (
    <Pressable
      style={(state) => ({
        opacity: state.pressed ? 0.4 : 1,
        ...StyleSheet.flatten(style),
      })}
      accessibilityRole="button"
      {...rest}>
      <View style={styles.container}>
        {leadingComponent && leadingComponent}
        {children}
        {tailingComponent && tailingComponent}
      </View>
    </Pressable>
  );
};
