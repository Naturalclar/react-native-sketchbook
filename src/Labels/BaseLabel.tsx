import * as React from 'react';
import {StyleSheet, View, ViewProps, TouchableOpacity} from 'react-native';
import {IconClose} from '../Icons';
import {Margin} from '../Utils';
import {useColors, useSpaceSizes} from '../Themes';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 10,
  },
});

type Props = {
  leadingComponent?: React.ReactNode;
  tailingComponent?: React.ReactNode;
  onAction?: () => void;
  color?: string;
} & ViewProps;

export const BaseLabel: React.FC<Props> = ({
  children,
  leadingComponent,
  tailingComponent,
  onAction,
  style,
  color,
  ...rest
}) => {
  const {dimBackgroundColor, lightTextColor} = useColors();
  const labelColor = color || dimBackgroundColor;
  const spaceSize = useSpaceSizes();
  return (
    <View
      style={[
        styles.container,
        {
          paddingHorizontal: spaceSize.small,
          paddingVertical: spaceSize.xsmall,
          backgroundColor: labelColor,
        },
        style,
      ]}
      {...rest}>
      {leadingComponent && (
        <>
          {leadingComponent}
          <Margin size={'xsmall'} />
        </>
      )}
      {children}
      {tailingComponent && (
        <>
          <Margin size={'xsmall'} />
          {tailingComponent}
        </>
      )}
      {onAction && (
        <>
          <Margin size={'xsmall'} />
          <TouchableOpacity onPress={onAction}>
            <IconClose color={lightTextColor} />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};
