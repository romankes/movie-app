import { Modal, StatusBar } from '@components';
import { queryClient } from '@core/services';
import { useReactQueryDevTools } from '@dev-plugins/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { Stack } from 'expo-router';
import { FC, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useLogic, useStyles } from './hooks';

const asyncStoragePersister = createAsyncStoragePersister({
  storage: AsyncStorage,
  key: 'V0',
});

const withQuery = (Component: FC) => () => {
  const [isClientLoaded, setIsClientLoaded] = useState(false);

  useReactQueryDevTools(queryClient);

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister: asyncStoragePersister }}
      onSuccess={() => {
        setIsClientLoaded(true);
      }}
    >
      {isClientLoaded && <Component />}
    </PersistQueryClientProvider>
  );
};

export const RootLayout: FC = withQuery(() => {
  const { isInitialized } = useLogic();
  const { styles } = useStyles();

  if (!isInitialized) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Modal />
      <StatusBar backgroundColor="primary" contentStyle="dark" />
      <SafeAreaView style={styles.wrapper}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(app)" />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
});
