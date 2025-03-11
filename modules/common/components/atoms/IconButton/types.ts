import { ReactNode } from 'react';
import { ViewProps } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { colors } from './constants';

export type CustomProps = {
  renderIcon: (props: SvgProps) => ReactNode;
  disabled?: boolean;
  pressable?: boolean;
  size?: number;
  type?: keyof typeof colors;
};

export type InternalProps = CustomProps &
  ViewProps & {
    pressed: boolean;
  };

export type PublicProps = CustomProps & Omit<ViewProps, 'children'>;
