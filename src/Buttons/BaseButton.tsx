import * as React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

type Props = {
  leadingComponent?: React.ReactNode;
  tailingComponent?: React.ReactNode;
} & TouchableOpacityProps;

export const BaseButton: React.FC<Props> = ({
  onPress,
  onLongPress,
  children,
  style,
  leadingComponent,
  tailingComponent,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={[styles.container, style]}
      accessibilityRole="button">
      {leadingComponent && leadingComponent}
      {children}
      {tailingComponent && tailingComponent}
    </TouchableOpacity>
  );
};
