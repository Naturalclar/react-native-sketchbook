import * as React from 'react';
import {StyleSheet, View, type ViewProps, type ViewStyle} from 'react-native';

type StackProps = {
  gap?: number;
  padding?: number;
  paddingHorizontal?: number;
  flex?: number;
  paddingVertical?: number;
  borderBottomWidth?: number;
  borderTopWidth?: number;
  borderRightWidth?: number;
  borderLeftWidth?: number;
  borderColor?: string;
  alignItems?: ViewStyle['alignItems'];
  justifyContent?: ViewStyle['justifyContent'];
  alignContent?: ViewStyle['alignContent'];
  alignSelf?: ViewStyle['alignSelf'];
} & ViewProps;
export const XStack = React.memo<StackProps>(
  ({
    gap,
    style,
    padding,
    paddingHorizontal,
    paddingVertical,
    borderBottomWidth,
    borderTopWidth,
    borderRightWidth,
    borderLeftWidth,
    borderColor,
    flex,
    justifyContent,
    alignItems,
    alignContent,
    alignSelf,
    ...rest
  }) => (
    <View
      style={StyleSheet.flatten([
        styles.flexRow,
        {
          gap,
          padding,
          flex,
          paddingHorizontal,
          paddingVertical,
          borderBottomWidth,
          borderTopWidth,
          borderRightWidth,
          borderLeftWidth,
          borderColor,
          justifyContent,
          alignItems,
        },
        style,
      ])}
      {...rest}
    />
  ),
);
XStack.displayName = 'XStack';
export const YStack = React.memo<StackProps>(
  ({
    gap,
    padding,
    style,
    paddingHorizontal,
    paddingVertical,
    flex,
    borderBottomWidth,
    borderTopWidth,
    borderRightWidth,
    borderLeftWidth,
    borderColor,
    justifyContent,
    alignItems,
    alignContent,
    alignSelf,
    ...rest
  }) => (
    <View
      style={StyleSheet.flatten([
        {
          gap,
          padding,
          flex,
          paddingHorizontal,
          paddingVertical,
          borderBottomWidth,
          borderTopWidth,
          borderRightWidth,
          borderLeftWidth,
          borderColor,
          justifyContent,
          alignItems,
        },
        style,
      ])}
      {...rest}
    />
  ),
);
YStack.displayName = 'YStack';

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
  },
});
