import React from 'react';
import {View} from 'react-native';
import {SpaceSize, useSpaceSizes} from '../Themes';

type Props = {
  size: SpaceSize;
};

export const Margin: React.FC<Props> = ({size}) => {
  const spaceSize = useSpaceSizes();
  return (
    <View
      style={{
        marginRight: spaceSize[size],
        marginBottom: spaceSize[size],
      }}
    />
  );
};
