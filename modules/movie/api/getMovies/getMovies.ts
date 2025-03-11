import axios from 'axios';

import { GetMovie, Result } from './types';

export const getMovies: GetMovie = async (params) => {
  try {
    if (params.page === undefined) {
      throw new Error('Is out of range');
    }

    const response = await axios<Result>({
      url: '/discover/movie',
      params: {
        page: params.page,
        sort_by: 'title.asc',
        language: 'en-US',
      },
    });

    return response.data;
  } catch (e) {
    console.error('getMovies', e);

    return {
      page: params.page || 0,
      results: [],
      total_pages: 0,
      total_results: 0,
    };
  }
};
