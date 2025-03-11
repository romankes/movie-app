import { useEffect, useMemo } from 'react';
import { Animated, useAnimatedValue } from 'react-native';

import { ANIMATION_DURATION } from './constants';
import { Args, UseAnimationReturn } from './types';

const DEFAULT_VALUE = 'transparent';

export const useAnimation = ({
  pressed,
  defaultBackgroundColor = DEFAULT_VALUE,
  defaultBorderColor = DEFAULT_VALUE,
  defaultTextColor = DEFAULT_VALUE,
  isTouchableOpacity = false,
  pressedBackgroundColor = DEFAULT_VALUE,
  pressedBorderColor = DEFAULT_VALUE,
  pressedTextColor = DEFAULT_VALUE,
}: Args): UseAnimationReturn => {
  const colorAnimation = useAnimatedValue(0);
  const opacityAnimation = useAnimatedValue(0);

  useEffect(() => {
    const animation = isTouchableOpacity ? opacityAnimation : colorAnimation;

    Animated.timing(animation, {
      toValue: pressed ? 1 : 0,
      useNativeDriver: true,
      duration: ANIMATION_DURATION,
    }).start();
  }, [opacityAnimation, colorAnimation, pressed, isTouchableOpacity]);

  const backgroundColor = useMemo(
    () =>
      colorAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [defaultBackgroundColor, pressedBackgroundColor],
      }),
    [colorAnimation, defaultBackgroundColor, pressedBackgroundColor],
  );

  const textColor = pressed ? pressedTextColor : defaultTextColor;

  const borderColor = useMemo(
    () =>
      colorAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [defaultBorderColor, pressedBorderColor],
      }),
    [colorAnimation, defaultBorderColor, pressedBorderColor],
  );

  const opacity = useMemo(
    () =>
      opacityAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0.6],
      }),
    [opacityAnimation],
  );

  return { backgroundColor, textColor, opacity, borderColor };
};
