import { SplashScreen } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';

import { Runner, UseInitializeApp } from './types';

export const useInitializeApp = (
  additionalInitialized: boolean,
  runner?: Runner,
): UseInitializeApp => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (isInitialized && additionalInitialized) {
      void SplashScreen.hideAsync();
    }
  }, [isInitialized, additionalInitialized]);

  const run = useCallback(async () => {
    await runner?.();

    setIsInitialized(true);
  }, [runner, setIsInitialized]);

  useEffect(() => {
    void run();
  }, [run]);

  return { isInitialized };
};
