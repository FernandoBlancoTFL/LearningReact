function ListOfMovies ({ movies }) {
  return (
    <ul className='movies'>
      {
        movies.map(movie => (
          <li className='movie' key={movie.id}>
            <p>{movie.title}</p>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.title} />
          </li>
        ))
      }
    </ul>

  )
}

function NoMoviesResponse () {
  return <p>No se encontró una película con ese titulo</p>
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0
  console.log(hasMovies)

  if (hasMovies) {
    return <ListOfMovies movies={movies} />
  } else {
    return <NoMoviesResponse />
  }
}
