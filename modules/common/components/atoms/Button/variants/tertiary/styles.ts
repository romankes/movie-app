import { Fonts } from '@fonts';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { UseStyles } from '../types';

export const useStyles: UseStyles = () => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          borderWidth: 0,
        },
        text: {
          fontFamily: Fonts.SemiBold,
        },
      }),
    [],
  );

  return { styles };
};
