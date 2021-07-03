import {addParameters, addDecorator} from '@storybook/react';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import {StoryDecorator} from './StoryDecorator';

addDecorator(StoryDecorator);

addParameters({
  layout: 'fullscreen',
  options: {
    panelPosition: 'right',
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone6',
  },
});
