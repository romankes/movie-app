import { Movie } from '../types';

export interface MovieStore {
  favoriteMovies: Movie[];
  toggleFavoriteMovie: (movie: Movie) => void;
}
