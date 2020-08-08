import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  DarkThemeDecorator,
  LightThemeDecorator,
} from '../../.storybook/StoryDecorator';
import {SingleLineInput} from './SingleLineInput';
import {Margin} from '../Utils';

const styles = StyleSheet.create({container: {padding: 24, flex: 1}});

const Story = () => {
  const [value, setValue] = React.useState('');
  return (
    <View style={styles.container}>
      <SingleLineInput
        label="email address"
        value={value}
        onChangeText={(text) => {
          setValue(text);
        }}
      />
      <Margin size="medium" />
      <SingleLineInput
        label="with error"
        value={value}
        onChangeText={(text) => {
          setValue(text);
        }}
        errorMessage={'Sample Error Message'}
      />
    </View>
  );
};

export const light = () => <Story />;

light.story = {
  decorators: [LightThemeDecorator],
};

export const dark = () => <Story />;

dark.story = {
  decorators: [DarkThemeDecorator],
};

export default {
  title: 'Inputs/SingleLineInput',
};
