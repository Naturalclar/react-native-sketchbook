import * as React from 'react';
import {
  LightThemeDecorator,
  DarkThemeDecorator,
} from '../../.storybook/StoryDecorator';
import {Snackbar} from './Snackbar';
import {Typography} from '../Typography';
import {action} from '@storybook/addon-actions';

const Story = () => {
  const [visible, setVisible] = React.useState(true);
  return (
    <Snackbar
      visible={visible}
      onAction={action('onAction')}
      onDismiss={() => {
        setVisible(false);
      }}>
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
