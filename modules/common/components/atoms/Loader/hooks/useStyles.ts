import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

export const useStyles = () => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          paddingVertical: 64,
        },
      }),
    [],
  );

  return { styles };
};
