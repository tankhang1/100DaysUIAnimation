import {useId} from '@/hooks';
import {THomeTab} from '@/utils/types/THomeScreen';

export const HomeMocks = {
  Tabs: [
    {
      id: useId(),
      name: 'Onboarding UI with Lottie Animation',
      backgroundColor: '#fd9300',
      navigateTo: 'OnBoardingUIWithLottieAnimation',
    },
    {
      id: useId(),
      name: 'Stacked Flatlist',
      backgroundColor: '#fd9300',
      navigateTo: 'StackedFlatlist',
    },
  ] as THomeTab[],
};
