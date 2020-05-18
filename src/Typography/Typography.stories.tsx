import React from 'react';
import {
  LightThemeDecorator,
  DarkThemeDecorator,
} from '../../.storybook/StoryDecorator';
import {Heading} from './Heading';
import {SubHeading} from './SubHeading';

const Story = () => {
  return (
    <>
      <Heading>Heading</Heading>
      <SubHeading>SubHeading</SubHeading>
    </>
  );
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
  title: 'Typography/Typography',
};
