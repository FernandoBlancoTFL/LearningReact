const API_KEY = '6076aca8'

export const searchMovies = async ({ search }) => {
  if (search === '') return null

  try {
    const res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    const response = await res.json()

    const movies = response.Search

    return movies?.map(movie => (
      {
        id: movie.imdbID,
        title: movie.Title,
        poster: movie.Poster,
        year: movie.Year
      }
    ))
  } catch (e) {
    throw new Error('Error searching movies')
  }
}
