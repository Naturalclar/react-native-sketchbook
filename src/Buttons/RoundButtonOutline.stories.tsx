import type {Meta, StoryObj} from '@storybook/react';
import {action} from 'storybook/actions';
import {RoundButtonOutline} from './RoundButtonOutline';

const meta: Meta<typeof RoundButtonOutline> = {
  title: 'Buttons/RoundButtonOutline',
  component: RoundButtonOutline,
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

type Story = StoryObj<typeof RoundButtonOutline>;

export const Default: Story = {
  args: {onPress: action('onPress'), label: 'Hello World'},
};

export const Disabled: Story = {
  args: {onPress: action('onPress'), label: 'Disabled', disabled: true},
};
