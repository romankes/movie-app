import { createStore } from '@core-store';

import { MovieStore } from './types';

const initialState: Omit<MovieStore, 'toggleFavoriteMovie'> = {
  favoriteMovies: [],
};

export const useMovieStore = createStore<MovieStore>(
  (set) => ({
    ...initialState,
    toggleFavoriteMovie: (movie) =>
      set((prev) => {
        const index = prev.favoriteMovies.findIndex(
          ({ id }) => id === movie.id,
        );

        if (index === -1) {
          return {
            ...prev,
            favoriteMovies: [...prev.favoriteMovies, movie],
          };
        }

        return {
          ...prev,
          favoriteMovies: [
            ...prev.favoriteMovies.slice(0, index),
            ...prev.favoriteMovies.slice(index + 1),
          ],
        };
      }),
  }),
  'movie',
);
