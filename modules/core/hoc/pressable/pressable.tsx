import { FC, memo, useMemo } from 'react';
import { Pressable } from 'react-native';

import { ComponentProps, Props } from './types';

const mockFunction = (): undefined => {
  return undefined;
};

export const pressable = <T,>(
  Component: FC<T & ComponentProps>,
): FC<T & Props> =>
  memo((props) => {
    const onPress = useMemo(
      () => (props.disabled ? mockFunction : props.onPress),
      [props?.disabled, props?.onPress],
    );

    return (
      <Pressable style={props.wrapperStyle} onPress={onPress}>
        {({ pressed }) => (
          <Component {...props} pressed={props.disabled ? false : pressed} />
        )}
      </Pressable>
    );
  });
