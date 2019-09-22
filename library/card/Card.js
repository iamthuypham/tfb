import { useSpring, animated, interpolate } from 'react-spring'
import theme from '../../theme'

const Card = ({
  children,
  cardImg,
  width,
  isReverse,
  isInverse,
  padding,
  margin,
  backgroundColor,
  height,
  setIsMouseEnter,
  setIsMouseDown
}) => {
  const { color } = useSpring({
    from: {
      color: theme.palette.blue[0]
    },
    color: isInverse ? theme.palette.blue[100] : theme.palette.blue[0]
  })
  const cardStyle = {
    width,
    height: height || '260px',
    display: 'flex',
    flexDirection: isReverse ? 'row-reverse' : 'row',
    backgroundColor: backgroundColor || interpolate([color], c => `${c}`),
    margin: margin || '0px'
  }
  return (
    <>
      <animated.div
        className="card"
        style={cardStyle}
        onMouseEnter={() => setIsMouseEnter(true)}
        onMouseLeave={() => setIsMouseEnter(false)}
        onMouseDown={setIsMouseDown}
      >
        {cardImg && (
          <div className="card-img">
            <img src={`${process.env.REACT_STORAGE_IMAGE}/${cardImg}.jpg`} />
          </div>
        )}
        <div className="card-content">{children}</div>
      </animated.div>
      <style jsx>{`
        .card-img {
          height: 100%;
          width: 50%;
        }
        .card-img img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
        .card-content {
          width: ${cardImg ? '50%' : '100%'};
          padding: ${padding};
        }
      `}</style>
    </>
  )
}

export default Card
