import { useQuery } from '@tanstack/react-query';

import { UseGetGenres } from './types';

import { getGenres } from '../../api';

export const useGetGenres: UseGetGenres = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['genres'],
    queryFn: getGenres,
    initialData: {
      genres: {},
    },
  });

  return {
    genres: data.genres,
    isLoading,
  };
};
