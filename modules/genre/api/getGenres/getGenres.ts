import axios from 'axios';

import { ApiResponse, GetGenres } from './types';

export const getGenres: GetGenres = async () => {
  try {
    const response = await axios<ApiResponse>({
      url: '/genre/movie/list',
      params: {
        language: 'en-US',
      },
    });

    const genres = Object.fromEntries(
      response.data.genres.map((genre) => [genre.id, genre]),
    );

    return { genres };
  } catch (e) {
    console.error('getMovies', e);

    return {
      genres: {},
    };
  }
};
