import {
  Button,
  Container,
  FlatList,
  IconButton,
  Input,
  KeyboardAvoidingView,
  Loader,
  Typography,
} from '@components';
import Close from '@icons/close.svg';
import FilledStar from '@icons/filled-star.svg';
import Filter from '@icons/filter.svg';
import NonFilledStar from '@icons/non-filled-star.svg';
import Search from '@icons/search.svg';
import { palette } from '@palette';
import { FC } from 'react';
import { View } from 'react-native';

import { useLogic, useStyles } from './hooks';

import { MovieCard } from '../../components';

const fetchNextMock = (): null => null;

export const MoviesListScreen: FC = () => {
  const { styles } = useStyles();

  const {
    fetchNextPage,
    isFetchingNextPage,
    isGenresFetching,
    isLoading,
    movies,
    populateGenres,
    checkIfMovieIsFavorite,
    toggleFavoriteMovie,
    isFavorite,
    onPressDefaultTab,
    onPressFavoriteTab,
    search,
    setSearch,
    onResetSearch,
    onOpenFiltersModal,
  } = useLogic();

  if (isGenresFetching) {
    return <Loader />;
  }

  return (
    <KeyboardAvoidingView style={styles.wrapper}>
      <Container style={styles.header}>
        <Typography variant="title24SemiBold">Movies</Typography>

        <Input
          value={search}
          onChange={setSearch}
          hasNotError
          placeholder="Search movie"
          leftIcon={<Search color={palette.text.secondary} />}
          rightIcon={
            !!search && (
              <IconButton
                onPress={onResetSearch}
                size={32}
                type="secondary"
                renderIcon={(props) => (
                  <Close {...props} height={24} width={24} />
                )}
              />
            )
          }
        />

        <View style={styles.filters}>
          <Button
            wrapperStyle={styles.button}
            variant={isFavorite ? 'secondary' : 'primary'}
            size="small"
            rightIcon={NonFilledStar}
            onPress={onPressDefaultTab}
          >
            Default
          </Button>
          <Button
            wrapperStyle={styles.button}
            size="small"
            variant={isFavorite ? 'primary' : 'secondary'}
            rightIcon={FilledStar}
            onPress={onPressFavoriteTab}
          >
            Favorite
          </Button>

          <IconButton
            onPress={onOpenFiltersModal}
            type="secondary"
            renderIcon={Filter}
            size={40}
          />
        </View>
      </Container>
      <FlatList
        estimatedItemSize={111}
        contentContainerStyle={styles.list}
        data={movies}
        onEndReached={isFavorite ? fetchNextMock : fetchNextPage}
        extraData={{
          populateGenres,
          isFetchingNextPage,
          isLoading,
          checkIfMovieIsFavorite,
          toggleFavoriteMovie,
          isFavorite,
        }}
        renderItem={({ item }) => (
          <MovieCard
            genres={populateGenres(item.genre_ids)}
            movie={item}
            isFavorite={checkIfMovieIsFavorite(item)}
            toggleFavoriteMovie={toggleFavoriteMovie}
          />
        )}
        ListEmptyComponent={
          isLoading ? (
            <Loader />
          ) : (
            <Container style={styles.empty}>
              <Typography
                color="secondary"
                align="center"
                variant="body16SemiBold"
              >
                {isFavorite
                  ? 'Make as favorite at least one movie to see result'
                  : 'There are not movies'}
              </Typography>
            </Container>
          )
        }
        ListFooterComponent={
          isFetchingNextPage && !isLoading ? <Loader /> : null
        }
      />
    </KeyboardAvoidingView>
  );
};
