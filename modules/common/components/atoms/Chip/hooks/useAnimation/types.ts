import { Animated } from 'react-native';

export interface UseAnimationProps {
  pressed: boolean;
}

export interface UseAnimationResult {
  backgroundColor: Animated.AnimatedInterpolation<string | number>;
  borderColor: Animated.AnimatedInterpolation<string | number>;
  textColor: Animated.AnimatedInterpolation<string | number>;
}
