import useMediaQuery from '../../hooks/useMediaQuery'
import Icon from '../ui/Icon'
import s from './Rating.module.scss'

interface RatingProps {
  initialRating: number
}

function Rating({ initialRating }: RatingProps) {
  const isMobile = useMediaQuery('(max-width: 767px)')
  const stars = isMobile ? [1] : [1, 2, 3, 4, 5]

  return (
    <div className={s.rating}>
      {stars.map(star => (
        <span key={star} className={s.star}>
          <Icon
            name="star"
            size="16"
            color={initialRating >= star ? 'gold' : '#ddd'}
          />
        </span>
      ))}
      <span className={s.value}>{initialRating}</span>
    </div>
  )
}

export default Rating
