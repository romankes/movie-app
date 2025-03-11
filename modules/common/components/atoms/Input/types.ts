import { Fonts } from '@fonts';
import { MutableRefObject, ReactNode } from 'react';
import { TextInput, TextInputProps, ViewStyle } from 'react-native';

import { BORDER_RADIUSES, SIZES } from './constants';

export type CustomProps = {
  borderRadius?: keyof typeof BORDER_RADIUSES;

  disabled?: boolean;

  error?: string;
  font?: keyof typeof Fonts;

  hasNotError?: boolean;

  leftIcon?: ReactNode;

  rightIcon?: ReactNode;

  size?: keyof typeof SIZES;
  type?: 'primary';
  wrapperStyle?: ViewStyle;
};

type ExcludedProps =
  | 'onChange'
  | 'onChangeText'
  | 'value'
  | 'placeholderTextColor'
  | 'readOnly';

export type Props = Omit<TextInputProps, ExcludedProps> &
  CustomProps & {
    onChange: (value: string) => void;
    value: string;
    inputRef?: MutableRefObject<TextInput>;
  };
