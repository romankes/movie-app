import * as variants from '@common/components/molecules/modals';

type VariantType = ModalStore['variant'];

export type ModalStore = {
  params: VariantType extends null
    ? null
    : Parameters<(typeof variants)[NonNullable<VariantType>]>['0'];
  setPayload: (payload: Omit<ModalStore, 'setPayload'> | null) => void;

  variant: keyof typeof variants | null;
};
