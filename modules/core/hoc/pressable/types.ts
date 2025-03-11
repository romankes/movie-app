import { PressableProps, ViewStyle } from 'react-native';

export type Props = PressableProps & {
  wrapperStyle?: ViewStyle;
};

export type ComponentProps = {
  pressed: boolean;
};

export type PropsWithPressed<T> = T & {
  pressed: boolean;
};
