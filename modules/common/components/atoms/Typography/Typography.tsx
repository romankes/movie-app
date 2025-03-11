import { Fonts } from '@fonts';
import { FC } from 'react';
import { Text as RNText } from 'react-native';

import { useStyles } from './hooks';
import { Props } from './types';
import * as variants from './variants';

export const Typography: FC<Props> = ({
  align = 'left',
  flex,
  isUnderline = false,
  variant = 'body14Regular',
  color = 'primary',
  ...rest
}) => {
  const {
    fontFamily = Fonts.Default,
    fontSize = 14,
    fontWeight = '400',
    lineHeight = 16,
  } = variants[variant as keyof typeof variants]();

  const { styles } = useStyles({
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    align,
    flex,
    isUnderline,
    color,
  });

  return <RNText {...rest} style={[styles.text, rest.style]} />;
};
