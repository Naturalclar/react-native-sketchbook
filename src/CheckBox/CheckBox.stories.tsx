import React from 'react';
import {CheckBox} from './CheckBox';
import {
  LightThemeDecorator,
  DarkThemeDecorator,
} from '../../.storybook/StoryDecorator';
import {useColors} from '../Themes';
import {CheckBoxItem} from './CheckBoxItem';
import {Stack} from '../Utils';

const Story = () => {
  const [value, setValue] = React.useState(false);
  const {secondaryColor} = useColors();
  return (
    <Stack space="xsmall">
      <CheckBox value={true} onValueChange={() => {}} />
      <CheckBox
        value={value}
        onValueChange={() => setValue(!value)}
        color={secondaryColor}
      />
      <CheckBox value={false} onValueChange={() => {}} disabled />
      <CheckBox value={true} onValueChange={() => {}} disabled />
      <CheckBoxItem value label="First" onValueChange={() => {}} />
      <CheckBoxItem
        value={value}
        label="Second"
        onValueChange={() => {
          setValue(!value);
        }}
        color={secondaryColor}
      />
      <CheckBoxItem
        value={false}
        label="Third"
        disabled
        onValueChange={() => {}}
      />
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
  title: 'CheckBox/CheckBox',
};
