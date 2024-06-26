import * as React from 'react';
import {View, StyleSheet, type ViewProps, type FlexStyle} from 'react-native';

type Props = {
  flex?: number;
  alignItems?: FlexStyle['alignItems'];
  justifyContent?: FlexStyle['justifyContent'];
} & ViewProps;

/**
 * Flex
 * - A View Component with default style being flex:1
 */
export const Flex: React.FC<Props> = React.memo(
  ({style, flex = 1, alignItems, justifyContent, ...rest}) => (
    <View
      style={[{flex, alignItems, justifyContent}, StyleSheet.flatten(style)]}
      {...rest}
    />
  ),
);

Flex.displayName = 'Flex';
