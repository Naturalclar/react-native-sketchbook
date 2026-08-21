import {action} from '@storybook/addon-actions';
import type {Meta, StoryObj} from '@storybook/react';
import {RoundButton} from './RoundButton';

const meta: Meta<typeof RoundButton> = {
  title: 'Buttons/RoundButton',
  component: RoundButton,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Example of Button Icon extended from Base Button',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof RoundButton>;

export const Default: Story = {
  args: {onPress: action('onPress'), label: 'Hello World'},
};

export const Disabled: Story = {
  args: {onPress: action('onPress'), label: 'Disabled', disabled: true},
};
