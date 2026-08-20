import React from 'react';
import {
  DarkThemeDecorator,
  LightThemeDecorator,
} from '../../.storybook/StoryDecorator';
import {Typography} from '../Typography';
import {SlideUpView} from './SlideUpView';

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
  title: 'Animations/SlideUpView',
};
