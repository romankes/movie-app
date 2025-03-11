import { palette } from '@palette';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { UseStylesArgs } from '../types';

export const useStyles = ({
  align,
  color,
  flex,
  isUnderline,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
}: UseStylesArgs) => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        text: {
          color: palette.text[color],
          textAlign: align,
          flex,
          fontFamily,
          fontSize,
          textDecorationLine: isUnderline ? 'underline' : 'none',
          lineHeight,
          fontWeight,
        },
      }),
    [
      align,
      color,
      flex,
      isUnderline,
      fontFamily,
      fontSize,
      fontWeight,
      lineHeight,
    ],
  );

  return { styles };
};
