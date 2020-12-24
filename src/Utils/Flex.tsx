import * as React from 'react';
import {View, StyleSheet, ViewProps} from 'react-native';

type Props = {
  flex?: number;
} & ViewProps;

/**
 * Flex
 * - A View Component with default style being flex:1
 */
export const Flex: React.FC<Props> = ({style, flex = 1, ...rest}) => (
  <View style={[{flex}, StyleSheet.flatten(style)]} {...rest} />
);
