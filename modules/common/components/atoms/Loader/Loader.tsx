import { palette } from '@palette';
import { memo } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { useStyles } from './hooks';

export const Loader = memo(() => {
  const { styles } = useStyles();

  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size="large" color={palette.text.accent} />
    </View>
  );
});
