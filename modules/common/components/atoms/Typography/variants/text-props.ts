import { Fonts } from '@fonts';
import { palette } from '@palette';
import { TextProps, TextStyle } from 'react-native';

import * as variants from '.';

type BaseProps = {
  align: 'center' | 'left' | 'right';
  color: keyof typeof palette.text;
  isUnderline: boolean;
  flex?: number;
};
type PropertyKeys = 'fontSize' | 'lineHeight' | 'fontWeight';

export type UseStylesArgs = BaseProps &
  Pick<TextStyle, PropertyKeys> & {
    fontFamily: Fonts;
  };

export type CustomProps = Partial<BaseProps> & {
  variant?: keyof typeof variants;
};

export type Props = TextProps & CustomProps;
