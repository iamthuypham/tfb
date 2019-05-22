import { useState } from 'react'
import { useSpring, animated, interpolate } from 'react-spring'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import theme from '../../theme'
import 'react-day-picker/lib/style.css'

const DateInput = animated(
  ({ title, name, type, placeholder, startDate, endDate }) => {
    const [isFocus, setIsFocus] = useState(false)
    const [range, setRange] = useState({
      from: startDate,
      to: endDate,
      enterTo: null
    })
    const { color, opacity } = useSpring({
      from: { color: theme.palette.shade[30], opacity: 0 },
      color:
        isFocus || (!isFocus && (startDate || endDate))
          ? theme.palette.blue[100]
          : theme.palette.shade[30],
      opacity: isFocus || (!isFocus && (startDate || endDate)) ? 1 : 0
    })
    const inputStyle = {
      border: interpolate([color], c => `0.838px solid ${c}`),
      outline: 'none',
      width: '100%',
      borderRadius: `${theme.spacing / 3}px`,
      padding: `${theme.spacing}px ${theme.spacing}px`,
      borderTopLeftRadius: 0,
      marginBottom: `${theme.spacing}px`,
      boxShadow: interpolate([color], color => `${theme.boxShadow} ${color}`)
    }
    const titleStyle = {
      opacity: opacity,
      fontSize: `${theme.font.size.small}px`,
      backgroundColor: theme.palette.blue[100],
      color: `${theme.palette.shade[0]}`,
      padding: `${theme.spacing / 3}px ${theme.spacing}px`,
      textTransform: 'capitalize'
    }
    const isSelectingFirstDay = (from, to, day) => {
      const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from)
      const isRangeSelected = from && to
      return !from || isBeforeFirstDay || isRangeSelected
    }
    return (
      <>
        <div className="date-input">
          <animated.span style={titleStyle}>{title}</animated.span>
          <animated.input
            type={type}
            value={range.from}
            name={name}
            placeholder={isFocus ? '' : placeholder}
            style={inputStyle}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={e => onChangeInput(e.target.value)}
          />
          <animated.input
            type={type}
            value={range.to}
            name={name}
            placeholder={isFocus ? '' : placeholder}
            style={inputStyle}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={e => onChangeInput(e.target.value)}
          />
          {/* <DayPicker
            numberOfMonths={2}
            fromMonth={Date(range.from)}
            onDayClick={day => {
              const { from, to } = range
              if (from && to && day >= from && day <= to) {
                return setRange({ from: null, to: null, enterTo: null })
              }
              if (isSelectingFirstDay(from, to, day)) {
                return setRange({
                  from: day,
                  to: null,
                  enterTo: null
                })
              }
              return setRange({
                ...range,
                to: day,
                enterTo: day
              })
            }}
            modifiers={{ start: range.from, end: range.enterTo }}
            selectedDays={[
              range.from,
              { from: range.from, end: range.enterTo }
            ]}
            disabledDays={{ before: range.from }}
            onDayMouseEnter={day => {
              const { from, to } = range
              if (!isSelectingFirstDay(from, to, day)) {
                return setRange({ ...range, enterTo: day })
              }
            }}
          /> */}
        </div>
        <style jsx>{`
          .date-input {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
        `}</style>
        <style>{`
          .DayPicker-wrapper, .DayPicker-Day, span {
            outline: none;
          }
          .DayPicker-Day--today {
            color: ${theme.palette.orange[100]}
          }
          .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
            background-color: ${theme.palette.blue[0]};
            color: ${theme.palette.blue[100]};
          }
          .DayPicker:not(.DayPicker--interactionDisabled) .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
            background-color: ${theme.palette.blue[0]};
            color: ${theme.palette.shade[80]};
          }
          .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover {
            background-color: ${theme.palette.blue[0]};
          }
          
        `}</style>
      </>
    )
  }
)

export default DateInput
