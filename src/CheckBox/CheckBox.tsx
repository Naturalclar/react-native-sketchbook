import * as React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {useColors} from '../Themes';
import {IconCheck} from '../Icons';
const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 2,
    width: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#555',
  },
  disabled: {
    opacity: 0.4,
  },
});

type Props = {
  onValueChange: (value: boolean) => void;
  disabled?: boolean;
  checked: boolean;
  color?: string;
};
export const CheckBox: React.FC<Props> = ({
  color,
  disabled,
  checked,
  onValueChange,
}) => {
  const {primaryColor, white} = useColors();
  const checkedColor = color || primaryColor;
  const handleValueChange = React.useCallback(() => {
    onValueChange(!checked);
  }, [checked, onValueChange]);

  return (
    <TouchableOpacity disabled={disabled} onPress={handleValueChange}>
      <View
        style={[
          styles.container,
          disabled && styles.disabled,
          checked && {borderColor: checkedColor, backgroundColor: checkedColor},
        ]}>
        {checked && <IconCheck color={white} />}
      </View>
    </TouchableOpacity>
  );
};
