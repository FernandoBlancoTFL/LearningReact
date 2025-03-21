import { useCatImage } from '../hooks/useCatImage'

export function OtherImage () {
  const { imageURL } = useCatImage({ fact: 'cat' })

  return (
    <>
      {imageURL && <img src={imageURL} />}
    </>
  )
}
