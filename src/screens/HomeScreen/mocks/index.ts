import {THomeTab} from '@/utils/types/THomeScreen';
import {useId} from 'react';

export const HomeMocks = {
  Tabs: [
    {
      id: useId(),
      name: 'Onboarding UI with Lottie Animation',
      backgroundColor: '#fd9300',
      navigateTo: 'OnBoardingUIWithLottieAnimation',
    },
  ] as THomeTab[],
};
