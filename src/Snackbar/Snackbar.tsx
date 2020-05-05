import * as React from 'react';
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  Easing,
  View,
  TouchableOpacity,
} from 'react-native';

import {Typography} from '../Typography';
import {useColors, useSpaceSizes} from '../Themes';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  main: {
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.8)',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  body: {
    flex: 1,
  },
});

type Props = {
  visible: boolean;
  actionLabel?: string;
  onDismiss: () => void;
  onAction?: () => void;
  duration?: number;
};
export const Snackbar: React.FC<Props> = ({
  children,
  visible,
  onDismiss,
  actionLabel = 'DISMISS',
  onAction,
  duration = 4000,
}) => {
  const animated = React.useRef(new Animated.Value(0)).current;
  const {white} = useColors();
  const spaceSize = useSpaceSizes();

  const appear = React.useCallback(() => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 300,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  }, [animated]);

  const hide = React.useCallback(() => {
    Animated.timing(animated, {
      toValue: 0,
      duration: 300,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  }, [animated]);

  React.useEffect(() => {
    if (visible) {
      appear();
      setTimeout(() => {
        onDismiss();
      }, duration);
    } else {
      hide();
    }
  }, [visible, animated, appear, hide, duration, onDismiss]);
  return (
    <SafeAreaView pointerEvents="box-none" style={styles.container}>
      <Animated.View
        style={[
          styles.main,
          {margin: spaceSize.medium},
          {
            opacity: animated,
            transform: [
              {
                scale: animated.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.7, 1],
                }),
              },
            ],
          },
        ]}>
        <View style={styles.body}>{children}</View>
        {onAction ? (
          <TouchableOpacity
            onPress={() => {
              onAction();
              onDismiss();
            }}>
            <Typography color={white}>{actionLabel}</Typography>
          </TouchableOpacity>
        ) : null}
      </Animated.View>
    </SafeAreaView>
  );
};
