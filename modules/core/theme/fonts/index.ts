import { FontSource } from 'expo-font';

import mediumFont from './families/Poppins-Bold.ttf';
import extraBoldFont from './families/Poppins-ExtraBold.ttf';
import extraLightFont from './families/Poppins-ExtraLight.ttf';
import lightFont from './families/Poppins-Light.ttf';
import boldFont from './families/Poppins-Medium.ttf';
import defaultFont from './families/Poppins-Regular.ttf';
import semiBoldFont from './families/Poppins-SemiBold.ttf';

export enum Fonts {
  ExtraLight = 'extraLight',
  Light = 'light',
  Default = 'default',
  Medium = 'medium',
  Bold = 'bold',
  SemiBold = 'semiBold',
  ExtraBold = 'extraBold',
}

export const FAMILIES: Record<Fonts, FontSource> = {
  [Fonts.ExtraLight]: extraLightFont,
  [Fonts.Light]: lightFont,
  [Fonts.Default]: defaultFont,
  [Fonts.Medium]: mediumFont,
  [Fonts.Bold]: boldFont,
  [Fonts.SemiBold]: semiBoldFont,
  [Fonts.ExtraBold]: extraBoldFont,
};
