import { StoreResetFunctions } from '../constants';
import { StoreNames } from '../types';

export const resetStores = (stores: StoreNames[]): void => {
  stores.forEach((storeKey) => {
    const list = StoreResetFunctions.get(storeKey);

    if (list) {
      list.forEach((reset) => reset());
    }
  });
};
