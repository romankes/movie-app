import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { GAPS } from '../constants';
import { CustomProps } from '../types';

export const useStyles = ({ gap, type }: CustomProps) => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          [`${type}Horizontal`]: gap ? GAPS[gap] : undefined,
        },
      }),
    [gap, type],
  );

  return { styles };
};
