import { RenderIcon } from '@common/types';
import { Fonts } from '@fonts';
import { TextStyle, ViewProps } from 'react-native';

import { BORDER_RADIUSES, SIZES } from './constants';
import * as variants from './variants';

export type CustomProps = {
  pressed: boolean;
  borderRadius?: keyof typeof BORDER_RADIUSES;
  disabled?: boolean;

  font?: keyof typeof Fonts;
  isLoading?: boolean;

  leftIcon?: RenderIcon;

  loadingText?: string;
  rightIcon?: RenderIcon;
  size?: keyof typeof SIZES;
  textStyle?: TextStyle;
};

export type Props = CustomProps &
  ViewProps & {
    variant?: keyof typeof variants;
  };
