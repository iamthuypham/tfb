import { useEffect, useState } from 'react'
import { config } from '../config'

export const useFirebase = () => {
  const [tours, setTours] = useState(null)
  useEffect(() => {
    if (!tours) {
      fetch(`${config.baseUri}/getTours`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(tours => {
          setTours(tours)
        })
        .catch(error => console.log(error))
    }
  })
  return { tours }
}
