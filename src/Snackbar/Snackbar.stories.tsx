import {action} from '@storybook/addon-actions';
import * as React from 'react';
import {
  DarkThemeDecorator,
  LightThemeDecorator,
} from '../../.storybook/StoryDecorator';
import {Typography} from '../Typography';
import {Snackbar} from './Snackbar';

const Story = () => {
  const [visible, setVisible] = React.useState(true);
  return (
    <Snackbar
      visible={visible}
      onAction={action('onAction')}
      onDismiss={() => {
        setVisible(false);
      }}
    >
      <Typography color="white">Hello SnackBar!</Typography>
    </Snackbar>
  );
};

export const light = () => <Story />;

export const dark = () => <Story />;

light.story = {
  decorators: [LightThemeDecorator],
};

dark.story = {
  decorators: [DarkThemeDecorator],
};

export default {
  title: 'Snackbar/Snackbar',
};
