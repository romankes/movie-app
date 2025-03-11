import { Genre } from '../../types';

export interface Result {
  genres: Record<number, Genre>;
  isLoading: boolean;
}

export type UseGetGenres = () => Result;
