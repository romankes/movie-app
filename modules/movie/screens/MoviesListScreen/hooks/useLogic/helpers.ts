export const isPassedGenreFilter = (
  movieGenres: number[],
  selectedGenres: number[],
): boolean =>
  selectedGenres.length
    ? selectedGenres.some((id) => movieGenres.includes(id))
    : true;

export const isPassedMovieTitleFilter = (
  movieTitle: string,
  searchTitle: string,
): boolean => {
  const transformedMovieTitle = movieTitle.toLowerCase().trim();
  const transformedSearchTitle = searchTitle.toLowerCase().trim();

  return transformedMovieTitle.includes(transformedSearchTitle);
};
