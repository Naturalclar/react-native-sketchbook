import {action} from '@storybook/addon-actions';
import type {Meta, StoryObj} from '@storybook/react';
import {PrimaryButton} from './PrimaryButton';

const meta: Meta<typeof PrimaryButton> = {
  title: 'Buttons/PrimaryButton',
  component: PrimaryButton,
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

type Story = StoryObj<typeof PrimaryButton>;

export const Default: Story = {
  args: {onPress: action('onPress'), label: 'Hello World'},
};

export const Disabled: Story = {
  args: {onPress: action('onPress'), label: 'Disabled', disabled: true},
};
