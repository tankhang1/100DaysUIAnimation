import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useRef} from 'react';
import OnBoardingScreens from './mocks';
import {WIDTH} from '@/utils/global';
import OnBoardingItem from './components/OnBoardingItem';
import Animated, {
  ReduceMotion,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import DotItem from './components/DotItem';

const OnBoardingUIWithLottieAnimation = () => {
  const animatedRef = useRef<Animated.ScrollView>(null);
  const animatedDot = useSharedValue(0);
  const handleNextPress = () => {
    if (animatedDot.value < OnBoardingScreens.length - 1) {
      animatedRef.current?.scrollTo({
        x: (Math.round(animatedDot.value) + 1) * WIDTH,
        animated: true,
        y: 0,
      });
    }
  };
  const handlePreviousPress = () => {
    if (animatedDot.value > 0) {
      animatedRef.current?.scrollTo({
        x: (Math.round(animatedDot.value) - 1) * WIDTH,
        animated: true,
        y: 0,
      });
    }
  };
  const handler = useAnimatedScrollHandler({
    onScroll: e =>
      (animatedDot.value = withTiming(e.contentOffset.x / WIDTH, {
        reduceMotion: ReduceMotion.Never,
      })),
    onEndDrag: e =>
      (animatedDot.value = withTiming(Math.round(e.contentOffset.x / WIDTH), {
        reduceMotion: ReduceMotion.System,
      })),
  });
  useDerivedValue(() => console.log(animatedDot.value));
  return (
    <View style={styles.flex}>
      <Animated.ScrollView
        ref={animatedRef}
        horizontal
        onScroll={handler}
        pagingEnabled
        renderToHardwareTextureAndroid
        showsHorizontalScrollIndicator={false}>
        {OnBoardingScreens.map((screen, index) => (
          <OnBoardingItem
            key={index}
            item={screen}
            index={index}
            animatedDot={animatedDot}
          />
        ))}
      </Animated.ScrollView>
      <View style={styles.bottomController}>
        <TouchableOpacity onPress={handlePreviousPress}>
          <Text style={styles.bottomText}>Previous</Text>
        </TouchableOpacity>
        <View style={styles.dotContainer}>
          {[1, 2, 3].map((_, index) => (
            <DotItem index={index} animatedDot={animatedDot} key={index} />
          ))}
        </View>
        <TouchableOpacity onPress={handleNextPress}>
          <Text style={styles.bottomText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBoardingUIWithLottieAnimation;
const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  bottomController: {
    width: WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 30,
    paddingTop: 10,
    backgroundColor: 'rgba(0,0,0,0.1)',
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    zIndex: 9999,
  },
  bottomText: {
    fontSize: 16,
    color: 'rgba(0,0,0,0.4)',
    fontWeight: '600',
  },

  dotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
