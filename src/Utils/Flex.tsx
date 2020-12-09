import * as React from 'react';
import {View, StyleSheet, ViewProps} from 'react-native';

const styles = StyleSheet.create({
  flex: {flex: 1},
});

/**
 * Flex
 * - A View Component with default style being flex:1
 */
export const Flex: React.FC<ViewProps> = ({style, ...rest}) => (
  <View style={[styles.flex, StyleSheet.flatten(style)]} {...rest} />
);
