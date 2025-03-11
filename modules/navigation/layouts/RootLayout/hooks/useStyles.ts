import { useMemo } from 'react';
import { StatusBar, StyleSheet } from 'react-native';

import { palette } from '@/modules/core/theme/palette';

const ADDITIONAL_GAP = 8;

export const useStyles = () => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          flex: 1,
          backgroundColor: palette.background.primary,

          paddingTop: (StatusBar.currentHeight || 0) + ADDITIONAL_GAP,
        },
      }),
    [],
  );

  return { styles };
};
