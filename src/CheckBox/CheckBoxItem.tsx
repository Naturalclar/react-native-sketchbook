import * as React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {CheckBox} from './CheckBox';
import {Margin} from '../Utils';
import {Typography} from '../Typography';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

type Props = {
  onValueChange: (value: boolean) => void;
  disabled?: boolean;
  checked: boolean;
  color?: string;
  label: string;
};
export const CheckBoxItem: React.FC<Props> = ({
  disabled,
  label,
  onValueChange,
  checked,
  ...rest
}) => {
  const handleValueChange = React.useCallback(() => {
    onValueChange(!checked);
  }, [checked, onValueChange]);
  return (
    <TouchableOpacity onPress={handleValueChange} disabled={disabled}>
      <View style={styles.container}>
        <CheckBox
          {...rest}
          checked={checked}
          disabled={disabled}
          onValueChange={onValueChange}
        />
        <Margin size="xsmall" />
        <Typography>{label}</Typography>
      </View>
    </TouchableOpacity>
  );
};
