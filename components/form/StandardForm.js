import { useState } from 'react'
import { useSpring, animated, interpolate } from 'react-spring'
import StandardInput from '../../library/input/StandardInput'
import DateInput from '../../library/input/DateInput'
import StandardTextarea from '../../library/textarea/StandardTextarea'
import theme from '../../theme'

const defaultFormData = {
  name: {
    value: ''
  },
  phone: {
    value: ''
  },
  request: {
    value: ''
  },
  return_date: {
    value: Date.now()
  }
}

const defaultSchemaFields = [
  { name: 'name', display: 'name', type: 'text' },
  { name: 'phone', display: 'home phone', type: 'phone' },
  { name: 'request', display: 'your request', type: 'textarea', rows: 6 },
  { name: 'return_date', display: 'return date', type: 'date' }
]

const StandardForm = ({
  formData = defaultFormData,
  schemaFields = defaultSchemaFields
}) => {
  const [currentFormData, setCurrentFormData] = useState(formData)
  const [isFocus, setIsFocus] = useState(false)
  const { color } = useSpring({
    from: { color: theme.palette.shade[20] },
    color: isFocus ? theme.palette.shade[30] : theme.palette.shade[20]
  })

  const formStyle = {
    display: 'inline-block',
    border: `0.6px solid ${theme.palette.shade[30]}`,
    borderRadius: `${theme.spacing}px`,
    padding: `${theme.spacing * 3}px ${theme.spacing * 5}px`
  }

  const handleSetFormData = (fieldName, value) => {
    const updatedFormData = {
      ...currentFormData,
      [fieldName]: {
        value
      }
    }
    setCurrentFormData(updatedFormData)
  }
  return (
    <>
      <animated.form
        style={formStyle}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      >
        <h2>Example Form</h2>
        {schemaFields.map(field => {
          if (!field.type || !field.name || !currentFormData[field.name]) {
            return null
          }
          if (field.type === 'textarea') {
            return (
              <StandardTextarea
                key={field.name}
                name={field.name}
                type={field.type}
                title={field.display}
                placeholder={field.display}
                rows={field.rows}
                value={currentFormData[field.name].value}
                onChangeInput={value => handleSetFormData(field.name, value)}
              />
            )
          }
          if (field.type === 'date') {
            return (
              <DateInput
                key={field.name}
                name={field.name}
                type="text"
                title={field.display}
                placeholder={field.display}
                startDate=""
                endDate=""
              />
            )
          }
          return (
            <StandardInput
              key={field.name}
              name={field.name}
              type={field.type}
              title={field.display}
              placeholder={field.display}
              value={currentFormData[field.name].value}
              onChangeInput={value => handleSetFormData(field.name, value)}
            />
          )
        })}
      </animated.form>
      <style jsx>{`
        form {
        }
      `}</style>
    </>
  )
}

export default StandardForm
