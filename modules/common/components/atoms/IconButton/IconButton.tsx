import { pressable } from '@core/hoc';
import { memo, useMemo } from 'react';
import { Animated } from 'react-native';

import { colors } from './constants';
import { useAnimation, useStyles } from './hooks';
import { InternalProps, PublicProps } from './types';

const Component = memo(
  ({
    pressed,
    disabled,
    size = 32,
    pressable: isPressable,
    type = 'primary',
    renderIcon,
    ...rest
  }: InternalProps) => {
    const { background, icon } = colors[type];

    const { styles } = useStyles({ disabled, size });

    const { backgroundColor } = useAnimation({
      pressed,
      pressable: isPressable,
      colors: background,
    });

    const _renderIcon = useMemo(
      () => renderIcon({ color: icon[pressed ? 1 : 0] }),
      [renderIcon, icon, pressed],
    );

    return (
      <Animated.View
        {...rest}
        style={[styles.wrapper, { backgroundColor }, rest.style]}
      >
        {_renderIcon}
      </Animated.View>
    );
  },
);

export const IconButton = pressable<PublicProps>(Component);
