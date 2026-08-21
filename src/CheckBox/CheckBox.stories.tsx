import type {Meta, StoryObj} from '@storybook/react';
import {action} from 'storybook/actions';
import {CheckBox} from './CheckBox';

const meta: Meta<typeof CheckBox> = {
  title: 'Buttons/CheckBox',
  component: CheckBox,
  parameters: {layout: 'padded'},
  args: {onValueChange: action('onValueChange')},
};

export default meta;

type Story = StoryObj<typeof CheckBox>;

export const Unchecked: Story = {
  args: {checked: false, disabled: false},
};

export const Checked: Story = {
  args: {checked: true, disabled: false},
};

export const Colored: Story = {
  args: {checked: true, disabled: false, color: 'red'},
};

export const Disabled: Story = {
  args: {checked: true, disabled: true},
};
