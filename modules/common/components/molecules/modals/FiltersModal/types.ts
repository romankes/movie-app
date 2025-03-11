import { Dispatch, SetStateAction } from 'react';

export interface Props {
  selectedGenres: number[];
  setSelectedGenres: Dispatch<SetStateAction<number[]>>;
}
