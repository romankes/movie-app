import { palette } from '@palette';

export const colors = {
  primary: {
    background: [
      palette.background.primary,
      palette.background.lightYellow,
    ] as [string, string],
    icon: [palette.colors.yellow, palette.colors.yellow] as [string, string],
  },
  secondary: {
    background: [palette.background.primary, palette.background.tertiary] as [
      string,
      string,
    ],
    icon: [palette.colors.blue, palette.colors.blue] as [string, string],
  },
};
