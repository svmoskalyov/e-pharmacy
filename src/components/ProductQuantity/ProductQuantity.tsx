import { useState } from 'react'
import s from './ProductQuantity.module.scss'
import Icon from '../ui/Icon'

interface ProductQuantityProps {
  onQuantityChange: (quantity: number) => void
}

function ProductQuantity({ onQuantityChange }: ProductQuantityProps) {
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
    <div className={s.productQuantity}>
      <button className={s.btn} onClick={handleDecrement}>
        <Icon name={'minus'} size={'20'} />
      </button>
      <span className={s.quantity}>{currentQuantity}</span>
      <button className={s.btn} onClick={handleIncrement}>
        <Icon name={'plus'} size={'20'} />
      </button>
    </div>
  )
}

export default ProductQuantity
