import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'
import './css/App.css'
import { OtherImage } from './components/OtherImage'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageURL } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h2>App de gatitos</h2>
      <section>
        {fact && <p>{fact}</p>}
        {imageURL && <img
          src={`${imageURL}`} alt={
          `Image extracted using the first three words of ${fact}`
          }
                     />}
      </section>
      {/* <OtherImage />
      <OtherImage />
      <OtherImage /> */}
      <button onClick={handleClick}>Change fact</button>

    </main>
  )
}
