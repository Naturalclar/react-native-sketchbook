import * as React from 'react';
import {Margin} from './Margin';
import {View, StyleSheet, type StyleProp, type ViewStyle} from 'react-native';
import type {SpaceSize} from '../Themes';

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
export const Stack: React.FC<React.PropsWithChildren<Props>> = React.memo(
  ({children, type = 'vertical', space, style = {}}) => {
    const childArray = React.Children.toArray(children);

    return (
      <View style={[style, type === 'horizontal' && styles.horizontal]}>
        {childArray.map((child, index) => {
          return (
            // biome-ignore lint/suspicious/noArrayIndexKey: Order of children is fixed
            <React.Fragment key={index}>
              {child}
              <Margin size={space} />
            </React.Fragment>
          );
        })}
      </View>
    );
  },
);

Stack.displayName = 'Stack';
