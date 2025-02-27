import Icon from '../ui/Icon'
import s from './Rating.module.scss'

interface RatingProps {
  initialRating: number
}

function Rating({ initialRating }: RatingProps) {
  const query = 'mobile'
  const stars = query === 'mobile' ? [1] : [1, 2, 3, 4, 5]

  return (
    <div className={s.rating}>
      {stars.map(star => (
        <span
          key={star}
          className={
            initialRating >= star ? `${s.star} ${s.filled}` : `${s.star}`
          }
        >
          <Icon name="star" size="16" color="var(--star)" />
        </span>
      ))}
      <span className={s.value}>{initialRating}</span>
    </div>
  )
}

export default Rating
