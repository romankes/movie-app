import { pressable } from '@core/hoc';
import { PropsWithPressed } from '@core/hoc/pressable/types';
import { FC, useMemo } from 'react';
import { Animated, View } from 'react-native';

import { useAnimation, useStyles } from './hooks';
import { Props } from './types';
import * as variants from './variants';

const Component: FC<PropsWithPressed<Props>> = ({
  pressed,
  disabled = false,
  isLoading = false,
  loadingText = 'Loading...',
  size = 'default',
  borderRadius = 'square',
  font = 'Default',
  leftIcon,
  variant = 'primary',
  rightIcon,
  textStyle,
  children,
  ...rest
}) => {
  const { useStyles: useAdditionalStyles, ...varianConfig } =
    variants[variant]();

  const { textColor: color, ...containerStyles } = useAnimation({
    ...varianConfig,
    pressed,
  });

  const { styles } = useStyles({
    useAdditionalStyles,
    disabled,
    size,
    borderRadius,
    font,
  });

  const iconArgs = useMemo(() => {
    const iconColor = pressed
      ? varianConfig.pressedTextColor
      : varianConfig.defaultTextColor;

    return {
      color: disabled ? varianConfig.disabledTextColor : iconColor,
      style: disabled ? { opacity: 0.6 } : {},
    };
  }, [
    pressed,
    varianConfig.pressedTextColor,
    varianConfig.defaultTextColor,
    varianConfig.disabledTextColor,
    disabled,
  ]);

  const renderLeftIcon = useMemo(
    () => !isLoading && leftIcon?.(iconArgs),
    [isLoading, iconArgs, leftIcon],
  );

  const renderRightIcon = useMemo(
    () => !isLoading && rightIcon?.(iconArgs),
    [isLoading, iconArgs, rightIcon],
  );

  return (
    <Animated.View
      style={[
        containerStyles,
        styles.container,
        disabled && {
          backgroundColor:
            varianConfig.disabledBackgroundColor ||
            containerStyles.backgroundColor,
          borderColor:
            varianConfig.disabledBorderColor || containerStyles.borderColor,
        },
      ]}
      {...rest}
    >
      <View style={styles.content}>
        {renderLeftIcon}
        {!!children && (
          <Animated.Text
            numberOfLines={1}
            ellipsizeMode="clip"
            style={[
              { color: disabled ? varianConfig.disabledTextColor : color },
              styles.text,
              textStyle,
            ]}
          >
            {isLoading ? loadingText : children}
          </Animated.Text>
        )}
        {renderRightIcon}
      </View>
    </Animated.View>
  );
};

export const Button = pressable<Omit<Props, 'pressed'>>(Component);
