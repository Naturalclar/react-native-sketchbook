import * as React from 'react';
import {View, StyleSheet, ViewProps} from 'react-native';

const styles = StyleSheet.create({
  flex: {flex: 1},
});

/**
 * Component with flex:1 style property
 */
export const Flex: React.FC<ViewProps> = ({children, style, ...rest}) => (
  <View style={[styles.flex, StyleSheet.flatten(style)]} {...rest}>
    {children}
  </View>
);
