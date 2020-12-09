import React from 'react';
import {View} from 'react-native';
import {SpaceSize, useSpaceSizes} from '../Themes';

type Props = {
  /**
   * size: size of the margin.
   *
   * default: {
   *  none: 0;
   *  xxsmall: 2;
   *  xsmall: 4;
   *  small: 8;
   *  medium: 16;
   *  large: 24;
   *  xlarge: 32;
   *  xxlarge: 48;
   * }
   */
  size: SpaceSize;
};

/**
 * Margin
 * - A component that provides set amounts of margin to right and bottom
 */
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
