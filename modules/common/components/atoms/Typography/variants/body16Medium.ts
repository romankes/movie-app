import { Fonts } from '@fonts';

import { Variant } from './variant-props';

export const body16Medium: Variant = () => ({
  fontSize: 16,
  fontFamily: Fonts.Medium,
  fontWeight: '600',
  lineHeight: 22.4,
});
