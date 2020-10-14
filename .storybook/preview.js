import {addParameters, addDecorator} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import {StoryDecorator} from './StoryDecorator';

addDecorator(
  withKnobs({
    escapeHTML: false,
  }),
);

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
