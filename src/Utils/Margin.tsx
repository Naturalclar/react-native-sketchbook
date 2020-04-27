import React from 'react';
import {View} from 'react-native';
import {MarginSize, marginSize} from '../Themes';

type Props = {
  size: MarginSize;
};

export const Margin: React.FC<Props> = ({size}) => (
  <View
    style={{
      marginRight: marginSize[size],
      marginBottom: marginSize[size],
    }}
  />
);
