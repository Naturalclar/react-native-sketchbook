import React from 'react';
import {
  LightThemeDecorator,
  DarkThemeDecorator,
} from '../../.storybook/StoryDecorator';
import {Heading} from './Heading';
import {SubHeading} from './SubHeading';
import {LabelText} from './LabelText';
import {Paragraph} from './Paragraph';

const Story = () => {
  return (
    <>
      <Heading>Heading</Heading>
      <LabelText>LabelText</LabelText>
      <SubHeading>SubHeading</SubHeading>
      <Paragraph>Paragraph</Paragraph>
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
