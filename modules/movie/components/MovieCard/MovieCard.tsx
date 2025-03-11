import { Container, IconButton, Typography } from '@components';
import { Genre } from '@genre/types';
import FilledStar from '@icons/filled-star.svg';
import NonFilledStar from '@icons/non-filled-star.svg';
import { FC, useCallback, useMemo } from 'react';
import { View } from 'react-native';

import { useStyles } from './hooks';

import { Movie } from '../../types';

interface Props {
  genres: Genre[];
  isFavorite: boolean;
  movie: Movie;
  toggleFavoriteMovie: (movie: Movie) => void;
}

export const MovieCard: FC<Props> = ({
  movie,
  genres,
  isFavorite,
  toggleFavoriteMovie,
}) => {
  const { styles } = useStyles();

  const onToggleFavoriteMovie = useCallback(
    () => toggleFavoriteMovie(movie),
    [movie, toggleFavoriteMovie],
  );

  const transformedGenres = useMemo(() => {
    const joinedGenres = genres
      .filter((genre) => genre.name)
      .map(({ name }) => name)
      .join(', ');

    if (!joinedGenres) {
      return 'N/A';
    }

    return joinedGenres;
  }, [genres]);

  return (
    <Container type="margin" style={styles.wrapper}>
      <IconButton
        onPress={onToggleFavoriteMovie}
        renderIcon={isFavorite ? FilledStar : NonFilledStar}
      />
      <View style={styles.content}>
        <View style={styles.header}>
          <Typography color="grey" variant="body12Regular">
            #{movie.id}
          </Typography>

          <Typography variant="body12Regular">{movie.release_date}</Typography>
        </View>

        <Typography numberOfLines={1}>{movie.title}</Typography>
        <Typography color="accent">Genres: {transformedGenres}</Typography>
      </View>
    </Container>
  );
};
