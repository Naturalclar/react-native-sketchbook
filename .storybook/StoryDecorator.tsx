import React from 'react';
import { ThemeProvider } from '../src/Themes';
import { View } from 'react-native';

/**
 * StoryDecorator
 * Component Wrapper for All Stories
 */
export const StoryDecorator = (story: () => React.ReactNode) => {
  return <View style={{flex:1}}>{story()}</View>;
};


/**
 * LightThemeDecorator
 * Component Wrapper for Light Mode
 */
export const LightThemeDecorator = (story: () => React.ReactNode) => {
  return <ThemeProvider theme="light" ><View style={{flex:1}}>{story()}</View></ThemeProvider>;
};

/**
 * DarkThemeDecorator
 * Component Wrapper for Dark Mode
 */
export const DarkThemeDecorator = (story: () => React.ReactNode) => {
  return <ThemeProvider theme="dark" ><View style={{flex:1,backgroundColor:'#222'}}>{story()}</View></ThemeProvider>;
};
