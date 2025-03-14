import { useEffect, useState } from 'react'
import { useCartStore } from '../../stores/cartStore'
import useMediaQuery from '../../hooks/useMediaQuery'
import ProductQuantity from '../ProductQuantity'
import Button from '../ui/Button'
import s from './CartItem.module.scss'

interface CartItem {
  id: string
  photo: string
  name: string
  suppliers: string
  price: string
  stock: string
  buyCount: number
}

interface CartItemProps {
  item: CartItem
}

function CartItem({ item }: CartItemProps) {
  const { id, photo, name, suppliers, price, stock, buyCount } = item
  const [prodInCart, setProdInCart] = useState(buyCount)
  const { cart, setCart } = useCartStore()
  const isTablet = useMediaQuery('(min-width: 768px)')

  const prodQuantity = parseInt(stock, 10)

  const removeItemFromCart = (id: string) => {
    const newArr = cart.filter(obj => obj.id !== id)
    setCart(newArr)
  }

  useEffect(() => {
    if (cart.length === 0 || prodInCart === 0) return
    const newArr = cart.map(product =>
      product.id === id ? { ...product, buyCount: prodInCart } : product
    )
    setCart(newArr)
  }, [prodInCart])

  return (
    <li className={s.cartItem}>
      <img className={s.image} src={photo} alt={name} />
      <div className={s.detailBox}>
        <div className={s.infoBox}>
          <div>
            <h3 className={s.name}>{name}</h3>
            <p className={s.suppliers}>{suppliers}</p>
          </div>
          <p className={s.price}>
            <span className={s.rupee}>&#x9F3;</span>
            {price}
          </p>
        </div>
        <div className={s.btnBox}>
          <ProductQuantity
            size={isTablet ? 'medium' : 'small'}
            quantity={buyCount}
            quantityMax={prodQuantity}
            onQuantityChange={quantity => setProdInCart(quantity)}
          />
          <div>
            <Button
              variant="dangered"
              size={isTablet ? 'medium' : 'small'}
              onClick={() => removeItemFromCart(id)}
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default CartItem
