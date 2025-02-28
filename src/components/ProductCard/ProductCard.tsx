import { useState } from 'react'
import { useLocation } from 'react-router'
import Button from '../ui/Button'
import ButtonLink from '../ui/ButtonLink'
import s from './ProductCard.module.scss'
import ProductQuantity from '../ProductQuantity'

interface ProductProps {
  id: string
  photo: string
  name: string
  suppliers: string
  price: string
  stock: string
}

function ProductCard({
  id,
  photo,
  name,
  suppliers,
  price,
  stock
}: ProductProps) {
  const { pathname } = useLocation()
  // const [prodQuantity, setProdQuantity] = useState<number>(parseInt(stock, 10))
  const [prodInCart, setProdInCart] = useState(0)

  const place = pathname === '/medicine' ? true : false
  // console.log(place)

  const addToCart = () => {
    console.log('add to cart id --', id)
    console.log('state in stock --', stock)
    console.log('add to cart prodInCart --', prodInCart)
    console.log('change in stock --', parseInt(stock, 10) - prodInCart)
  }

  return (
    <div className={s.productCard}>
      <img className={s.image} src={photo} alt={name} />

      <ul className={`${s.details} ${place ? s['med'] : s['prod']}`}>
        <li className={s.item}>
          <h3 className={s.name}>{name}</h3>
          <p className={s.price}>
            <span className={s.rupee}>&#x9F3;</span>
            {price}
          </p>
        </li>
        <li className={s.item}>
          <p className={s.suppliers}>{suppliers}</p>
        </li>
        <li className={s.item}>
          {!place && (
            <ProductQuantity
              onQuantityChange={quantity => setProdInCart(quantity)}
            />
          )}

          <Button
            variant="contained"
            size={place ? 'small' : 'medium'}
            onClick={addToCart}
          >
            Add to cart
          </Button>
          {place && (
            <ButtonLink
              to={`/product/${id}`}
              variant="text"
              style={{ color: 'var(--text-primary)' }}
            >
              Details
            </ButtonLink>
          )}
        </li>
      </ul>
    </div>
  )
}

export default ProductCard
