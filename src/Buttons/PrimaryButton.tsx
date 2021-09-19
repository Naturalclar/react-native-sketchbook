import * as React from 'react';
import {StyleSheet} from 'react-native';
import {BaseButton} from './BaseButton';
import {useColors, useSpaceSizes} from '../Themes';
import {Typography} from '../Typography';

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
  },
  disabled: {
    opacity: 0.4,
  },
});

type Props = {
  /**
   * Callback to be called when the button is pressed
   */
  onPress: () => void;
  /**
   * Label to be displayed on the button
   */
  label: string;
  /**
   * Whether the button is disabled or not
   *
   */
  disabled?: boolean;
};

export const PrimaryButton: React.FC<Props> = ({onPress, label, disabled}) => {
  const {primaryColor, white} = useColors();
  const spaceSize = useSpaceSizes();
  return (
    <BaseButton
      style={[
        styles.container,
        {padding: spaceSize.medium, backgroundColor: primaryColor},
        disabled ? styles.disabled : styles.container,
      ]}
      onPress={onPress}>
      <Typography color={white}>{label}</Typography>
    </BaseButton>
  );
};
