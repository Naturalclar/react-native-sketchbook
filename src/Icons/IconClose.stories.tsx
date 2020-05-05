import React from 'react';
import {IconClose} from './IconClose';
import {
  LightThemeDecorator,
  DarkThemeDecorator,
} from '../../.storybook/StoryDecorator';

const Story = () => (
  <>
    <IconClose />
    <IconClose color="red" />
    <IconClose size={24} />
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
  title: 'Icons/IconClose',
};
