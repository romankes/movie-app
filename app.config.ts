import { ConfigContext, ExpoConfig } from 'expo/config';

import common from './config/environments/common.json';
import development from './config/environments/development.json';
import production from './config/environments/production.json';
import staging from './config/environments/staging.json';
import plugins from './config/plugins.json';

const commonConfig: Partial<ExpoConfig> = {
  ...(common as Partial<ExpoConfig>),
  plugins: plugins as ExpoConfig['plugins'],
};

export type PlainObject = Record<string, unknown>;

export const isPlainObject = (value: unknown): value is PlainObject => {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
};

const mergeExpoConfigs = <
  T extends Partial<ExpoConfig>,
  U extends Partial<ExpoConfig>,
>(
  obj1: T,
  obj2: U,
): T & U => {
  const result = { ...obj1 };

  Object.keys(obj2).forEach((key) => {
    const value1 = result[key as keyof T];
    const value2 = obj2[key as keyof U];

    if (isPlainObject(value1) && isPlainObject(value2)) {
      result[key] = mergeExpoConfigs(value1, value2);
    } else {
      result[key] = value2;
    }
  });

  return result as T & U;
};

const configs = [development, staging, production].map(
  (config) =>
    mergeExpoConfigs(commonConfig, config as Partial<ExpoConfig>) as ExpoConfig,
);

export default ({ config }: ConfigContext): ExpoConfig => {
  if (process.env.APP_ENV === 'development') {
    return { ...config, ...configs[0] } as ExpoConfig;
  }

  if (process.env.APP_ENV === 'staging') {
    return { ...config, ...configs[1] } as ExpoConfig;
  }

  return { ...config, ...configs[2] } as ExpoConfig;
};
