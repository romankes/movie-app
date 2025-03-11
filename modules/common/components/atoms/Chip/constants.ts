import { Fonts } from '@fonts';
import { palette } from '@palette';

export const STATES = {
  default: {
    background: palette.background.primary,
    text: palette.text.hints,
    border: palette.text.hints,
  },
  active: {
    background: palette.background.tertiary,
    text: palette.text.accent,
    border: palette.background.tertiary,
  },
  disabled: {
    background: palette.system.disabled,
    text: palette.text.white,
    border: palette.text.hints,
  } as const,
};

export const SIZES = {
  small: {
    wrapper: {
      paddingVertical: 2,
      paddingHorizontal: 4,
    },
    text: {
      fontSize: 11,
      lineHeight: 15.4,
      fontWeight: '400',
      fontFamily: Fonts.Default,
    },
  },
  default: {
    wrapper: {
      paddingVertical: 6,
      paddingHorizontal: 12,
    },
    text: {
      fontSize: 16,
      lineHeight: 22.4,
      fontWeight: '500',
      fontFamily: Fonts.SemiBold,
    },
  },
} as const;
