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
  value: boolean;
  color?: string;
  label: string;
};
export const CheckBoxItem: React.FC<Props> = ({
  disabled,
  label,
  onValueChange,
  value,
  ...rest
}) => {
  const handleValueChange = React.useCallback(() => {
    onValueChange(!value);
  }, [value, onValueChange]);
  return (
    <TouchableOpacity onPress={handleValueChange} disabled={disabled}>
      <View style={styles.container}>
        <CheckBox
          {...rest}
          value={value}
          disabled={disabled}
          onValueChange={onValueChange}
        />
        <Margin size="xsmall" />
        <Typography>{label}</Typography>
      </View>
    </TouchableOpacity>
  );
};
