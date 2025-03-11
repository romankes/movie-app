import { palette } from '@palette';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { Args } from './types';

export const useStyles = ({ isChecked = false, error }: Args) => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          flexDirection: 'row',
          alignItems: 'center',
          gap: 12,
        },
        checkbox: {
          height: 22,
          width: 22,

          alignItems: 'center',
          justifyContent: 'center',

          borderRadius: 3,
          borderWidth: isChecked ? 0 : 1,
          borderColor: error ? palette.text.primary : palette.text.primary,

          backgroundColor: isChecked
            ? palette.text.primary
            : palette.text.primary,
        },
      }),
    [isChecked, error],
  );

  return { styles };
};
