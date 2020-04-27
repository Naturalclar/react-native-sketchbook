import React from 'react';
import {BaseButton} from './BaseButton';
import {
  LightThemeDecorator,
  DarkThemeDecorator,
} from '../../.storybook/StoryDecorator';
import {Typography} from '../Typography';
import {action} from '@storybook/addon-actions';

const Story = () => (
  <>
    <BaseButton onPress={action('onPress')}>
      <Typography style={{padding: 8}}>Click Me!</Typography>
    </BaseButton>
    <BaseButton
      onPress={action('onPress')}
      leadingComponent={<Typography>{'\u2714'}</Typography>}>
      <Typography style={{padding: 8}}>With Leading Component</Typography>
    </BaseButton>
    <BaseButton
      onPress={action('onPress')}
      tailingComponent={<Typography>{'\u2714'}</Typography>}>
      <Typography style={{padding: 8}}>With Tailing Component</Typography>
    </BaseButton>
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
  title: 'Buttons/BaseButton',
};
