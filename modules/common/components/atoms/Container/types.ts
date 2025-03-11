import { ViewProps } from 'react-native';

import { GAPS } from './constants';

export type CustomProps = {
  gap?: keyof typeof GAPS;
  type?: 'margin' | 'padding';
};

export type Props = ViewProps & CustomProps & {};
