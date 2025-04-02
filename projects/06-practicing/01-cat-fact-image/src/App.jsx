import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
import './css/App.css'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageURL } = useCatImage({ fact })

  const handleClick = () => {
    refreshFact()
  }

  return (
    <main>
      {imageURL && <div className='cat-card-img'>
        <img src={imageURL} alt={`Image taken from the first three words of ${fact}`} />
                   </div>}

      {fact && <div className='cat-card-fact'>{fact}</div>}

      <div className='cat-card-btn'>
        <button onClick={handleClick}>Change fact</button>
      </div>
    </main>
  )
}
