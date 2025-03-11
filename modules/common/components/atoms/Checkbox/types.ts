import { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';

export type CustomProps = {
  isChecked: boolean;
  label: ReactNode;

  onChange: (value: boolean) => void;
  error?: string;
};

export type Props = CustomProps &
  Omit<TouchableOpacityProps, 'onPress' | 'activeOpacity'>;
