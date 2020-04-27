import React, {Children, Fragment} from 'react';
import {Margin} from './Margin';
import {View, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {MarginSize} from '../Themes';

type Props = {
  space: MarginSize;
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
            <Margin type={type} size={space} />
          </Fragment>
        );
      })}
    </View>
  );
};
