import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useColors} from './ThemeProvider';

import {
  LightThemeDecorator,
  DarkThemeDecorator,
} from '../../.storybook/StoryDecorator';

const styles = StyleSheet.create({
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

const Colors = () => {
  const {
    baseBackgroundColor,
    primaryColor,
    secondaryColor,
    warningColor,
    negativeColor,
    baseTextColor,
    white,
  } = useColors();
  return (
    <View style={{backgroundColor: baseBackgroundColor}}>
      <View style={[styles.box, {backgroundColor: primaryColor}]}>
        <Text style={{color: white}}>Primary Color</Text>
      </View>
      <View style={[styles.box, {backgroundColor: secondaryColor}]}>
        <Text style={{color: white}}>Secondary Color</Text>
      </View>
      <View style={[styles.box, {backgroundColor: warningColor}]}>
        <Text style={{color: white}}>Warning Color</Text>
      </View>
      <View style={[styles.box, {backgroundColor: negativeColor}]}>
        <Text style={{color: white}}>Negative Color</Text>
      </View>
      <View style={[styles.box, {backgroundColor: baseBackgroundColor}]}>
        <Text style={{color: baseTextColor}}>Base Text Color</Text>
      </View>
    </View>
  );
};

export const light = () => (
  <>
    <Colors />
  </>
);

export const dark = () => (
  <>
    <Colors />
  </>
);

light.story = {
  decorators: [LightThemeDecorator],
};

dark.story = {
  decorators: [DarkThemeDecorator],
};

export default {
  title: 'Theme/Theme',
};
