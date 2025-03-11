import { FC } from 'react';
import { KeyboardAvoidingView as RNKeyboardAvoidingView } from 'react-native';

import { KEYBOARD_BEHAVIOR } from './constants';
import { Props } from './types';

export const KeyboardAvoidingView: FC<Props> = ({
  keyboardVerticalOffset,
  ...props
}) => {
  return (
    <RNKeyboardAvoidingView
      {...props}
      behavior={KEYBOARD_BEHAVIOR}
      keyboardVerticalOffset={keyboardVerticalOffset}
    />
  );
};
