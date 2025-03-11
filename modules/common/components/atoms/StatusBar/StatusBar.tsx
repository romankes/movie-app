import { palette } from '@palette';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { FC } from 'react';

import { Props } from './types';

export const StatusBar: FC<Props> = ({ backgroundColor, contentStyle }) => {
  return (
    <ExpoStatusBar
      backgroundColor={palette.background[backgroundColor]}
      style={contentStyle}
    />
  );
};
