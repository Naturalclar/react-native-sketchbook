import * as React from 'react';
import {StyleSheet, View, type ViewProps, type ViewStyle} from 'react-native';

const styles = StyleSheet.create({
  default: {
    flexDirection: 'row',
  },
});

type Props = {
  alignItems?: ViewStyle['alignItems'];
  justifyContent?: ViewStyle['justifyContent'];
  alignContent?: ViewStyle['alignContent'];
  alignSelf?: ViewStyle['alignSelf'];
  gap?: number;
} & ViewProps;

/**
 * Row
 * - A View Component whose default flexDiretion is row
 */
export const Row: React.FC<Props> = React.memo(
  ({
    style,
    alignItems,
    alignContent,
    justifyContent,
    alignSelf,
    gap,
    ...rest
  }) => {
    return (
      <View
        style={[
          styles.default,
          {alignItems, alignContent, justifyContent, alignSelf, gap},
          StyleSheet.flatten(style),
        ]}
        {...rest}
      />
    );
  },
);

Row.displayName = 'Row';
