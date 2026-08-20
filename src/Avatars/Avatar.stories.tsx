import type {Meta, StoryObj} from '@storybook/react';
import {Avatar} from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Avatars/Avatar',
  component: Avatar,
  parameters: {
    docs: {
      description: {component: 'Component that displays user icon.'},
    },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    source: {uri: 'https://www.github.com/Naturalclar.png'},
  },
};
