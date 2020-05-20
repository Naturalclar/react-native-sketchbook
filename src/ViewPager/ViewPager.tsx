import * as React from 'react';
import {
  View,
  StyleSheet,
  Animated,
  PanResponder,
  useWindowDimensions,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type Props = {
  initialIndex?: number;
};

/**
 * A ViewPager Component
 */
export const ViewPager: React.FC<Props> = ({initialIndex = 0, children}) => {
  const {width} = useWindowDimensions();
  const xTracker = React.useRef(new Animated.Value(0)).current;
  const panResponder = React.useRef(null);
  const [index, setIndex] = React.useState(initialIndex);
  const [x, setX] = React.useState(-width * initialIndex);
  const [offset, setOffset] = React.useState(0);

  const childArray = React.Children.toArray(children);

  panResponder.current = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      xTracker.stopAnimation();
    },
    onPanResponderMove: (_, gestureState) => {
      setOffset(gestureState.dx);
      xTracker.setOffset(gestureState.dx);
    },
    onPanResponderRelease: (_, gestureState) => {
      const {vx} = gestureState;
      const stopPosition = x + offset;
      const nextPage = getNextPage(stopPosition, vx);
      snapToPage(nextPage);
    },
  });

  React.useEffect(() => {
    xTracker.addListener(({value}) => setX(value));
    return () => {
      xTracker.removeAllListeners();
    };
  }, [xTracker]);

  const getNextPage = (x: number, vx: number = 0) => {
    const isThrown = vx && (vx < -0.5 || vx > 0.5);
    const absX = -Math.abs(x);

    let tempIndex;
    if (isThrown) {
      tempIndex =
        vx > 0
          ? Math.abs(Math.ceil(absX / width))
          : Math.abs(Math.floor(absX / width));
    } else {
      tempIndex = Math.abs(Math.round(absX / width));
    }

    return Math.min(Math.max(tempIndex, 0), childArray.length - 1);
  };

  const snapToPage = (pageIndex: number) => {
    setIndex(pageIndex);
    setOffset(0);
    xTracker.flattenOffset();
    Animated.spring(xTracker, {
      toValue: -width * pageIndex,
      friction: 6,
      useNativeDriver: true,
    }).start();
  };

  const renderPages = (pageIndex: number) => {
    return childArray.map((page: any, idx: number) => {
      return Math.abs(idx - pageIndex) < 2 ? (
        <View key={idx} style={[styles.page, {width, left: width * idx}]}>
          {page}
        </View>
      ) : null;
    });
  };

  if (panResponder.current?.panHandlers) {
    return (
      <View style={styles.container}>
        <Animated.View
          {...panResponder.current.panHandlers}
          style={[styles.container, {left: xTracker}]}>
          {renderPages(index)}
        </Animated.View>
      </View>
    );
  }
  return null;
};
