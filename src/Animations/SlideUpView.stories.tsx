import React from 'react';
import {SlideUpView} from './SlideUpView';
import {
  LightThemeDecorator,
  DarkThemeDecorator,
} from '../../.storybook/StoryDecorator';
import {Typography} from '../Typography';

const Story = () => (
  <SlideUpView>
    <Typography>Hello World!</Typography>
  </SlideUpView>
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
  title: 'atoms/SlideUpView',
};
