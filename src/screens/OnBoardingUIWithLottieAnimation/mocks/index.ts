import {useId} from '@/hooks';
export type TOnBoardingScreens = {
  id: number;
  title: string;
  description: string;
  lottieAnimation: any;
  backgroundColor: string;
  textColor?: string;
};
const OnBoardingScreens: TOnBoardingScreens[] = [
  {
    id: Math.random(),
    title: 'Work Seamlessly',
    description: 'Get your work done seamlessly without interruption',
    lottieAnimation: require('@/assets/Seamlessly.json'),
    backgroundColor: 'white',
    textColor: 'black',
  },
  {
    id: Math.random(),
    title: 'Achieve Higher Goals',
    description:
      'By boosting your productivity we help you to achieve higher goals',
    lottieAnimation: require('@/assets/HighLevel.json'),
    backgroundColor: 'white',
    textColor: 'black',
  },
  {
    id: Math.random(),
    title: 'Boost Productivity',
    description: 'Subscribe this channel to boost your productivity level',
    lottieAnimation: require('@/assets/Boost.json'),
    backgroundColor: 'white',
    textColor: 'black',
  },
];

export default OnBoardingScreens;
