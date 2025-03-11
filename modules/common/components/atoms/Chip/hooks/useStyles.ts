import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { SIZES } from '../constants';

interface Props {
  size: keyof typeof SIZES;
}

export const useStyles = ({ size }: Props) => {
  const { text, wrapper } = SIZES[size];

  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          ...wrapper,
          alignSelf: 'flex-start',
          borderRadius: 8,

          borderWidth: 1,
        },
        text: {
          ...text,
        },
      }),
    [text, wrapper],
  );

  return { styles };
};
