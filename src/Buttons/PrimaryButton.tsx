import * as React from 'react';
import {StyleSheet} from 'react-native';
import {BaseButton} from './BaseButton';
import {marginSize, useColors} from '../Themes';
import {Typography} from '../Typography';

const styles = StyleSheet.create({
  container: {
    padding: marginSize.medium,
    borderRadius: 8,
  },
});

type Props = {
  onPress: () => void;
  label: string;
};

export const PrimaryButton: React.FC<Props> = ({onPress, label}) => {
  const {primaryColor, white} = useColors();
  return (
    <BaseButton
      style={[styles.container, {backgroundColor: primaryColor}]}
      onPress={onPress}>
      <Typography color={white}>{label}</Typography>
    </BaseButton>
  );
};
