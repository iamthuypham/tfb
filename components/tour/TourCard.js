import { useState } from 'react'
import Card from '../../library/card/Card'
import TourInfo from './TourInfo'
import theme from '../../theme'

export const TourCard = ({
  name,
  description,
  cardImg,
  reviewCount,
  reviewPoint,
  price,
  tourLength,
  isReverse
}) => {
  const [isMouseEnter, setIsMouseEnter] = useState(false)
  return (
    <>
      <Card
        cardImg={cardImg}
        width="50%"
        padding={`${theme.spacing * 3}px`}
        isReverse={isReverse}
        isInverse={isMouseEnter}
        setIsMouseEnter={setIsMouseEnter}
      >
        <TourInfo
          name={name}
          description={description}
          reviewCount={reviewCount}
          reviewPoint={reviewPoint}
          price={price}
          tourLength={tourLength}
          isInverse={isMouseEnter}
        />
      </Card>
    </>
  )
}
