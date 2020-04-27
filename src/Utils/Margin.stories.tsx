import React from 'react';
import {
  LightThemeDecorator,
  DarkThemeDecorator,
} from '../../.storybook/StoryDecorator';
import {View} from 'react-native';
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
    <View style={{flexDirection: 'row'}}>
      <Typography>Can</Typography>
      <Margin size={'medium'} />
      <Typography>Also</Typography>
      <Margin size={'medium'} />
      <Typography>Be</Typography>
      <Margin size={'medium'} />
      <Typography>Placed Horizontally</Typography>
    </View>
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
