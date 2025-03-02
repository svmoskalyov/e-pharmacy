import { useState } from 'react'
import Icon from '../ui/Icon'
import s from './ProductQuantity.module.scss'

interface ProductQuantityProps {
  size?: 'small' | 'medium' | 'large'
  onQuantityChange: (quantity: number) => void
}

function ProductQuantity({
  size = 'medium',
  onQuantityChange
}: ProductQuantityProps) {
  const [currentQuantity, setCurrentQuantity] = useState(1)

  const handleIncrement = () => {
    const newQuantity = currentQuantity + 1
    setCurrentQuantity(newQuantity)
    onQuantityChange(newQuantity)
  }

  const handleDecrement = () => {
    if (currentQuantity > 1) {
      const newQuantity = currentQuantity - 1
      setCurrentQuantity(newQuantity)
      onQuantityChange(newQuantity)
    }
  }

  return (
    <div className={`${s.productQuantity}  ${s[`${size}`]}`}>
      <button className={s.btn} onClick={handleDecrement}>
        <Icon name={'minus'} size={'20'} />
      </button>
      <span className={`${s.quantity}  ${s[`${size}`]}`}>
        {currentQuantity}
      </span>
      <button className={s.btn} onClick={handleIncrement}>
        <Icon name={'plus'} size={'20'} />
      </button>
    </div>
  )
}

export default ProductQuantity
