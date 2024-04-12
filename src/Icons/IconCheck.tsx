import type * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {useColors} from '../Themes';

const styles = StyleSheet.create({
  icon: {
    transform: [{rotate: '-135deg'}],
    borderTopWidth: 2,
    borderLeftWidth: 2,
    position: 'absolute',
  },
});

type Props = {size?: number; color?: string};

export const IconCheck: React.FC<Props> = ({size = 16, color}) => {
  const {baseTextColor} = useColors();
  const iconColor = color || baseTextColor;
  const length = (size / 4) * Math.sqrt(2);

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
            height: length * 2,
            width: length,
            borderColor: iconColor,
            bottom: size / 4,
            left: (length * 7) / 8,
          },
        ]}
      />
    </View>
  );
};
