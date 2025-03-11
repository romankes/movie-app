import { palette } from '@palette';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

export const useStyles = () => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          flex: 1,
          justifyContent: 'center',
        },
        content: {
          backgroundColor: palette.background.primary,
          zIndex: 2,

          paddingVertical: 12,

          borderRadius: 8,
          gap: 8,
        },
        list: {
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 6,
        },
        footer: {
          paddingVertical: 12,
          flexDirection: 'row',
          gap: 12,
        },
        button: {
          flex: 1,
        },
      }),
    [],
  );

  return { styles };
};
