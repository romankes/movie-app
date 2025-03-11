import { memo } from 'react';
import { View } from 'react-native';

import { useStyles } from './hooks';
import { Props } from './types';

export const Container = memo(
  ({ gap = 'default', type = 'padding', style, ...rest }: Props) => {
    const { styles } = useStyles({ gap, type });

    return <View {...rest} style={[styles.wrapper, style]} />;
  },
);
