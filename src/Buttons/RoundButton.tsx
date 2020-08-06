import React from 'react';
import {StyleSheet} from 'react-native';
import {useColors} from '../Themes';
import {BaseButton} from './BaseButton';
import {Typography} from '../Typography';

type Props = {
  label: string;
  color?: string;
  textColor?: string;
  onPress: () => void;
  disabled?: boolean;
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
  },
  label: {
    fontSize: 24,
    fontWeight: '700',
  },
  disabled: {
    opacity: 0.4,
  },
});

export const RoundButton: React.FC<Props> = ({
  label,
  color,
  textColor = 'white',
  onPress,
  disabled = false,
}) => {
  const {primaryColor} = useColors();
  const backgroundColor = color ? color : primaryColor;
  return (
    <BaseButton
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.container,
        {backgroundColor},
        disabled ? styles.disabled : styles.container,
      ]}>
      <Typography style={styles.label} color={textColor}>
        {label}
      </Typography>
    </BaseButton>
  );
};
