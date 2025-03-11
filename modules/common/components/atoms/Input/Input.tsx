import { palette } from '@palette';
import { memo, useCallback, useRef, useState } from 'react';
import {
  NativeSyntheticEvent,
  Pressable,
  TextInput,
  TextInputFocusEventData,
  View,
} from 'react-native';

import { useStyles } from './hooks';
import { Props } from './types';

import { Typography } from '../Typography';

export const Input = memo(
  ({
    error = '',

    onChange,
    value,
    size = 'default',
    borderRadius = 'square',
    font = 'Default',
    hasNotError,
    wrapperStyle,
    inputRef,
    leftIcon,
    rightIcon,
    style,
    disabled = false,
    type = 'primary',
    ...rest
  }: Props) => {
    const [isFocused, setIsFocused] = useState(false);

    const ref = useRef<TextInput>();

    const { styles } = useStyles({
      borderRadius,
      font,
      size,
      focused: isFocused,
      disabled,
      error,
      type,
    });

    const onSetRef = useCallback(
      (input: TextInput) => {
        ref.current = input;

        if (inputRef) {
          inputRef.current = input;
        }
      },
      [inputRef],
    );

    const onPress = useCallback(() => {
      ref.current?.focus();
    }, []);

    const onFocus = useCallback(
      (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setIsFocused(true);
        rest?.onFocus?.(e);
      },
      [rest],
    );

    const onBlur = useCallback(
      (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setIsFocused(false);
        rest?.onBlur?.(e);
      },
      [rest],
    );

    return (
      <View style={[styles.wrapper, wrapperStyle]}>
        <Pressable style={[styles.field]} onPress={onPress}>
          {leftIcon}
          <View style={styles.inputWrapper}>
            {!value && !!rest.placeholder && (
              <Typography style={styles.placeholder} color="hints">
                {rest.placeholder}
              </Typography>
            )}
            <TextInput
              {...rest}
              placeholder=""
              readOnly={disabled}
              style={[styles.input, style]}
              ref={onSetRef}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              onFocus={onFocus}
              placeholderTextColor={palette.text.hints}
            />
          </View>

          {rightIcon}
        </Pressable>
        {!hasNotError && (
          <Typography variant="body12Regular" color="danger">
            {error as string}
          </Typography>
        )}
      </View>
    );
  },
);
