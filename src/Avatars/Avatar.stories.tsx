import React from 'react';
import {Avatar} from './Avatar';
import {
  LightThemeDecorator,
  DarkThemeDecorator,
} from '../../.storybook/StoryDecorator';

const Story = () => (
  <Avatar size={50} source={{uri: 'https://github.com/Naturalclar.png'}} />
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
  title: 'Avatars/Avatar',
};
