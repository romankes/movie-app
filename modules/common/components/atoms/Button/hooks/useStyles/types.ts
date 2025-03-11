import { CustomProps } from '../../types';
import { UseStyles } from '../../variants/types';

export type Args = Omit<
  CustomProps,
  'textStyle' | 'leftIcon' | 'rightIcon' | 'pressed'
> & {
  useAdditionalStyles: UseStyles;
};
