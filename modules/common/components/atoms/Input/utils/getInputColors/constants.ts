import { palette } from '@palette';

export const VARIATIONS = {
  primary: {
    default: {
      text: palette.text.primary,
      border: palette.system.stroke,
      background: palette.background.primary,
    },
    error: {
      text: palette.text.primary,
      border: palette.colors.red,
      background: palette.background.primary,
    },
    focused: {
      text: palette.text.primary,
      border: palette.text.accent,
      background: palette.background.primary,
    },
    disabled: {
      text: palette.system.darkStroke,
      border: palette.system.darkStroke,
      background: palette.background.primary,
    },
  },
};
