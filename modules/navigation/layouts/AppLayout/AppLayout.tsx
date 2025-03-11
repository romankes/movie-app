import { Stack } from 'expo-router';
import { FC } from 'react';

export const AppLayout: FC = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};
