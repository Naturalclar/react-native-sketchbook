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
  value: boolean;
  color?: string;
};
export const CheckBox: React.FC<Props> = ({
  color,
  disabled,
  value,
  onValueChange,
}) => {
  const {primaryColor, white} = useColors();
  const checkedColor = color || primaryColor;
  const handleValueChange = React.useCallback(() => {
    onValueChange(!value);
  }, [value, onValueChange]);

  return (
    <TouchableOpacity disabled={disabled} onPress={handleValueChange}>
      <View
        style={[
          styles.container,
          disabled && styles.disabled,
          value && {borderColor: checkedColor, backgroundColor: checkedColor},
        ]}>
        {value && <IconCheck color={white} />}
      </View>
    </TouchableOpacity>
  );
};
