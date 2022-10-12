import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {useColors} from '../Themes';

const styles = StyleSheet.create({
  container: {flex: 1},
});

type Props = {
  background?: string;
};

/**
 * Template Component that represents a page that takes up the whole page including outside of safearea
 */
export const FullPage: React.FC<Props> = React.memo(
  ({background, children}) => {
    const {baseBackgroundColor} = useColors();
    const color = background ? background : baseBackgroundColor;
    return (
      <View style={[styles.container, {backgroundColor: color}]}>
        {children}
      </View>
    );
  },
);

FullPage.displayName = 'FullPage';
