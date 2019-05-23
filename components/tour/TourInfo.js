import { useSpring, animated, interpolate } from 'react-spring'
import SimplePriceDisplay from './SimplePriceDisplay'
import theme from '../../theme'

const TourInfo = ({
  name,
  description,
  reviewPoint,
  reviewCount,
  price,
  tourLength,
  isInverse
}) => {
  const truncate = (str, length, ending) => {
    if (length == null) {
      length = 100
    }
    if (ending == null) {
      ending = '...'
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending
    } else {
      return str
    }
  }
  const { color } = useSpring({
    from: {
      color: theme.palette.shade[100]
    },
    color: `${isInverse ? theme.palette.shade[0] : theme.palette.shade[100]}`
  })
  const tourInfoStyle = {
    color: interpolate([color], c => `${c}`)
  }
  return (
    <>
      <animated.div className="tour-info" style={tourInfoStyle}>
        <div className="tour-info-title">{name}</div>
        <div className="tour-info-description">
          {truncate(description, 150, '...')}
        </div>
        {/* <SimplePriceDisplay {...price} {...tourLength} isInverse={isInverse} /> */}
        {/* <SimpleReviewDisplay reviewPoint={reviewPoint} /> */}
        {/* <div className="review-count">{reviewCount} reviews</div> */}
        <div
          className="tour-contact-us"
          target="_blank"
          href="https://www.facebook.com/messages/t/toursforbooks"
        >
          Contact Us
        </div>
      </animated.div>
      <style jsx>{`
        .tour-info-title {
          font-size: ${theme.font.size.medium};
          font-weight: 900;
        }
        .tour-info-description {
          margin: ${theme.spacing}px 0px;
          font-size: ${theme.font.size.normal};
        }
        .review-count {
          font-size: ${theme.font.size.small};
        }
        .tour-contact-us {
          font-size: ${theme.font.size.normal};
          text-align: center;
          cursor: pointer;
        }
      `}</style>
    </>
  )
}

export default TourInfo
