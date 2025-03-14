import { useState } from 'react'
import { useLocation } from 'react-router'
import { toast } from 'react-toastify'
import { useAuthStore } from '../../stores/authStore'
import { useCartStore } from '../../stores/cartStore'
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

interface ProductCardProps {
  product: ProductProps
}

function ProductCard({ product }: ProductCardProps) {
  const { id, photo, name, suppliers, price, stock } = product
  const { pathname } = useLocation()
  const [prodInCart, setProdInCart] = useState<number>(1)
  const [showBackdrop, setShowBackdrop] = useState<boolean>(false)
  const { isAuth } = useAuthStore()
  const { cart, setCart } = useCartStore()

  const place = pathname === '/medicine'
  const prodQuantity = parseInt(stock, 10)

  const handleBackdropClick = () => {
    setShowBackdrop(false)
  }

  const addToCart = () => {
    if (!isAuth) return setShowBackdrop(true)

    const findItem = cart.find(obj => obj.id === id) ? true : false
    if (findItem) {
      return toast.warning('the product is already in the cart')
    } else {
      toast.success('product added to cart')
      const newArr = [...cart, { ...product, buyCount: prodInCart }]
      setCart(newArr)
    }
  }

  return (
    <>
      <div className={`${s.productCard} ${place ? s['med'] : s['prod']}`}>
        <div className={`${s.imgWrapper} ${place ? s['med'] : s['prod']}`}>
          <img className={s.image} src={photo} alt={name} />
        </div>
        <div className={`${s.details} ${place ? s['med'] : s['prod']}`}>
          <div>
            <h3 className={`${s.name} ${place ? s['med'] : s['prod']}`}>
              {name}
            </h3>
            <p className={s.suppliers}>{suppliers}</p>
          </div>
          <div className={s.btnBox}>
            {!place && (
              <ProductQuantity
                quantityMax={prodQuantity}
                onQuantityChange={(quantity: number) => setProdInCart(quantity)}
              />
            )}
            <Button
              variant="contained"
              size={place ? 'small' : 'medium'}
              onClick={addToCart}
              disabled={stock === '0'}
              style={{
                width: place ? '108px' : '140px',
                height: place ? '40px' : '44px'
              }}
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
          </div>
          <p className={`${s.price} ${place ? s['med'] : s['prod']}`}>
            <span className={s.rupee}>&#x9F3;</span>
            {price}
          </p>
        </div>
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
