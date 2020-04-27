import React from 'react';
import {PrimaryButton} from './PrimaryButton';
import {
  LightThemeDecorator,
  DarkThemeDecorator,
} from '../../.storybook/StoryDecorator';
import {action} from '@storybook/addon-actions';
import {View} from 'react-native';

const Story = () => (
  <>
    <View style={{padding: 24}}>
      <PrimaryButton label="Click Me!" onPress={action('onPress')} />
    </View>
  </>
);

export const light = () => <Story />;

export const dark = () => <Story />;

light.story = {
  decorators: [LightThemeDecorator],
};

dark.story = {
  decorators: [DarkThemeDecorator],
};

export default {
  title: 'Buttons/PrimaryButton',
};
