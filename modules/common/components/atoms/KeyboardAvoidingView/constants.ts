import { KeyboardAvoidingViewProps, Platform } from 'react-native';

export const KEYBOARD_BEHAVIOR: KeyboardAvoidingViewProps['behavior'] =
  Platform.select({
    ios: 'padding',
    android: 'height',
  });
