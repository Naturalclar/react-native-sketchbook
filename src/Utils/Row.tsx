import * as React from 'react';
import {View, StyleSheet, ViewProps} from 'react-native';

const styles = StyleSheet.create({
  default: {
    flexDirection: 'row',
  },
});

/**
 * A View Component whose default flexDiretion is row
 */
export const Row: React.FC<ViewProps> = ({style, ...rest}) => {
  return <View style={[styles.default, style]} {...rest} />;
};
