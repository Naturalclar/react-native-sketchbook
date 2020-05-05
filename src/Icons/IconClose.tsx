import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useColors} from '../Themes';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{rotateZ: '45deg'}],
  },
  horizontalLine: {height: 4, position: 'absolute'},
  verticalLine: {width: 4, position: 'absolute'},
});

type Props = {size?: number; color?: string};

export const IconClose: React.FC<Props> = ({size = 12, color}) => {
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
      <View
        style={[
          styles.verticalLine,
          {height: size, backgroundColor: iconColor},
        ]}
      />
    </View>
  );
};
