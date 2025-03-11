import { palette } from '@palette';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

export const useStyles = () => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          backgroundColor: palette.background.primary,
          flex: 1,
        },
        header: {
          paddingBottom: 8,
          gap: 12,
        },
        filters: {
          flexDirection: 'row',
          gap: 16,
        },
        button: {
          flex: 1,
        },
        list: {
          backgroundColor: palette.background.primary,
        },
        empty: {
          marginTop: 128,
        },
      }),
    [],
  );

  return { styles };
};
