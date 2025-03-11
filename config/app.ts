import { envConfig } from './schema';

export const appConfig = {
  apiUrl: envConfig.EXPO_PUBLIC_API_URL,
  apiKey: envConfig.EXPO_PUBLIC_API_KEY,
};
