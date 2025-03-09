import { NavLink } from 'react-router'
import Icon from '../Icon'
import s from './Cart.module.scss'

interface CartProps {
  count: number
}

function Cart({ count }: CartProps) {
  return (
    <NavLink to="cart" className={s.cart}>
      <Icon name="cart" size="16" />
      <span className={s.badge}>{count}</span>
    </NavLink>
  )
}

export default Cart
