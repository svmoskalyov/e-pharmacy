import { useState } from 'react'
import { useLocation } from 'react-router'
import { useAuthStore } from '../../stores/authStore'
import Button from '../ui/Button'
import ButtonLink from '../ui/ButtonLink'
import ProductQuantity from '../ProductQuantity'
import Backdrop from '../Backdrop'
import AuthPopup from '../AuthPopup/AuthPopup'
import s from './ProductCard.module.scss'

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
  const [prodInCart, setProdInCart] = useState(0)
  const [showBackdrop, setShowBackdrop] = useState(false)
  const { isAuth } = useAuthStore()

  const place = pathname === '/medicine' ? true : false
  const prodQuantity = parseInt(stock, 10)

  const handleBackdropClick = () => {
    setShowBackdrop(false)
  }

  const addToCart = () => {
    if (!isAuth) setShowBackdrop(true)

    console.log('add to cart id --', id)
    console.log('state in stock --', stock)
    console.log('add to cart prodInCart --', prodInCart)
    console.log('change in stock --', prodQuantity - prodInCart)
  }

  return (
    <>
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
                quantityMax={prodQuantity}
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
      <Backdrop
        show={showBackdrop}
        onClick={handleBackdropClick}
        disableClick={false}
      >
        <AuthPopup onClose={handleBackdropClick} />
      </Backdrop>
    </>
  )
}

export default ProductCard
