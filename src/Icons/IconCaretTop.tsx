import type * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {useColors} from '../Themes';

const styles = StyleSheet.create({
  icon: {
    transform: [{rotate: '45deg'}],
    borderTopWidth: 2,
    borderLeftWidth: 2,
    position: 'absolute',
  },
});

type Props = {size?: number; color?: string};

export const IconCaretTop: React.FC<Props> = ({size = 16, color}) => {
  const {baseTextColor} = useColors();
  const iconColor = color || baseTextColor;
  const length = (size / 2) * Math.sqrt(2);
  return (
    <View
      style={[
        {
          height: size,
          width: size,
        },
      ]}>
      <View
        style={[
          styles.icon,
          {
            height: length,
            width: length,
            borderColor: iconColor,
            top: size / 4,
          },
        ]}
      />
    </View>
  );
};
