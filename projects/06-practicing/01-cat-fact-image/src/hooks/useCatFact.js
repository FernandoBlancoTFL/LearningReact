import { useState, useEffect } from 'react'
import { getRandomFact } from '../service/facts'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then(fact => setFact(fact))
  }

  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
