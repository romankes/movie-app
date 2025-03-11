import { palette } from '@palette';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

export const useStyles = () => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        overlay: {
          position: 'absolute',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,

          backgroundColor: palette.system.overlay,
          zIndex: 1,
        },
        wrapper: {
          flex: 1,
        },
      }),
    [],
  );

  return { styles };
};
