import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TAppNavigation} from '../utils/types';
import HomeScreen from '@/screens/HomeScreen';
import OnBoardingUIWithLottieAnimation from '@/screens/OnBoardingUIWithLottieAnimation';
import StackedFlatlist from '@/screens/StackedFlatlist';
const Stack = createNativeStackNavigator<TAppNavigation>();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="OnBoardingUIWithLottieAnimation"
          component={OnBoardingUIWithLottieAnimation}
        />
        <Stack.Screen name="StackedFlatlist" component={StackedFlatlist} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
