import { palette } from '@palette';
import { StatusBarStyle } from 'expo-status-bar';

export type Props = {
  backgroundColor: keyof typeof palette.background;
  contentStyle: StatusBarStyle;
};
