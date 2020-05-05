import React, {Children, Fragment} from 'react';
import {Margin} from './Margin';
import {View, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {SpaceSize} from '../Themes';

type Props = {
  space: SpaceSize;
  type?: 'horizontal' | 'vertical';
  style?: StyleProp<ViewStyle>;
};

const styles = StyleSheet.create({
  horizontal: {
    flexDirection: 'row',
  },
});

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
