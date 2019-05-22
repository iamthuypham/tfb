import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import { baseUri } from '../config'

export const useTwitter = (faIcon, iconSize) => {
  const [token, setToken] = useState(null)
  const getToken = () => {
    fetch(`${baseUri}/accessTwitter`, { method: 'POST' })
      .then(response => response.json())
      .then(data => {
        if (data.token) {
          setToken(data.token)
        }
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    if (!token) {
      // getToken()
    }
  }, [])

  return { token }
}
