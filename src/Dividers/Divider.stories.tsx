import type {Meta, StoryObj} from '@storybook/react';
import {Divider} from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Dividers/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
    docs: {description: {component: 'Divider Component'}},
  },
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {size: 1, style: {}},
};

export const WithColor: Story = {
  name: 'WithColor',
  args: {size: 1, color: 'red', style: {}},
};
