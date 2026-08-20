import {action} from '@storybook/addon-actions';
import {
  DarkThemeDecorator,
  LightThemeDecorator,
} from '../../.storybook/StoryDecorator';
import {LoginPage} from './LoginPage';

const Story = () => {
  return <LoginPage onPressLogin={action('onPressLogin')} />;
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
  title: 'Samples/LoginPage',
};
