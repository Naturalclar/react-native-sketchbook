import * as React from 'react';
import {Image, View} from 'react-native';
import type {ImageSourcePropType} from 'react-native';

type AvatarProps = {
  size?: number;
  source: ImageSourcePropType;
};

/**
 * Avatar component that shows round icon of a given image
 *
 * ```js
 * import * as React from 'react'
 * import { View } from 'react-native';
 * import { Avatar } from 'react-native-sketchbook'
 *
 * export const Example = () => {
 *   return (
 *     <View>
 *       <Avatar size={50} source={require('../assets/example.png')}/>
 *     </View>
 *   )
 * }
 * ```
 */
export const Avatar: React.FC<AvatarProps> = ({size = 36, source}) => {
  return (
    <View
      style={[
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
      ]}>
      <Image
        source={source}
        style={{width: size, height: size, borderRadius: size / 2}}
      />
    </View>
  );
};
