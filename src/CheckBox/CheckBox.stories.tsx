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
      <CheckBox checked={true} onValueChange={() => {}} />
      <CheckBox
        checked={value}
        onValueChange={() => setValue(!value)}
        color={secondaryColor}
      />
      <CheckBox
        checked={false}
        onValueChange={() => {}}
        uncheckedColor="green"
      />
      <CheckBox checked={false} onValueChange={() => {}} disabled />
      <CheckBox checked={true} onValueChange={() => {}} disabled />
      <CheckBoxItem checked label="First" onValueChange={() => {}} />
      <CheckBoxItem
        checked={value}
        label="Second"
        onValueChange={() => {
          setValue(!value);
        }}
        color={secondaryColor}
      />
      <CheckBoxItem
        checked={false}
        label="Third"
        disabled
        onValueChange={() => {}}
      />
      <CheckBoxItem
        checked={false}
        label="Fourth"
        textColor="blue"
        uncheckedColor="blue"
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
