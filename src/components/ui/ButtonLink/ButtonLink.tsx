import { NavLink, NavLinkProps } from 'react-router'
import s from './ButtonLink.module.scss'

interface ButtonLinkProps extends NavLinkProps {
  to: string
  variant: 'contained' | 'outlined' | 'text'
  children: React.ReactNode
}

function ButtonLink({ to, variant, children, ...rest }: ButtonLinkProps) {
  return (
    <NavLink to={to} className={`${s[variant]}`} {...rest}>
      {children}
    </NavLink>
  )
}

export default ButtonLink
