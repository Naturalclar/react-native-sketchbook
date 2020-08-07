import {configure, addParameters, addDecorator} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import {StoryDecorator} from './StoryDecorator';

const loadStories = () => {
  const req = require.context('../src', true, /\.stories\.tsx$/);
  return req.keys().map((fname) => req(fname));
};

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

configure(loadStories, module);
