import { TextStyle, ViewStyle } from 'react-native';

type Styles = {
  container: ViewStyle;
  text: TextStyle;
};

export type UseStyles = () => { styles: Styles };

export type VariantReturn = {
  defaultBackgroundColor: string;

  defaultBorderColor: string;
  defaultTextColor: string;
  disabledBackgroundColor: string;

  disabledBorderColor: string;

  disabledTextColor: string;
  isTouchableOpacity: boolean;

  pressedBackgroundColor: string;
  pressedBorderColor: string;
  pressedTextColor: string;
};

export type Variant = () => Partial<VariantReturn> & { useStyles: UseStyles };
