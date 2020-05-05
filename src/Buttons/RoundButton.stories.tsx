import React from 'react';
import {RoundButton} from './RoundButton';
import {
  LightThemeDecorator,
  DarkThemeDecorator,
} from '../../.storybook/StoryDecorator';
import {Typography} from '../Typography';
import {Stack} from '../Utils';

const Story = () => {
  return (
    <Stack space={'small'} style={{padding: 24}}>
      <Typography>Round Button</Typography>
      <RoundButton label="Hello World!" onPress={() => {}} />
      <Typography>Disabled</Typography>
      <RoundButton label="Hello World!" onPress={() => {}} disabled />
    </Stack>
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
  title: 'Buttons/RoundButton',
};
