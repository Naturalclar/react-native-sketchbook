import React from 'react';
import {
  DarkThemeDecorator,
  LightThemeDecorator,
} from '../../.storybook/StoryDecorator';
import {VerificationInput} from './VerificationInput';
import {View} from 'react-native';

const Story = () => {
  const [value, setValue] = React.useState('');
  return (
    <View style={{flex: 1, backgroundColor: '#555'}}>
      <VerificationInput
        length={6}
        value={value}
        onChangeText={(text) => {
          setValue(text);
        }}
      />
    </View>
  );
};

export const light = () => <Story />;

light.story = {
  decorators: [LightThemeDecorator],
};

export const dark = () => <Story />;

dark.story = {
  decorators: [DarkThemeDecorator],
};

export default {
  title: 'Inputs/VerificationInput',
};
