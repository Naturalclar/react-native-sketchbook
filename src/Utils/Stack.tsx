import React, {Children, Fragment} from 'react';
import {Margin} from './Margin';
import {View, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {SpaceSize} from '../Themes';

type Props = {
  /**
   * space: margin between each child components.
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
  space: SpaceSize;
  type?: 'horizontal' | 'vertical';
  style?: StyleProp<ViewStyle>;
};

const styles = StyleSheet.create({
  horizontal: {
    flexDirection: 'row',
  },
});

/**
 * Stack
 * - A View component whose children will be provided with set amounts of margin
 */
export const Stack: React.FC<Props> = ({
  children,
  type = 'vertical',
  space,
  style = {},
}) => {
  const childArray = Children.toArray(children);

  return (
    <View style={[style, type === 'horizontal' && styles.horizontal]}>
      {childArray.map((child, index) => {
        return (
          <Fragment key={index}>
            {child}
            <Margin size={space} />
          </Fragment>
        );
      })}
    </View>
  );
};
