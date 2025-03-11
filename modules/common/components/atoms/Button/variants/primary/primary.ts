import { palette } from '@palette';

import { useStyles } from './styles';

import { Variant } from '../types';

export const primary: Variant = () => ({
  defaultBackgroundColor: palette.background.accent,
  defaultBorderColor: palette.text.accent,
  defaultTextColor: palette.text.white,
  pressedTextColor: palette.text.white,
  pressedBackgroundColor: palette.background.bareAccent,

  disabledBackgroundColor: palette.background.bareAccent,
  disabledBorderColor: palette.background.bareAccent,
  disabledTextColor: palette.background.primary,
  useStyles,
});
