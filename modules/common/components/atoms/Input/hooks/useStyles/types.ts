import { CustomProps } from '../../types';

export type Args = Pick<
  CustomProps,
  'borderRadius' | 'font' | 'size' | 'disabled' | 'error' | 'type'
> & {
  focused: boolean;
};
