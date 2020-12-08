import React from 'react';
import {
  LightThemeDecorator,
  DarkThemeDecorator,
} from '../../.storybook/StoryDecorator';
import {Row} from './Row';
import {Typography} from '../Typography';
import {Margin} from './Margin';

const Story = () => (
  <>
    <Typography>The Margin Component</Typography>
    <Margin size={'medium'} />
    <Typography>Simply Adds Margin</Typography>
    <Margin size={'medium'} />
    <Typography>Between Components</Typography>
    <Margin size={'medium'} />
    <Row>
      <Typography>Can</Typography>
      <Margin size={'medium'} />
      <Typography>Also</Typography>
      <Margin size={'medium'} />
      <Typography>Be</Typography>
      <Margin size={'medium'} />
      <Typography>Placed Horizontally</Typography>
    </Row>
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
  title: 'Utils/Margin',
};
