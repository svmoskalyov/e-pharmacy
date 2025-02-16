import { ReactNode, ButtonHTMLAttributes } from 'react'
import s from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  variant?: 'contained' | 'outlined' | 'dangered'
  size?: 'small' | 'medium' | 'large'
  icon?: ReactNode
  isLoading?: boolean
}

function Button({
  variant = 'contained',
  size = 'medium',
  children,
  icon,
  isLoading = false,
  ...rest
}: ButtonProps) {
  const buttonClasses = `
    ${s.button}
    ${s[`${variant}`]}
    ${s[`${size}`]}
    ${isLoading ? s['loading'] : ''}
  `

  return (
    <button className={buttonClasses} disabled={isLoading} {...rest}>
      {icon && <span className={s.icon}>{icon}</span>}
      {children}
      {isLoading && <span className={s.spinner}></span>}
    </button>
  )
}

export default Button
