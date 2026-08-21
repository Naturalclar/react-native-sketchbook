import type {Meta, StoryObj} from '@storybook/react';
import {action} from 'storybook/actions';
import {Typography} from '../Typography';
import {BaseButton} from './BaseButton';

const meta: Meta<typeof BaseButton> = {
  title: 'Buttons/BaseButton',
  component: BaseButton,
  parameters: {
    layout: 'padded',
    docs: {description: {component: 'Base Button Icon'}},
  },
  render: (args) => (
    <BaseButton {...args}>
      <Typography>Button</Typography>
    </BaseButton>
  ),
};

export default meta;

type Story = StoryObj<typeof BaseButton>;

export const Default: Story = {
  args: {onPress: action('onPress'), style: {}},
};

export const WithLeadingComponent: Story = {
  args: {
    onPress: action('onPress'),
    style: {},
    leadingComponent: <Typography>{'✔'}</Typography>,
  },
};

export const WithTailingComponent: Story = {
  args: {
    onPress: action('onPress'),
    style: {},
    tailingComponent: <Typography>{'✔'}</Typography>,
  },
};
