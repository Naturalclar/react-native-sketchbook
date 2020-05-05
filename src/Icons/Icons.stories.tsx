import React from 'react';
import {Stack} from '../Utils';
import {Typography} from '../Typography';
import {
  LightThemeDecorator,
  DarkThemeDecorator,
} from '../../.storybook/StoryDecorator';
import * as Icons from './index';
import {View, FlatList, StyleSheet} from 'react-native';
import {useColors} from '../Themes';

console.log(Object.keys(Icons));

const icons = Object.keys(Icons).map((key) => {
  return {
    name: key,
    component: Icons[key],
  };
});

const styles = StyleSheet.create({
  showCaseContainer: {
    borderRightWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 8,
    flex: 1,
  },
  showCaseRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

const Story = () => {
  const {primaryColor} = useColors();
  return (
    <FlatList
      numColumns={2}
      data={icons}
      renderItem={({item}) => {
        const Component = item.component;
        return (
          <Stack space={'medium'} style={styles.showCaseContainer}>
            <Typography>{item.name}</Typography>
            <View style={styles.showCaseRow}>
              <Component color={primaryColor} />
              <Component color="#eee" />
              <Component color="#555" />
            </View>
          </Stack>
        );
      }}
      keyExtractor={(item) => item.name}
    />
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
  title: 'Icons/Icons',
};
