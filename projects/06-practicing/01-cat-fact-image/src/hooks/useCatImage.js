import { useState, useEffect } from 'react'

export function useCatImage ({ fact }) {
  const [imageURL, setImageURL] = useState()

  useEffect(() => {
    if (!fact) return

    const firstThreeWords = fact.split(' ', 3).join(' ')

    fetch(`https://cataas.com/cat/says/${firstThreeWords}?json=true`)
      .then(res => res.json())
      .then(response => {
        const newImageURL = response.url
        setImageURL(newImageURL)
      })
  }, [fact])

  return { imageURL }
}
