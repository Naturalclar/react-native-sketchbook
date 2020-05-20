import React from 'react';
import {ViewPager} from './ViewPager';
import {
  LightThemeDecorator,
  DarkThemeDecorator,
} from '../../.storybook/StoryDecorator';
import {Typography} from '../Typography';
import {View} from 'react-native';

const pageData = [{text: 'Hello'}, {text: 'World!'}, {text: 'ViewPager'}];

const Page = ({data}) => (
  <View>
    <Typography>{data.text}</Typography>
  </View>
);

const Story = () => (
  <ViewPager>
    {pageData.map((data, index) => {
      return <Page key={index} data={data} />;
    })}
  </ViewPager>
);

export const light = () => <Story />;

export const dark = () => <Story />;

light.story = {
  decorators: [LightThemeDecorator],
};

dark.story = {
  decorators: [DarkThemeDecorator],
};

export default {
  title: 'ViewPager/ViewPager',
};
