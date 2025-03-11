import { pressable } from '@core/hoc';
import { FC, useMemo } from 'react';
import { Animated, ViewProps } from 'react-native';

import { SIZES, STATES } from './constants';
import { useAnimation, useStyles } from './hooks';

interface PublicProps extends ViewProps {
  disabled?: boolean;
  isActive?: boolean;
  size?: keyof typeof SIZES;
}

export interface InternalProps extends PublicProps {
  pressed: boolean;
}

export const Component: FC<InternalProps> = ({
  size = 'default',
  pressed,
  children,
  disabled = false,
  isActive,
  ...rest
}) => {
  const { styles } = useStyles({ size });

  const { backgroundColor, textColor, borderColor } = useAnimation({
    pressed: useMemo(() => pressed || !!isActive, [isActive, pressed]),
  });

  return (
    <Animated.View
      {...rest}
      style={[
        styles.wrapper,
        {
          backgroundColor,
          borderColor,
        },
        disabled && {
          backgroundColor: STATES.disabled.background,
          borderColor: STATES.disabled.border,
        },
        rest.style,
      ]}
    >
      <Animated.Text
        style={[
          styles.text,
          { color: textColor },
          disabled && { color: STATES.disabled.text },
        ]}
      >
        {children}
      </Animated.Text>
    </Animated.View>
  );
};

export const Chip = pressable<PublicProps>(Component);
