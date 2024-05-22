import {View, Text, StyleSheet, InteractionManager} from 'react-native';
import React, {
  memo,
  startTransition,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {TOnBoardingScreens} from '../mocks';
import {HEIGHT, WIDTH} from '@/utils/global';
import LottieView from 'lottie-react-native';
import Animated, {
  FadeIn,
  FadeInDown,
  FadeOut,
  runOnJS,
  SharedValue,
  SlideInDown,
  SlideOutDown,
  useDerivedValue,
} from 'react-native-reanimated';
type TOnBoardingItem = {
  item: TOnBoardingScreens;
  index: number;
  animatedDot: SharedValue<number>;
};
const OnBoardingItem = ({item, index, animatedDot}: TOnBoardingItem) => {
  const [isRender, setIsRender] = useState(false);
  const RenderLottieView = useCallback(
    () => (
      <Animated.View entering={FadeIn.delay(500)} exiting={FadeOut}>
        <LottieView
          source={item.lottieAnimation}
          style={styles.lottie}
          autoPlay
          loop
          renderMode="AUTOMATIC"
          resizeMode="contain"
        />
      </Animated.View>
    ),
    [item],
  );
  const handleRender = (render: boolean) => {
    InteractionManager.runAfterInteractions(() => setIsRender(render));
  };
  useDerivedValue(() => {
    if (Math.round(animatedDot.value) === index) {
      runOnJS(handleRender)(true);
    } else runOnJS(handleRender)(false);
  });
  if (isRender)
    return (
      <View
        key={item.id}
        style={[
          styles.screenOverall,
          {
            backgroundColor: item.backgroundColor,
          },
        ]}>
        <View style={{flex: 2}} />
        <RenderLottieView />
        <View style={styles.flex} />

        <Animated.Text
          entering={FadeInDown.delay(300)}
          exiting={FadeOut}
          style={[styles.title, {color: item.textColor}]}>
          {item.title}
        </Animated.Text>
        <Animated.Text
          entering={SlideInDown}
          exiting={SlideOutDown}
          style={[styles.description, {color: item.textColor}]}>
          {item.description}
        </Animated.Text>
        <View style={{flex: 2}} />
      </View>
    );
  return (
    <View
      style={[
        styles.screenOverall,
        {
          backgroundColor: item.backgroundColor,
        },
      ]}
    />
  );
};

export default memo(OnBoardingItem);
const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  screenOverall: {
    flex: 1,
    width: WIDTH,
    height: HEIGHT,
  },
  lottie: {width: '100%', height: 400},
  title: {
    fontSize: 26,
    color: 'black',
    fontWeight: '400',
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
  },
});
