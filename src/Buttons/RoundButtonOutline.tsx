import React from 'react';
import {StyleSheet} from 'react-native';
import {useColors} from '../Themes';
import {BaseButton} from './BaseButton';
import {Typography} from '../Typography';

type Props = {
  label: string;
  color?: string;
  onPress: () => void;
  disabled?: boolean;
};

const styles = StyleSheet.create({
  container: {
    padding: 14,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
  },
  label: {
    fontWeight: '500',
  },
  disabled: {
    opacity: 0.4,
  },
});

export const RoundButtonOutline: React.FC<Props> = ({
  color,
  onPress,
  disabled = false,
}) => {
  const {primaryColor} = useColors();
  const buttonColor = color ? color : primaryColor;
  return (
    <BaseButton
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.container,
        {borderColor: buttonColor},
        disabled ? styles.disabled : null,
      ]}>
      <Typography style={styles.label} color={buttonColor}>
        "Tech Stand 最高"
      </Typography>
    </BaseButton>
  );
};
