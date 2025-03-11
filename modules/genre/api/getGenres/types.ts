import { Genre } from '../../types';

export type Payload = unknown;

export interface ApiResponse {
  genres: Genre[];
}

export interface Result {
  genres: Record<number, Genre>;
}

export type GetGenres = (payload: Payload) => Promise<Result>;
