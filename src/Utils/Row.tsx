import * as React from 'react';
import {View, StyleSheet, ViewProps, FlexStyle} from 'react-native';

const styles = StyleSheet.create({
  default: {
    flexDirection: 'row',
  },
});

type Props = {
  alignItems?: FlexStyle['alignItems'];
  justifyContent?: FlexStyle['justifyContent'];
  alignContent?: FlexStyle['alignContent'];
} & ViewProps;

/**
 * Row
 * - A View Component whose default flexDiretion is row
 */
export const Row: React.FC<Props> = ({
  style,
  alignItems,
  alignContent,
  justifyContent,
  ...rest
}) => {
  return (
    <View
      style={[
        styles.default,
        {alignItems, alignContent, justifyContent},
        StyleSheet.flatten(style),
      ]}
      {...rest}
    />
  );
};
