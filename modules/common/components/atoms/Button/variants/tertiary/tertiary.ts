import { palette } from '@palette';

import { useStyles } from './styles';

import { Variant } from '../types';

export const tertiary: Variant = () => ({
  defaultBackgroundColor: palette.background.primary,
  pressedBackgroundColor: palette.background.tertiary,
  defaultTextColor: palette.text.accent,
  pressedTextColor: palette.text.accent,
  disabledBackgroundColor: palette.background.primary,
  disabledTextColor: palette.system.disabled,
  useStyles,
});
