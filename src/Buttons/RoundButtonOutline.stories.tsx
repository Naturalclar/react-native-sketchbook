import React from 'react';

import {RoundButtonOutline} from './RoundButtonOutline';
import {
  LightThemeDecorator,
  DarkThemeDecorator,
} from '../../.storybook/StoryDecorator';
import {Stack} from '../Utils';
import {Typography} from '../Typography';

const Story = () => {
  return (
    <Stack space={'small'} style={{padding: 24}}>
      <Typography>Round Button Outline</Typography>
      <RoundButtonOutline label="Changed Text" onPress={() => {}} />
      <Typography>Disabled</Typography>
      <RoundButtonOutline label="Changed Text" onPress={() => {}} disabled />
    </Stack>
  );
};

export const light = () => <Story />;
light.story = {
  decorators: [LightThemeDecorator],
};

export const dark = () => <Story />;
dark.story = {
  decorators: [DarkThemeDecorator],
};

export default {
  title: 'Buttons/RoundButtonOutline',
};
