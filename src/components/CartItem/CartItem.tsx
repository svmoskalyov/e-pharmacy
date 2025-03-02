import { useState } from 'react'
import ProductQuantity from '../ProductQuantity'
import Button from '../ui/Button'
import s from './CartItem.module.scss'

interface CartItem {
  id: string
  photo: string
  name: string
  suppliers: string
  price: string
}

function CartItem({ id, photo, name, suppliers, price }: CartItem) {
  const [prodInCart, setProdInCart] = useState(0)
  console.log('change in stock --', prodInCart)

  return (
    <li className={s.cartItem}>
      <img className={s.image} src={photo} alt={name} />
      <div className={s.detailBox}>
        <div className={s.infoBox}>
          <h3 className={s.name}>{name}</h3>
          <p className={s.suppliers}>{suppliers}</p>
          <p className={s.price}>
            <span className={s.rupee}>&#x9F3;</span>
            {price}
          </p>
        </div>
        <div className={s.btnBox}>
          <ProductQuantity
            size="small"
            onQuantityChange={quantity => setProdInCart(quantity)}
          />
          <Button
            variant="dangered"
            size="small"
            onClick={() => console.log('removeItemFromCart --', id)}
          >
            Remove
          </Button>
        </div>
      </div>
    </li>
  )
}

export default CartItem
