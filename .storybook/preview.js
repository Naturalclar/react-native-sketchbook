import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import {StoryDecorator} from './StoryDecorator';

const preview = {
  parameters: {
    layout: 'fullscreen',
    options: {
      panelPosition: 'right',
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6',
    },
  },
  decorators: [StoryDecorator],
}

export default preview
