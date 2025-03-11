import { useInitializeApp, useInitializeFonts } from '@core-hooks';

export const useLogic = () => {
  const { areFontsLoaded } = useInitializeFonts();

  const isAdditionalInitialized = [areFontsLoaded].every(
    (condition) => condition,
  );

  const { isInitialized } = useInitializeApp(isAdditionalInitialized);

  return {
    isInitialized,
  };
};
