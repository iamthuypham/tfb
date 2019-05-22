import { useState, useEffect } from 'react'
import YouTube from 'react-youtube'
import { config } from '../../config'

export const TfbVideoSection = () => {
  const [options, setOptions] = useState(null)
  useEffect(() => {
    if (!options) {
      const initialOptions = {
        height: '',
        width: '',
        playerVars: {
          modestbranding: 1,
          controls: 0,
          mute: 1,
          autoplay: 0
        },
        origin: `${config.server}`
      }
      const width = document.documentElement.clientWidth
      setOptions({ ...initialOptions, width, height: width / 1.779 })
    }
  }, [])

  return (
    <>
      <div>{options && <YouTube videoId="HheK7Yy3T-U" opts={options} />}</div>
    </>
  )
}
