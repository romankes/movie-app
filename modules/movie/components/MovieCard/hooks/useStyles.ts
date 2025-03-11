import { palette } from '@palette';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

export const useStyles = () => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          borderWidth: 1,
          borderRadius: 12,
          borderColor: palette.system.stroke,

          marginVertical: 8,
          padding: 12,

          flexDirection: 'row',
          gap: 8,
        },
        content: {
          flex: 1,
          paddingTop: 8,
        },
        header: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',

          marginBottom: 4,
        },
      }),
    [],
  );

  return { styles };
};
