import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar} from './Avatar';
import {AvatarGroup} from './AvatarGroup';
import {
  LightThemeDecorator,
  DarkThemeDecorator,
} from '../../.storybook/StoryDecorator';

const Story = () => (
  <View style={styles.container}>
    <AvatarGroup>
      <Avatar size={30} source={{uri: 'https://github.com/Naturalclar.png'}} />
      <Avatar size={30} source={{uri: 'https://github.com/Naturalclar.png'}} />
      <Avatar size={30} source={{uri: 'https://github.com/Naturalclar.png'}} />
      <Avatar size={30} source={{uri: 'https://github.com/Naturalclar.png'}} />
    </AvatarGroup>
  </View>
);

const styles = StyleSheet.create({
  container: {
    margin: 24,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.05)',
    padding: 10,
    shadowColor: 'rgba(0,0,0)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
});

export const light = () => <Story />;

export const dark = () => <Story />;

light.story = {
  decorators: [LightThemeDecorator],
};

dark.story = {
  decorators: [DarkThemeDecorator],
};

export default {
  title: 'Avatars/Avatar',
};
