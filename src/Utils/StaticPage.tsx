import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {useColors} from '../Themes';

const styles = StyleSheet.create({
  container: {flex: 1},
});

type Props = {
  background?: string;
};

export const StaticPage: React.FC<Props> = ({background, children}) => {
  const {baseBackgroundColor} = useColors();
  const color = background ? background : baseBackgroundColor;
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: color}]}>
      {children}
    </SafeAreaView>
  );
};
