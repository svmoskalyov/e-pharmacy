import { NavLink } from 'react-router'
import s from './ButtonLink.module.scss'

interface ButtonLinkProps {
  to: string
  variant: 'contained' | 'outlined' | 'text'
  children: React.ReactNode
  props?: { [key: string]: unknown }
}

function ButtonLink({ to, variant, children, ...props }: ButtonLinkProps) {
  return (
    <NavLink to={to} className={`${s[variant]}`} {...props}>
      {children}
    </NavLink>
  )
}

export default ButtonLink
