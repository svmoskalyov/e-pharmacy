import { useState } from 'react'
import ProductReviewsCard from '../ProductReviewsCard'
import Pagination from '../Pagination'
import s from './ProductInfo.module.scss'

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
  const [currentPage, setCurrentPage] = useState<number>(1)
  const itemsPerPage = 3

  const toggleActive = () => {
    setIsActive(!isActive)
  }

  const totalPages = Math.ceil(reviews.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const prodItems = reviews.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <>
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
          {isActive && <p className={s.description}>{description}</p>}
          {!isActive && (
            <ul className={s.reviewsList}>
              {prodItems.map((e, i) => (
                <li key={i}>
                  <ProductReviewsCard {...e} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {!isActive && reviews.length >= itemsPerPage && (
        <div style={{ marginTop: '20px' }}>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </>
  )
}

export default ProductInfo
