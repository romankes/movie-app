import { Animated } from 'react-native';

export type Args = {
  colors: [string, string];

  pressed: boolean;
  pressable?: boolean;
};

export type UseAnimationReturn = {
  backgroundColor: Animated.AnimatedInterpolation<string>;
};
