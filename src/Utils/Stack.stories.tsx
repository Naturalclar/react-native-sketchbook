import React from 'react';
import {Stack} from './Stack';
import {
  LightThemeDecorator,
  DarkThemeDecorator,
} from '../../.storybook/StoryDecorator';
import {Typography} from '../Typography';

const Story = () => (
  <>
    <Stack space={'small'}>
      <Typography>This Component</Typography>
      <Typography>Creates Space </Typography>
      <Typography>Between each</Typography>
      <Typography>Child Components</Typography>
    </Stack>
    <Stack type="horizontal" space={'small'}>
      <Typography>Can</Typography>
      <Typography>Also</Typography>
      <Typography>Be</Typography>
      <Typography>Placed Horizontally</Typography>
    </Stack>
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
  title: 'Utils/Stack',
};
