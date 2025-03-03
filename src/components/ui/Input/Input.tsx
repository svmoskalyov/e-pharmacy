import { InputHTMLAttributes, ChangeEvent, CSSProperties } from 'react'
import s from './Input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  placeholdercolor?: string
  error?: string
}

function Input(props: InputProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(event)
    }
  }

  return (
    <div className={s.inputWrapper}>
      {props.label && <label className={s.label}>{props.label}</label>}
      <input
        {...props}
        style={{ '--plColor': `${props.placeholdercolor}` } as CSSProperties}
        onChange={handleChange}
        className={`${s.input} ${props.error ? s.error : ''}`}
      />
      {props.error && <span className={s.errorMessage}>{props.error}</span>}
    </div>
  )
}

export default Input
