import {FlatList, StyleSheet, View} from 'react-native';
import {
  DarkThemeDecorator,
  LightThemeDecorator,
} from '../../.storybook/StoryDecorator';
import {useColors} from '../Themes';
import {Typography} from '../Typography';
import {Stack} from '../Utils';
import * as Icons from './index';

const icons = Object.entries(Icons).map(([name, component]) => {
  return {
    name,
    component,
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
