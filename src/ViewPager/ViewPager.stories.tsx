import React from 'react';
import {ViewPager} from './ViewPager';
import {
  LightThemeDecorator,
  DarkThemeDecorator,
} from '../../.storybook/StoryDecorator';
import {Typography} from '../Typography';
import {View} from 'react-native';

const pageData = [
  {text: 'Hello', color: 'red'},
  {text: 'World!', color: 'blue'},
  {text: 'ViewPager', color: 'green'},
];

const Page = ({data}) => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: data.color,
    }}>
    <Typography color={'white'}>{data.text}</Typography>
  </View>
);

const Story = () => (
  <ViewPager initialIndex={1}>
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
