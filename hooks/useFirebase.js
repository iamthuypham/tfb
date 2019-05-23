import { useEffect, useState } from 'react'
import { config } from '../config'

export const useFirebase = () => {
  const [tours, setTours] = useState(null)
  const [toursList, setToursList] = useState(null)
  const [tourCountByProvince, setTourCountByProvince] = useState(null)
  const [provinceHasTours, setProvinceHasTours] = useState(null)

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
          setToursList(
            Object.keys(tours).map(tourId => ({
              id: tourId,
              ...tours[tourId]
            }))
          )
        })
        .catch(error => console.log(error))
    }
  }, [tours])

  useEffect(() => {
    if (toursList) {
      const tourCountByProvince = toursList.reduce((current, tour) => {
        if (!current[tour.provinceKey]) {
          return { ...current, [tour.provinceKey]: 1 }
        }
        return { ...current, [tour.provinceKey]: ++current[tour.provinceKey] }
      }, {})

      const provinceHasTours = toursList.reduce((current, tour) => {
        if (tour.provinceKey) {
          return [...current, tour.provinceKey]
        }
        return current
      }, [])

      setTourCountByProvince(tourCountByProvince)
      setProvinceHasTours(provinceHasTours)
    }
  }, [toursList])
  return {
    tours,
    toursList,
    tourCountByProvince,
    provinceHasTours
  }
}
