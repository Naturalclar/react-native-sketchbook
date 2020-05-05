import React from 'react';
import {BaseLabel} from './BaseLabel';
import {
  LightThemeDecorator,
  DarkThemeDecorator,
} from '../../.storybook/StoryDecorator';
import {Typography} from '../Typography';
import {action} from '@storybook/addon-actions';
import {View} from 'react-native';
import {useColors} from '../Themes';

const Story = () => {
  const {primaryColor, white} = useColors();
  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
      <BaseLabel style={{margin: 8}}>
        <Typography>Label</Typography>
      </BaseLabel>
      <BaseLabel color={primaryColor} style={{margin: 8}}>
        <Typography color={white}>Primary</Typography>
      </BaseLabel>
      <BaseLabel
        style={{margin: 8}}
        leadingComponent={<Typography>{'\u2714'}</Typography>}>
        <Typography>With Leading Component</Typography>
      </BaseLabel>
      <BaseLabel
        style={{margin: 8}}
        tailingComponent={<Typography>{'\u2714'}</Typography>}>
        <Typography>With Tailing Component</Typography>
      </BaseLabel>
      <BaseLabel style={{margin: 8}} onAction={action('onAction')}>
        <Typography>With ActionButton</Typography>
      </BaseLabel>
    </View>
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
  title: 'Labels/BaseLabel',
};
