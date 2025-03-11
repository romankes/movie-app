import { Fonts } from '@fonts';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { Args } from './types';

import { BORDER_RADIUSES, SIZES } from '../../constants';

export const useStyles = ({
  size = 'default',
  font = 'Default',
  borderRadius = 'round',
  disabled,
  useAdditionalStyles,
}: Args) => {
  const { styles: additionalStyles } = useAdditionalStyles();

  const _styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          paddingHorizontal: 14,
          paddingVertical: 10,
          borderRadius: BORDER_RADIUSES[borderRadius],
          borderWidth: 1,
          height: SIZES[size].height,
          ...additionalStyles.container,
          ...(disabled && { opacity: 0.6 }),
        },
        content: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 4,

          flex: 1,
        },
        text: {
          fontSize: SIZES[size].font,
          lineHeight: SIZES[size].lineHeight,
          fontFamily: Fonts[font],

          ...additionalStyles.text,
        },
      }),
    [
      borderRadius,
      disabled,
      size,
      additionalStyles.container,
      additionalStyles.text,
      font,
    ],
  );

  return { styles: _styles };
};
