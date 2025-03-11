import { Fonts } from '@fonts';

import { Variant } from './variant-props';

export const body16SemiBold: Variant = () => ({
  fontSize: 16,
  fontFamily: Fonts.SemiBold,
  fontWeight: '500',
  lineHeight: 22.4,
});
