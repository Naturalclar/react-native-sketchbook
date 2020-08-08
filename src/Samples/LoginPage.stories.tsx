import React from 'react';
import {LoginPage} from './LoginPage';
import {
  LightThemeDecorator,
  DarkThemeDecorator,
} from '../../.storybook/StoryDecorator';
import {action} from '@storybook/addon-actions';

const Story = () => {
  return <LoginPage onPressLogin={action('onPressLogin')} />;
};

export const light = () => <Story />;

export const dark = () => <Story />;

light.story = {
  decorators: [LightThemeDecorator],
};

dark.story = {
  decorators: [DarkThemeDecorator],
};

export default {
  title: 'Samples/LoginPage',
};
