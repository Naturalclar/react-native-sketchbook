import * as React from 'react';
import {RadioButtonContext, RadioButtonContextType} from './RadioButtonGroup';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {RadioButton} from './RadioButton';
import {Margin} from '../Utils';
import {useColors} from '../Themes';
import {Typography} from '../Typography';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

type Props = {
  value: string;
  color?: string;
  disabled?: boolean;
  label: string;
};

export const RadioButtonItem: React.FC<Props> = ({
  value,
  color,
  disabled,
  label,
}) => {
  const {disabledTextColor} = useColors();
  return (
    <RadioButtonContext.Consumer>
      {(context?: RadioButtonContextType) => {
        if (!context) {
          console.warn(
            'RadioButtonItem: No context found. Be sure to wrap your Radio Buttons inside RadioButton.Group',
          );
        }
        return (
          <TouchableOpacity
            disabled={disabled}
            onPress={() => context?.onValueChange(value)}>
            <View style={styles.container}>
              <RadioButton value={value} color={color} disabled={disabled} />
              <Margin size="xsmall" />
              <Typography color={disabled ? disabledTextColor : undefined}>
                {label}
              </Typography>
            </View>
          </TouchableOpacity>
        );
      }}
    </RadioButtonContext.Consumer>
  );
};
