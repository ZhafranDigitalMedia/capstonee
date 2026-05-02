export const fetchMovies = async (
  query: string,
  rating: number
) => {
  const apiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY;

  let allMovies: any[] = [];

  for (let page = 1; page <= 3; page++) {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}&type=movie&page=${page}`
    );

    const data = await res.json();

    if (data.Search) {
      allMovies = [...allMovies, ...data.Search];
    }
  }

  const detailedMovies = await Promise.all(
    allMovies.map(async (movie: any) => {
      const detailRes = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&i=${movie.imdbID}&plot=short`
      );

      return detailRes.json();
    })
  );

  return detailedMovies.filter(
    (movie) => movie.Poster !== "N/A"
  );
};