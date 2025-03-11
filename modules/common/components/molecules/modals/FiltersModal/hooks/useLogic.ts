import { useCallback, useMemo, useState } from 'react';

import { Props } from '../types';

import { useModalStore } from '@/modules/common/stores';
import { useGetGenres } from '@/modules/genre/hooks';

export const useLogic = ({ selectedGenres, setSelectedGenres }: Props) => {
  const { genres: genresRecord } = useGetGenres();
  const { setPayload } = useModalStore();

  const [_selectedGenres, _setSelectedGenres] = useState(selectedGenres);

  const genres = useMemo(
    () => Object.values(genresRecord).flatMap((genre) => genre),
    [genresRecord],
  );

  const onClose = useCallback(() => setPayload(null), [setPayload]);

  const onReset = useCallback(() => {
    setSelectedGenres([]);
    onClose();
  }, [setSelectedGenres, onClose]);

  const onSubmit = useCallback(() => {
    setSelectedGenres(_selectedGenres);
    onClose();
  }, [setSelectedGenres, onClose, _selectedGenres]);

  const checkIfSelected = useCallback(
    (id: number) => _selectedGenres.includes(id),
    [_selectedGenres],
  );

  const toggleSelected = (id: number) => () =>
    _setSelectedGenres((prev) => {
      const index = prev.indexOf(id);

      if (index === -1) {
        return [...prev, id];
      }

      return [...prev.slice(0, index), ...prev.slice(index + 1)];
    });

  return {
    genres,
    onReset,
    onSubmit,
    checkIfSelected,
    toggleSelected,
  };
};
