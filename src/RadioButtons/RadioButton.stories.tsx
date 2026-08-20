import React from 'react';
import {
  DarkThemeDecorator,
  LightThemeDecorator,
} from '../../.storybook/StoryDecorator';
import {useColors} from '../Themes';
import {Stack} from '../Utils';
import {RadioButton} from './RadioButton';
import {RadioButtonItem} from './RadioButtonItem';

const Story = () => {
  const [state, setState] = React.useState('First');
  const {secondaryColor} = useColors();
  return (
    <RadioButton.Group
      onValueChange={(value) => {
        setState(value);
      }}
      value={state}
    >
      <Stack space="xsmall">
        <RadioButton value="First" />
        <RadioButton value="Second" color={secondaryColor} />
        <RadioButton value="Third" disabled />
        <RadioButtonItem label="First" value="First" />
        <RadioButtonItem label="Second" value="Second" color={secondaryColor} />
        <RadioButtonItem label="Third" value="Third" disabled />
      </Stack>
    </RadioButton.Group>
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
  title: 'RadioButtons/RadioButton',
};
