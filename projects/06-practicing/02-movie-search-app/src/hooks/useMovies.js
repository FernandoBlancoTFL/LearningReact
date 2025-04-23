import { searchMovies } from '../service/movies'
import { useRef, useState, useMemo, useCallback } from 'react'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const previousSearch = useRef(search)

  const getMovies = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return
    previousSearch.current = search
    const movies = await searchMovies({ search })
    setMovies(movies)
  }, [])

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies }
}
