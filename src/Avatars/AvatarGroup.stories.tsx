import type {Meta, StoryObj} from '@storybook/react';
import {Avatar} from './Avatar';
import {AvatarGroup} from './AvatarGroup';

const meta: Meta<typeof AvatarGroup> = {
  title: 'Avatars/AvatarGroup',
  component: AvatarGroup,
  parameters: {
    docs: {
      description: {component: 'Component that displays multiple Avatars'},
    },
  },
  render: (args) => (
    <AvatarGroup {...args}>
      {[...new Array(8)].map((_, index) => (
        <Avatar
          // biome-ignore lint/suspicious/noArrayIndexKey: fixed-length placeholder list
          key={index}
          source={{uri: 'https://www.github.com/Naturalclar.png'}}
        />
      ))}
    </AvatarGroup>
  ),
};

export default meta;

type Story = StoryObj<typeof AvatarGroup>;

export const Default: Story = {};
