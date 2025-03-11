/* eslint-disable @typescript-eslint/no-explicit-any */
import { useModalStore } from '@common/stores';
import { FC, useCallback } from 'react';
import { Modal as RNModal, Pressable, SafeAreaView } from 'react-native';

import { useStyles } from './hooks';

import { KeyboardAvoidingView } from '../../atoms';
import * as variants from '../../molecules/modals';

export const Modal: FC = () => {
  const { params, variant, setPayload } = useModalStore();

  const { styles } = useStyles();

  const Component = variant ? variants[variant] : () => null;

  const onClose = useCallback(() => setPayload(null), [setPayload]);

  return (
    <RNModal visible={!!variant} transparent onRequestClose={onClose}>
      <KeyboardAvoidingView style={styles.wrapper}>
        <SafeAreaView style={styles.wrapper}>
          <Pressable style={styles.overlay} onPress={onClose} />
          <Component {...(params as any)} />
        </SafeAreaView>
      </KeyboardAvoidingView>
    </RNModal>
  );
};
