import { useState, useEffect } from 'react'
import { useSpring, animated, interpolate } from 'react-spring'
import theme from '../../theme'

const StandardButton = ({
  name,
  value,
  outline,
  isLoading,
  disabled,
  onClick
}) => {
  const [isFocus, setIsFocus] = useState(false)
  const { color, inverseColor, scale } = useSpring({
    from: {
      color: theme.palette.shade[0],
      inverseColor: theme.palette.blue[100],
      scale: 1
    },
    color: outline
      ? theme.palette.shade[0]
      : disabled
      ? theme.palette.shade[30]
      : theme.palette.orange[100],
    inverseColor: outline
      ? disabled
        ? theme.palette.shade[30]
        : theme.palette.blue[100]
      : theme.palette.shade[0],
    scale: !disabled && isFocus ? 1.618 : 1
  })
  const buttonStyle = {
    backgroundColor: interpolate([color], c => `${c}`),
    color: interpolate([inverseColor], c => `${c}`),
    border: 'none',
    outline: 'none',
    textTransform: 'uppercase',
    borderRadius: `${theme.spacing / 3}px`,
    padding: `${theme.spacing}px ${theme.spacing * 3}px`,
    borderTopLeftRadius: 0,
    cursor: !disabled && 'pointer',
    transform: interpolate([scale], s => `scale(${s}, ${s})`)
  }
  const handleOnClick = e => {
    setIsFocus(true)
    onClick(e)
  }

  useEffect(() => {
    let timer1 = setTimeout(() => setIsFocus(false), 100)
    return () => {
      clearTimeout(timer1)
    }
  }, [isFocus])

  return (
    <>
      <div className="standard-button">
        <animated.button style={buttonStyle} onClick={handleOnClick}>
          {name}
        </animated.button>
      </div>
      <style jsx>{`
        .standard-button {
        }
      `}</style>
    </>
  )
}

export default StandardButton
