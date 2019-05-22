import { useState } from 'react'
import { useSpring, animated, interpolate } from 'react-spring'
import theme from '../../theme'

const ExpansionPanel = ({ title, description }) => {
  const [isExpand, setIsExpand] = useState(false)
  const { value } = useSpring({
    from: {
      value: 0
    },

    value: isExpand ? 1 : 0
  })
  const panelStyle = {
    padding: interpolate([value], v => `${v * theme.spacing}px`),
    opacity: interpolate([value], v => v),
    maxHeight: interpolate([value], v => `${v * 1000}px`),
    whiteSpace: 'pre-wrap'
  }
  const handleOnClick = e => {
    e.preventDefault()
    setIsExpand(!isExpand)
  }
  return (
    <>
      <div className="panel">
        <div className="panel-title" onClick={handleOnClick}>
          <h3>{title}</h3>
        </div>
        <animated.p style={panelStyle}>{description}</animated.p>
      </div>
      <style jsx>{`
        .panel {
          display: flex;
          flex-direction: column;
          border-bottom: 1px solid ${theme.palette.shade[20]};
        }
      `}</style>
    </>
  )
}

export default ExpansionPanel
