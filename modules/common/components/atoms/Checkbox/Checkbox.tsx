import { memo, useCallback } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { useStyles } from './hooks';
import { Props } from './types';

export const Checkbox = memo(({ label, onChange, isChecked, error }: Props) => {
  const _onChange = useCallback(() => {
    onChange(!isChecked);
  }, [onChange, isChecked]);

  const { styles } = useStyles({ isChecked, error });

  return (
    <TouchableOpacity
      disabled={!onChange}
      style={styles.wrapper}
      activeOpacity={0.6}
      onPress={_onChange}
    >
      <View style={styles.checkbox}>{isChecked && <Text>Checked</Text>}</View>
      {label}
    </TouchableOpacity>
  );
});
