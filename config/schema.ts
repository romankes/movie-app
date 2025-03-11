import { z } from 'zod';

const envConfigSchema = z.object({
  EXPO_PUBLIC_API_URL: z.string().min(1),
  EXPO_PUBLIC_API_KEY: z.string().min(1),
});

// !IMPORTANT
// * should necessary be declared the way below, otherwise variables will be undefined
// * See more https://docs.expo.dev/guides/environment-variables/#how-to-read-from-environment-variables
export const envConfig = envConfigSchema.parse({
  EXPO_PUBLIC_API_URL: process.env.EXPO_PUBLIC_API_URL,
  EXPO_PUBLIC_API_KEY: process.env.EXPO_PUBLIC_API_KEY,
});

export type Config = z.infer<typeof envConfigSchema>;
