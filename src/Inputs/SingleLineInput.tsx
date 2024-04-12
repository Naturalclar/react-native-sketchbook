import type * as React from 'react';
import {useCallback, useRef, useState} from 'react';
import {
  TextInput,
  StyleSheet,
  type TextInputProps,
  View,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native';
import {IconPencil} from '../Icons';
import {Margin} from '../Utils';
import {useFontSizes, useColors} from '../Themes';
import {Typography} from '../Typography';
const styles = StyleSheet.create({
  label: {
    fontSize: 14,
  },
  labelContainer: {
    flexDirection: 'row',
  },
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    paddingLeft: 32,
    paddingBottom: 8,
    flex: 1,
  },
  icon: {
    position: 'absolute',
    bottom: 12,
    left: 4,
  },
});

type Props = {
  label: string;
  color?: string;
  errorMessage?: string;
  unit?: string;
} & TextInputProps;

export const SingleLineInput: React.FC<Props> = ({
  label,
  color,
  errorMessage = '',
  value,
  style,
  unit,
  ...rest
}: Props) => {
  const InputRef = useRef<TextInput>(null);
  const handleFocus = useCallback(() => {
    if (InputRef) {
      InputRef.current?.focus();
    }
  }, []);
  const [isFocused, setFocus] = useState(false);
  const setAnimation = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };
  const fontSize = useFontSizes();
  const {baseTextColor, warningColor} = useColors();
  const baseColor = color || baseTextColor;
  return (
    <View>
      <View style={styles.labelContainer}>
        <Typography style={[styles.label, {color: baseColor}]}>
          {label}
        </Typography>
        <Margin size="small" />
        <Typography style={[styles.label, {color: warningColor}]}>
          {errorMessage}
        </Typography>
      </View>
      <Margin size="small" />
      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.input,
            {
              color: baseTextColor,
              fontSize: fontSize.medium,
              borderBottomColor: errorMessage ? warningColor : baseColor,
              borderBottomWidth: isFocused
                ? StyleSheet.hairlineWidth * 2
                : StyleSheet.hairlineWidth,
            },
            style,
          ]}
          value={value}
          ref={InputRef}
          onFocus={() => {
            setAnimation();
            setFocus(true);
          }}
          onBlur={() => {
            setFocus(false);
          }}
          {...rest}
        />
        {unit ? (
          <>
            <Margin size="xsmall" />
            <Typography>{unit}</Typography>
          </>
        ) : null}
      </View>
      <TouchableOpacity style={styles.icon} onPress={handleFocus}>
        <IconPencil color={baseColor} />
      </TouchableOpacity>
    </View>
  );
};
