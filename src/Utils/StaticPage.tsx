import type * as React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {useColors} from '../Themes';

const styles = StyleSheet.create({
  container: {flex: 1},
});

type Props = {
  background?: string;
};

/**
 * Template Component that represents a page within safearea
 */
export const StaticPage: React.FC<React.PropsWithChildren<Props>> = ({
  background,
  children,
}) => {
  const {baseBackgroundColor} = useColors();
  const color = background ? background : baseBackgroundColor;
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: color}]}>
      {children}
    </SafeAreaView>
  );
};
