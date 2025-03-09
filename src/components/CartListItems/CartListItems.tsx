import { useCartStore } from '../../stores/cartStore'
import CartItem from '../CartItem'
import s from './CartListItems.module.scss'

function CartListItems() {
  const { cart } = useCartStore()

  return (
    <ul className={s.cartListItems}>
      {cart.map(e => (
        <CartItem key={e.id} item={e} />
      ))}
    </ul>
  )
}

export default CartListItems
