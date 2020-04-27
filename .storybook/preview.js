import {configure, addParameters, addDecorator} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport'
import {StoryDecorator} from './StoryDecorator';


const loadStories = () => {
  const allExports = [];
  const req = require.context('../src', true, /\.stories\.tsx$/);
  req.keys().forEach(fname => allExports.push(req(fname)));
  return allExports;
};

addDecorator(
  withKnobs({
    escapeHTML: false,
  }),
);

addDecorator(StoryDecorator);

addParameters({
  options: {
    panelPosition:'right'
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone6'},
});

configure(loadStories, module);
