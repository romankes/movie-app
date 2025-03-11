declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';

  const content: React.FC<SvgProps>;
  export default content;
}

declare module '*.png' {
  import { ImageSourcePropType } from 'react-native';

  const image: ImageSourcePropType;
  export default image;
}

declare module '*.ttf' {
  import { FontSource } from 'expo-font';

  const font: FontSource;
  export default font;
}
