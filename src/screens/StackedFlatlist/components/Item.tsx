import {StyleSheet, ViewToken} from 'react-native';
import React, {memo} from 'react';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

type TItem = {
  index: number;
  viewableItems: SharedValue<ViewToken[]>;
};
const Item = ({index, viewableItems}: TItem) => {
  const itemAnimatedStyle = useAnimatedStyle(() => {
    const isVisible = viewableItems.value
      .filter(item => item.isViewable)
      .find(viewableItem => viewableItem.index === index);
    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [{scaleX: withTiming(isVisible ? 1 : 0, {duration: 200})}],
    };
  }, []);

  return <Animated.View key={index} style={[styles.item, itemAnimatedStyle]} />;
};

export default memo(Item);
const styles = StyleSheet.create({
  item: {
    width: '90%',
    height: 100,
    borderRadius: 10,
    backgroundColor: 'hsl(196,66%,55%)',
    alignSelf: 'center',
    transformOrigin: 'center',
  },
});
