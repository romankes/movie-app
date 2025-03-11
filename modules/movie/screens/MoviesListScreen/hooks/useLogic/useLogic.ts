import { useGetGenres } from '@genre/hooks';
import { Genre } from '@genre/types';
import { useGetMovies } from '@movie/hooks';
import { useMovieStore } from '@movie/store';
import { useCallback, useMemo, useState } from 'react';

import { isPassedGenreFilter, isPassedMovieTitleFilter } from './helpers';

import { useModalStore } from '@/modules/common/stores';
import { Movie } from '@/modules/movie/types';

export const useLogic = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);

  const { fetchNextPage, isFetchingNextPage, isLoading, movies } =
    useGetMovies();

  const { genres, isLoading: isGenresFetching } = useGetGenres();

  const { favoriteMovies, toggleFavoriteMovie } = useMovieStore();
  const { setPayload } = useModalStore();

  const populateGenres = useCallback(
    (ids: number[]) => ids.map((id) => genres[id] as Genre),
    [genres],
  );

  const checkIfMovieIsFavorite = useCallback(
    ({ id }: Movie) => favoriteMovies.some((movie) => movie.id === id),
    [favoriteMovies],
  );

  const onPressFavoriteTab = useCallback(() => setIsFavorite(true), []);
  const onPressDefaultTab = useCallback(() => setIsFavorite(false), []);
  const onResetSearch = useCallback(() => setSearch(''), [setSearch]);

  const onOpenFiltersModal = useCallback(() => {
    setPayload({
      variant: 'FiltersModal',
      params: {
        selectedGenres,
        setSelectedGenres,
      },
    });
  }, [setPayload, selectedGenres, setSelectedGenres]);

  const filteredMovies = useMemo(
    () =>
      (isFavorite ? favoriteMovies : movies).filter(
        ({ title, genre_ids }) =>
          isPassedMovieTitleFilter(title, search) &&
          isPassedGenreFilter(genre_ids, selectedGenres),
      ),
    [isFavorite, favoriteMovies, movies, search, selectedGenres],
  );

  return {
    populateGenres,
    isGenresFetching,
    isFetchingNextPage,
    fetchNextPage,
    isLoading,
    movies: filteredMovies,
    checkIfMovieIsFavorite,
    toggleFavoriteMovie,
    onPressDefaultTab,
    onPressFavoriteTab,
    isFavorite,
    search,
    setSearch,
    onResetSearch,
    onOpenFiltersModal,
  };
};
