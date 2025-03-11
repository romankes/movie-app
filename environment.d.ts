declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_NAME: string;
      EXPO_PUBLIC_API_URL: string;
      EXPO_PUBLIC_API_KEY: string;
      IOS_BUNDLE_IDENTIFIER: string;
      ANDROID_PACKAGE: string;
      APP_ENV: string;
    }
  }
}

export {};
