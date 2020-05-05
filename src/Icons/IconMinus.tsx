import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useColors} from '../Themes';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontalLine: {height: 2, position: 'absolute'},
  verticalLine: {width: 2, position: 'absolute'},
});

type Props = {size?: number; color?: string};

export const IconMinus: React.FC<Props> = ({size = 16, color}) => {
  const {baseTextColor} = useColors();
  const iconColor = color || baseTextColor;
  return (
    <View style={[styles.container, {height: size, width: size}]}>
      <View
        style={[
          styles.horizontalLine,
          {
            width: size,
            backgroundColor: iconColor,
          },
        ]}
      />
    </View>
  );
};
