import * as React from "react";
import { View, StyleSheet, type ViewProps, type FlexStyle } from "react-native";

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
  alignItems?: FlexStyle["alignItems"];
  justifyContent?: FlexStyle["justifyContent"];
  alignContent?: FlexStyle["alignContent"];
  alignSelf?: FlexStyle["alignSelf"];
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
XStack.displayName = "XStack";
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
YStack.displayName = "YStack";

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: "row",
  },
});
