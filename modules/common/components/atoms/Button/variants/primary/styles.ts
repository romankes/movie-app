import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { UseStyles } from '../types';

export const useStyles: UseStyles = () => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          borderWidth: 1,
        },
        text: {},
      }),
    [],
  );

  return { styles };
};
