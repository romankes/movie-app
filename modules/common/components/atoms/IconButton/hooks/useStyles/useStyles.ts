import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { Args } from './types';

export const useStyles = ({ disabled, size }: Args) => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          opacity: disabled ? 0.5 : 1,

          height: size,
          width: size,

          justifyContent: 'center',
          alignItems: 'center',

          borderRadius: 12,
          aspectRatio: 1,
        },
      }),
    [disabled, size],
  );

  return { styles };
};
