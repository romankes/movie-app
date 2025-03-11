import { useFonts } from 'expo-font';

import { UseInitializeFonts } from './types';

import { FAMILIES } from '../../theme/fonts';

export const useInitializeFonts: UseInitializeFonts = () => {
  const [areFontsLoaded, error] = useFonts(FAMILIES);

  if (error) {
    console.error(error);
  }

  return {
    areFontsLoaded,
  };
};
