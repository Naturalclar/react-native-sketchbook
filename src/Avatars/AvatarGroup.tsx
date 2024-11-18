import * as React from "react";
import { View } from "react-native";
import { Row } from "../Utils/Row";
type AvatarGroupProps = {
  space?: number;
};

/**
 * Shows Group of Avatars, slightly stacked on top of each other
 *
 * ```js
 * import * as React from 'react'
 * import { Avatar, AvatarGroup } from 'react-native-sketchbook'
 *
 * export const Example = () => {
 *   return (
 *     <AvatarGroup>
 *       <Avatar size={50} source={require('../assets/example1.png')}/>
 *       <Avatar size={50} source={require('../assets/example2.png')}/>
 *       <Avatar size={50} source={require('../assets/example3.png')}/>
 *       <Avatar size={50} source={require('../assets/example4.png')}/>
 *     </AvatarGroup>
 *   )
 * }
 * ```
 */
export const AvatarGroup: React.FC<
  React.PropsWithChildren<AvatarGroupProps>
> = ({ children, space = -8 }) => {
  const childElements = React.Children.toArray(children).filter((child) => {
    return React.isValidElement(child);
  });

  return (
    <Row style={{ paddingLeft: -space }}>
      {childElements.map((child) => {
        return (
          <View key={child.toString()} style={{ marginLeft: space }}>
            {child}
          </View>
        );
      })}
    </Row>
  );
};
