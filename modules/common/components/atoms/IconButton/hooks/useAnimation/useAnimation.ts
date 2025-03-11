import { useEffect, useMemo } from 'react';
import { Animated, useAnimatedValue } from 'react-native';

import { ANIMATION_DURATION } from './constants';
import { Args, UseAnimationReturn } from './types';

export const useAnimation = ({
  pressed,
  pressable = true,
  colors,
}: Args): UseAnimationReturn => {
  const animation = useAnimatedValue(pressed && pressable ? 1 : 0);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: !pressed || !pressable ? 0 : 1,
      useNativeDriver: true,
      duration: ANIMATION_DURATION,
    }).start();
  }, [pressed, pressable, animation]);

  const backgroundColor = useMemo(
    () =>
      animation.interpolate({
        inputRange: [0, 1],
        outputRange: colors,
      }),
    [animation, colors],
  );

  return { backgroundColor };
};
