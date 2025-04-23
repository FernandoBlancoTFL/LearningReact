import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import { useState, useCallback } from 'react'
import debounce from 'just-debounce-it'
import './css/App.css'

export function App () {
  const [sort, setSort] = useState(false)
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(
    debounce(search => {
      // console.log(search)
      getMovies({ search })
    }, 2000), [getMovies])

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  // Forma controlada
  const handleChange = (event) => {
    const newSearch = event.target.value
    if (newSearch.startsWith(' ')) return
    setSearch(newSearch)
    getMovies({ search: newSearch })
    debouncedGetMovies(newSearch)
  }

  return (
    <main>
      <h1>Buscador de películas</h1>
      <section className='mov-srch'>
        <form onSubmit={handleSubmit} className='mov-srch-form'>
          <input
            style={{ border: '1px solid transparent', borderColor: error ? 'red' : 'transparent' }}
            value={search} onChange={handleChange} className='mov-srch-form-input' type='text' placeholder='Avengers, Matrix, Sonic...'
          />
          <button className='mov-srch-form-btn'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className='mov-srch-filter'>
          <p>Ordenar por título</p>
          <input type='checkbox' onChange={handleSort} checked={sort} />
        </div>
      </section>
      <section className='mov-movies'>
        <Movies movies={movies} />
      </section>
    </main>
  )
}
