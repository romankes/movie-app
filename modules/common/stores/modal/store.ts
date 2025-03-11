import { createStore } from '@core-store';

import { ModalStore } from './types';

const initialState: Omit<ModalStore, 'setPayload'> = {
  variant: null,
  params: {},
};

export const useModalStore = createStore<ModalStore>(
  (set) => ({
    ...initialState,
    setPayload: (payload) => set(payload || initialState),
  }),
  'modal',
  false,
);
