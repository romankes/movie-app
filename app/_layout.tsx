import { initAxios } from '@core/services';
import * as SplashScreen from 'expo-splash-screen';

import 'react-native-reanimated';

initAxios();
void SplashScreen.preventAutoHideAsync();

export { RootLayout as default } from '@navigation/layouts';
