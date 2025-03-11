import { palette } from '@palette';

import { useStyles } from './styles';

import { Variant } from '../types';

export const secondary: Variant = () => ({
  defaultBackgroundColor: palette.background.primary,
  defaultBorderColor: palette.background.accent,
  defaultTextColor: palette.text.accent,
  pressedTextColor: palette.text.accent,
  pressedBackgroundColor: palette.background.tertiary,
  pressedBorderColor: palette.background.accent,

  disabledBackgroundColor: palette.background.primary,
  disabledBorderColor: palette.system.darkStroke,
  disabledTextColor: palette.system.disabled,
  useStyles,
});
