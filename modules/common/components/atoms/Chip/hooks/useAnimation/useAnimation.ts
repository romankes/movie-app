import { useEffect } from 'react';
import { Animated, useAnimatedValue } from 'react-native';

import { UseAnimationProps, UseAnimationResult } from './types';

import { STATES } from '../../constants';

const ANIMATION_DURATION = 100;

export const useAnimation = ({
  pressed,
}: UseAnimationProps): UseAnimationResult => {
  const animation = useAnimatedValue(pressed ? 1 : 0);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: pressed ? 1 : 0,
      useNativeDriver: true,
      duration: ANIMATION_DURATION,
    }).start();
  }, [animation, pressed]);

  const backgroundColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [STATES.default.background, STATES.active.background],
  });

  const textColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [STATES.default.text, STATES.active.text],
  });

  const borderColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [STATES.default.border, STATES.active.border],
  });

  return { backgroundColor, textColor, borderColor };
};
