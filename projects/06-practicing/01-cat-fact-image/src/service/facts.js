const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  try {
    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    if(!res.ok) throw new Error('An error occurred')
    const response = await res.json()
    return response.fact
  } catch(error) {
    console.log(error)
  }
}
