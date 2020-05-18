import * as React from 'react';
import {StyleSheet} from 'react-native';
import {BaseButton} from './BaseButton';
import {useColors, useSpaceSizes} from '../Themes';
import {Typography} from '../Typography';

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
  },
});

type Props = {
  onPress: () => void;
  label: string;
};

export const PrimaryButton: React.FC<Props> = ({onPress, label}) => {
  const {primaryColor, white} = useColors();
  const spaceSize = useSpaceSizes();
  return (
    <BaseButton
      style={[
        styles.container,
        {padding: spaceSize.medium, backgroundColor: primaryColor},
      ]}
      onPress={onPress}>
      <Typography color={white}>{label}</Typography>
    </BaseButton>
  );
};
