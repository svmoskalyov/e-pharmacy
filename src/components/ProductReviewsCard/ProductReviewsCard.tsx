import { useEffect, useState } from 'react'
import Rating from '../Rating'
import Avatar from '../ui/Avatar'
import s from './ProductReviewsCard.module.scss'

interface ProductReviewsCardProps {
  name: string
  rating: number
  createdAt: string
  comment: string
}

function ProductReviewsCard({
  name,
  rating,
  createdAt, //'2025-02-01T12:14:11.325Z'
  comment
}: ProductReviewsCardProps) {
  const [timeElapsed, setTimeElapsed] = useState<string>('')

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date()
      const createdDate = new Date(createdAt)
      const difference = now.getTime() - createdDate.getTime()

      const seconds = Math.floor(difference / 1000)
      const minutes = Math.floor(seconds / 60)
      const hours = Math.floor(minutes / 60)
      const days = Math.floor(hours / 24)

      if (days > 0) {
        setTimeElapsed(`${days} days ago`)
      } else if (hours > 0) {
        setTimeElapsed(`${hours} hours ago`)
      } else if (minutes > 0) {
        setTimeElapsed(`${minutes} minutes ago`)
      } else {
        setTimeElapsed(`${seconds} seconds ago`)
      }
    }, 1000)

    return () => clearInterval(intervalId)
  }, [createdAt])

  return (
    <div className={s.productReviewsCard}>
      <ul className={s.info}>
        <li className={s.item}>
          <Avatar name={name} size="44" />
          <div className={s.box}>
            <span className={s.name}>{name}</span>
            <span className={s.date}>{timeElapsed}</span>
          </div>
        </li>
        <li className={s.item}>
          <Rating initialRating={rating} />
        </li>
      </ul>
      <p className={s.comment}>{comment}</p>
    </div>
  )
}

export default ProductReviewsCard
