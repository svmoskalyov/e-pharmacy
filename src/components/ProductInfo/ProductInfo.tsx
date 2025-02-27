import { useState } from 'react'
import s from './ProductInfo.module.scss'
import ProductReviewsCard from '../ProductReviewsCard'

type ReviewsObject = {
  name: string
  rating: number
  createdAt: string
  comment: string
}

interface ProductInfoProps {
  description: string
  reviews: ReviewsObject[]
}

function ProductInfo({ description, reviews }: ProductInfoProps) {
  const [isActive, setIsActive] = useState(true)

  const toggleActive = () => {
    setIsActive(!isActive)
  }

  return (
    <div className={s.productInfo}>
      <div className={s.tabsContainer}>
        <button
          className={s.btn}
          type="button"
          disabled={isActive}
          onClick={toggleActive}
        >
          Description
        </button>
        <button
          className={s.btn}
          type="button"
          disabled={!isActive}
          onClick={toggleActive}
        >
          Reviews
        </button>
      </div>
      <div className={s.infoContainer}>
        {isActive && <p>{description}</p>}
        {!isActive && (
          <ul className={s.reviewsList}>
            {reviews.map((e, i) => (
              <li key={i}>
                <ProductReviewsCard {...e} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default ProductInfo
