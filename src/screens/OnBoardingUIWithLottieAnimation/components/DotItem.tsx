import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Animated, {
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
type TDotItem = {
  index: number;
  animatedDot: SharedValue<number>;
};
const DotItem = ({index, animatedDot}: TDotItem) => {
  const animatedDotStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        animatedDot.value,
        [index - 1, index, index + 1],
        ['hsl(0,0%,73%)', 'hsl(0,0%,40%)', 'hsl(0,0%,73%)'],
      ),
      width: interpolateColor(
        animatedDot.value,
        [index - 1, index, index + 1],
        [8, 40, 8],
      ),
    };
  });
  return <Animated.View key={index} style={[styles.dot, animatedDotStyle]} />;
};

export default DotItem;
const styles = StyleSheet.create({
  dot: {
    width: 8,
    height: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
});
