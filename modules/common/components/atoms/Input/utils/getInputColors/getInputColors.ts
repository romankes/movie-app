import { VARIATIONS } from './constants';
import { ColorSet, Options } from './types';

export const getInputColors = (
  type: keyof typeof VARIATIONS,
  { focused, disabled, error }: Options,
): ColorSet => {
  const colors = VARIATIONS[type];

  if (disabled) {
    return colors.disabled;
  }

  if (focused) {
    return colors.focused;
  }

  if (error) {
    return colors.error;
  }

  return colors.default;
};
