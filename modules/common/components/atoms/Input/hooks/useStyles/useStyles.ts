import { Fonts } from '@fonts';
import { palette } from '@palette';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { Args } from './types';

import { BORDER_RADIUSES, SIZES } from '../../constants';
import { getInputColors } from '../../utils';

export const useStyles = ({
  focused,
  borderRadius = 'square',
  disabled,
  error,
  font,
  size,
  type,
}: Required<Args>) => {
  const { background, border, text } = getInputColors(type, {
    disabled,
    focused,
    error,
  });

  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          gap: 8,
        },
        label: {
          color: text,
        },
        field: {
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8,

          paddingHorizontal: 12,

          borderWidth: 1,
          borderColor: border,
          borderRadius: BORDER_RADIUSES[borderRadius],

          backgroundColor: background,

          minHeight: SIZES[size].height,
        },
        input: {
          flex: 1,
          fontSize: SIZES[size].font,
          lineHeight: SIZES[size].lineHeight,
          fontFamily: Fonts[font],

          color: palette.text.primary,
          minHeight: SIZES[size].height,
        },
        inputWrapper: {
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
        },
        placeholder: {
          position: 'absolute',
          left: 6,
          top: 12,

          zIndex: 2,
        },
      }),
    [background, border, borderRadius, font, size, text],
  );

  return { styles };
};
