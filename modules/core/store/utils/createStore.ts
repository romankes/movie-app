import AsyncStorage from '@react-native-async-storage/async-storage';
import { create, StateCreator, StoreApi, UseBoundStore } from 'zustand';
import { createJSONStorage, persist, PersistOptions } from 'zustand/middleware';

import { StoreResetFunctions } from '../constants';
import { StoreNames } from '../types';

export const createStore = <T>(
  stateCreator: StateCreator<T, [], []>,
  name: StoreNames,
  shouldBePersisted: boolean = true,
): UseBoundStore<StoreApi<T>> => {
  const persistOptions: PersistOptions<T> = {
    name,
    storage: createJSONStorage(() => AsyncStorage),
  };

  const store = create<T, [['zustand/persist', T]] | []>(
    shouldBePersisted ? persist<T>(stateCreator, persistOptions) : stateCreator,
  );

  const initialState = store.getState();

  ['all' as StoreNames, name].forEach((storeKey: StoreNames) => {
    const list = StoreResetFunctions.get(storeKey) ?? new Set();

    list.add(() => {
      store.setState(initialState, true);
    });

    StoreResetFunctions.set(storeKey, list);
  });

  return store as UseBoundStore<StoreApi<T>>;
};
