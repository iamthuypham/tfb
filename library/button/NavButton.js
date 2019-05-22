import { useState, useEffect } from 'react'
import { useSpring, animated, interpolate } from 'react-spring'
import theme from '../../theme'

const NavButton = ({ name, onClick }) => {
  const [isFocus, setIsFocus] = useState(false)
  const { color, scale } = useSpring({
    from: {
      scale: 1
    },
    scale: isFocus ? 1.618 : 1
  })
  const buttonStyle = {
    backgroundColor: 'transparent',
    color: theme.palette.shade[100],
    border: 'none',
    outline: 'none',
    textTransform: 'uppercase',
    borderRadius: 0,
    padding: `${theme.spacing}px ${theme.spacing}px`,
    transform: interpolate([scale], s => `scale(${s}, ${s})`)
  }
  const handleOnClick = e => {
    setIsFocus(true)
    onClick(e)
  }

  useEffect(() => {
    let timer = setTimeout(() => setIsFocus(false), 100)
    return () => {
      clearTimeout(timer)
    }
  }, [isFocus])

  return (
    <>
      <div className="nav-button">
        <animated.button style={buttonStyle} onClick={handleOnClick}>
          {name}
        </animated.button>
      </div>
      <style jsx>{`
        .nav-button {
        }
      `}</style>
    </>
  )
}

export default NavButton
