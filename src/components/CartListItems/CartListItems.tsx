import CartItem from '../CartItem'
import s from './CartListItems.module.scss'

interface Cart {
  id: string
  photo: string
  name: string
  suppliers: string
  price: string
}

interface CartListItemsProps {
  cartItems: Cart[]
}

function CartListItems({ cartItems }: CartListItemsProps) {
  return (
    <ul className={s.cartListItems}>
      {cartItems.map(e => (
        <CartItem key={e.id} {...e} />
      ))}
    </ul>
  )
}

export default CartListItems
