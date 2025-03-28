const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  try {
    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    if (!res.ok) throw new Error('Error fetching path')
    const data = await res.json()
    const { fact } = data
    return fact
  } catch (err) {
    console.log(`ocurrio un error: ${err}`)
  }
}
