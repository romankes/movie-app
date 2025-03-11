import { Movie } from '../../types';

export interface Result {
  fetchNextPage: () => void;
  isFetchingNextPage: boolean;
  isLoading: boolean;
  meta: {
    totalCount: number;
    totalPages: number;
  };
  movies: Movie[];
}

export type UseGetMovies = () => Result;
