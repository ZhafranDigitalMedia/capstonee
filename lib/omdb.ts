export const fetchMovies = async (query: string, rating: number) => {
  const apiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY;

  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}&type=movie`
  );

  const data = await res.json();

  if (!data.Search) return [];

  const detailedMovies = await Promise.all(
    data.Search.slice(0, 12).map(async (movie: any) => {
      const detailRes = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&i=${movie.imdbID}&plot=short`
      );
      return detailRes.json();
    })
  );

  return detailedMovies.filter(
    (movie) =>
      parseFloat(movie.imdbRating) >= rating &&
      movie.Poster !== "N/A"
  );
};