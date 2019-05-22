import { useEffect, useState } from 'react'
import fetch from 'isomorphic-unfetch'
import { landingPageStrings } from '../../localization/landingPageStrings'
import { useTwitter } from '../../hooks/useTwitter'
import theme from '../../theme'

export const GetInspiredSection = () => {
  const [images, setImages] = useState([])
  const { token } = useTwitter()
  useEffect(() => {
    if (token) {
      getTweetImageWithHashtag('toursforbooks')
    }
  }, [token])

  const getTweetImageWithHashtag = hashtag => {
    fetch(`/tweetImage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token, hashtag })
    })
      .then(response => response.json())
      .then(images => {
        const updatedImages = [].concat.apply([], images).filter(image => image) //filter null, empty element
        setImages(updatedImages)
      })
      .catch(error => console.log(error))
  }
  return (
    <>
      <div className="get-inspired-section">
        <div className="get-inspired-section-headline">
          <span>{landingPageStrings.getInspiredWith}</span>
          <span>{landingPageStrings.photosFromInstagram}</span>
        </div>
        <div className="get-inspired-images">
          <div className="get-inspired-images-row">
            {images &&
              images
                .slice(0, 5)
                .map(image => <img key={image} src={`${image}?name=small`} />)}
          </div>
          <div className="get-inspired-images-row">
            {images &&
              images
                .slice(5, 9)
                .map(image => <img key={image} src={`${image}?name=small`} />)}
          </div>
        </div>
      </div>
      <style jsx>{`
        .get-inspired-section {
          width: 100%;
          padding: 10%;
        }
        .get-inspired-section-headline {
          text-align: center;
          display: flex;
          flex-direction: column;
          margin-bottom: ${theme.spacing * 5}px;
        }
        .get-inspired-section-headline span:last-child {
          font-size: ${theme.font.size.small};
          text-transform: uppercase;
          color: ${theme.palette.blue[100]};
        }
        .get-inspired-section-headline span:first-child {
          font-family: ${theme.font.family.normal};
          font-size: ${theme.font.size.large};
          font-weight: 800;
          text-transform: capitalize;
          line-height: 1.2;
        }
        .get-inspired-images-row {
          width: 100%;
          height: ${theme.spacing * 15}px;
          display: flex;
        }
        .get-inspired-images-row img {
          width: 20%;
          object-fit: cover;
        }
      `}</style>
    </>
  )
}
