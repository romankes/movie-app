import { useInfiniteQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import { UseGetMovies } from './types';

import { getMovies } from '../../api';

export const useGetMovies: UseGetMovies = () => {
  const { data, fetchNextPage, isLoading, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['movies'],
      queryFn: ({ pageParam }) => getMovies({ page: pageParam }),
      getNextPageParam: (lastPage) => {
        const pagesCount = lastPage?.total_pages ?? 0;
        const lastPageCount = lastPage?.page ?? 0;

        if (pagesCount <= lastPageCount) {
          return undefined;
        }

        return lastPageCount + 1;
      },
      initialPageParam: 1,
    });

  const { movies, meta } = useMemo(() => {
    const _movies = data?.pages.flatMap((page) => page.results) || [];

    const _meta = {
      totalPages: 0,
      totalCount: 0,
    };

    if (data?.pages.length) {
      _meta.totalCount = data.pages[0]?.total_results || 0;
      _meta.totalPages = data.pages[0]?.total_pages || 0;
    }

    return { movies: _movies, meta: _meta };
  }, [data?.pages]);

  return {
    fetchNextPage,
    movies,
    meta,
    isLoading,
    isFetchingNextPage,
  };
};
