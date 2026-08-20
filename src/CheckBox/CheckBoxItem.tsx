import * as React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Typography} from '../Typography';
import {Margin} from '../Utils';
import type {CheckBoxProps} from './CheckBox';
import {CheckBox} from './CheckBox';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

type Props = CheckBoxProps & {
  /**
   * Color of label
   */
  textColor?: string;
  /**
   * Text Label for checkbox
   */
  label: string;
};
export const CheckBoxItem: React.FC<Props> = ({
  label,
  onValueChange,
  textColor,
  checked,
  disabled,
  ...rest
}) => {
  const handleValueChange = React.useCallback(() => {
    onValueChange(!checked);
  }, [checked, onValueChange]);
  return (
    <Pressable onPress={handleValueChange} disabled={disabled}>
      <View style={styles.container}>
        <CheckBox
          checked={checked}
          disabled={disabled}
          onValueChange={onValueChange}
          {...rest}
        />
        <Margin size="xsmall" />
        <Typography color={textColor}>{label}</Typography>
      </View>
    </Pressable>
  );
};
