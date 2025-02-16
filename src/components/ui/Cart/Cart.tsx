import Icon from '../Icon'
import s from './Cart.module.scss'

interface CartProps {
  count: number
}

function Cart({ count }: CartProps) {
  return (
    <div className={s.cart}>
      <Icon name='cart' size='16' />
      <span className={s.badge}>{count}</span>
    </div>
  )
}

export default Cart
