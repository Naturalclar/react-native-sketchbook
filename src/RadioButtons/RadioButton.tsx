import * as React from 'react';
import {
  RadioButtonGroup,
  RadioButtonContext,
  RadioButtonContextType,
} from './RadioButtonGroup';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {useColors} from '../Themes';

type Props = {
  value: string;
  color?: string;
  disabled?: boolean;
};

const styles = StyleSheet.create({
  outerCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    padding: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});

export const RadioButton: React.FC<Props> & {
  Group: typeof RadioButtonGroup;
} = ({value, color, disabled}) => {
  const {primaryColor, disabledTextColor} = useColors();
  const buttonColor = disabled ? disabledTextColor : color || primaryColor;
  return (
    <RadioButtonContext.Consumer>
      {(context?: RadioButtonContextType) => {
        if (!context) {
          console.warn(
            'RadioButton: No context found. Be sure to wrap your Radio Buttons inside RadioButton.Group',
          );
        }
        const checked = context?.value === value;

        return (
          <TouchableOpacity
            disabled={disabled}
            onPress={() => context?.onValueChange(value)}>
            <View style={[styles.outerCircle, {borderColor: buttonColor}]}>
              {checked && (
                <View
                  style={[
                    styles.innerCircle,
                    {
                      backgroundColor: buttonColor,
                    },
                  ]}
                />
              )}
            </View>
          </TouchableOpacity>
        );
      }}
    </RadioButtonContext.Consumer>
  );
};

RadioButton.Group = RadioButtonGroup;
