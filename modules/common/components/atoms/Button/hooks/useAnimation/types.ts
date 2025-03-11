import { Animated } from 'react-native';

import { VariantReturn } from '../../variants/types';

export type Args = Partial<Omit<VariantReturn, 'useStyles'>> & {
  pressed: boolean;
};

export type UseAnimationReturn = {
  backgroundColor: Animated.AnimatedInterpolation<string>;
  borderColor: Animated.AnimatedInterpolation<string>;
  opacity: Animated.AnimatedInterpolation<number>;
  textColor: string;
};
