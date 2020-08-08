import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useColors} from '../Themes';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontalLine: {
    height: 4,
    position: 'absolute',
    transform: [{rotateZ: '-45deg'}],
    borderRadius: 1,
  },
  point: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    borderWidth: 1.5,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    width: 0,
    height: 0,
    borderRadius: 1,
    borderBottomLeftRadius: 0,
  },
});

type Props = {size?: number; color?: string};

export const IconPencil: React.FC<Props> = ({size = 16, color}) => {
  const {baseTextColor} = useColors();
  const iconColor = color || baseTextColor;
  return (
    <View style={[styles.container, {height: size, width: size}]}>
      <View
        style={[
          styles.horizontalLine,
          {
            width: size - 1,
            backgroundColor: iconColor,
          },
        ]}
      />
      <View
        style={[
          styles.point,
          {borderBottomColor: iconColor, borderLeftColor: iconColor},
        ]}
      />
    </View>
  );
};
