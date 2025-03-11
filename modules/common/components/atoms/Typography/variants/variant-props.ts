import { Fonts } from '@fonts';
import { TextStyle } from 'react-native';

type PropertyKeys = 'fontSize' | 'lineHeight' | 'fontWeight';

export type Properties = Pick<TextStyle, PropertyKeys> & {
  fontFamily: Fonts;
};

export type Variant = () => Partial<Properties>;
