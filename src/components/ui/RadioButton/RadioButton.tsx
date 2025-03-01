import { useState } from 'react'
import s from './RadioButton.module.scss'

interface RadioButtonProps {
  options: string[]
  onChange: (value: string) => void
}

function RadioButton({ options, onChange }: RadioButtonProps) {
  const [selectedValue, setSelectedValue] = useState<string>(options[0])

  const handleOptionChange = (value: string) => {
    setSelectedValue(value)
    onChange(value)
  }

  return (
    <div className={s.radioGroup}>
      {options.map(option => (
        <label key={option} className={s.radioLabel}>
          <input
            type="radio"
            value={option}
            checked={selectedValue === option}
            onChange={() => handleOptionChange(option)}
            className={s.radioInput}
          />
          <span
            className={`${s.radioText} ${
              selectedValue === option ? s.selected : ''
            }`}
          >
            {option}
          </span>
        </label>
      ))}
    </div>
  )
}

export default RadioButton
