import { useSpring, animated, interpolate } from 'react-spring'
import { useCurrencySymbol } from '../../hooks/useCurrencySymbol'
import theme from '../../theme'
const SimplePriceDisplay = ({
  amount,
  currency,
  discountAmount,
  type,
  unit,
  byDay,
  byHour,
  isInverse
}) => {
  const currencySymbol = useCurrencySymbol(currency)
  const { color } = useSpring({
    from: {
      color: theme.palette.blue[100]
    },
    color: `${isInverse ? theme.palette.shade[0] : theme.palette.blue[100]}`
  })
  const priceStyle = {
    color: interpolate([color], c => `${c}`),
    fontSize: theme.font.size.medium
  }
  return (
    <>
      <div className="price">
        From{' '}
        <animated.span className="amount" style={priceStyle}>
          {currencySymbol}
          {amount}
        </animated.span>{' '}
        / {byDay}
      </div>
      <style jsx>{`
        .price {
          font-weight: 700;
          margin-bottom: ${theme.spacing}px;
        }
      `}</style>
    </>
  )
}

export default SimplePriceDisplay
