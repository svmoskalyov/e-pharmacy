import { useState } from 'react'
import Icon from '../ui/Icon'
import s from './Select.module.scss'

interface Option {
  value: string
  label: string
}

interface SelectProps {
  options: Option[]
  onChange: (value: string) => void
  placeholder?: string
}

function Select({
  options,
  onChange,
  placeholder = 'Виберіть опцію'
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState<string | null>(null)

  const handleOptionClick = (option: Option) => {
    setSelectedValue(option.value)
    onChange(option.value)
    setIsOpen(false)
  }

  return (
    <div className={s.select}>
      <div className={s.header} onClick={() => setIsOpen(!isOpen)}>
        {selectedValue ? (
          options.find(option => option.value === selectedValue)?.label
        ) : (
          <span className={s.placeholder}>{placeholder}</span>
        )}
        <span className={s.arrow}>
          {isOpen ? (
            <Icon name="chevron" size="16" rotate="180" />
          ) : (
            <Icon name="chevron" size="16" />
          )}
        </span>
      </div>
      {isOpen && (
        <ul className={s.list}>
          {options.map(option => (
            <li
              className={
                selectedValue === option.value
                  ? `${s.item} ${s.choiced}`
                  : s.item
              }
              key={option.value}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Select
