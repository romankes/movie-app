import { Movie } from '../../types';

export interface Payload {
  page?: number;
}

export interface Result {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export type GetMovie = (payload: Payload) => Promise<Result>;
