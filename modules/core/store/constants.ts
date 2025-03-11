import { StoreNames } from './types';

export const StoreResetFunctions = new Map<StoreNames, Set<() => void>>();
