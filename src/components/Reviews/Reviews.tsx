import { useEffect } from 'react'
import { useReviewStore } from '../../stores/reviewStore'
import SectionWrapper from '../SectionWrapper'
import Avatar from '../ui/Avatar'
import s from './Reviews.module.scss'

type Review = {
  name: string
  testimonial: string
}

function Reviews() {
  const reviews = useReviewStore(state => state.reviews)
  const fetchReviews = useReviewStore(state => state.fetchReviews)

  const getRandomObjects = (arr: Review[], count: number): Review[] => {
    const shuffled = [...arr].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, count)
  }

  const randomObjects = getRandomObjects(reviews, 1)

  useEffect(() => {
    if (reviews.length === 0) fetchReviews()
  }, [fetchReviews, reviews.length])

  return (
    <SectionWrapper>
      <div className={s.reviews}>
        <div className={s.header}>
          <h2 className={s.title}>Reviews</h2>
          <p className={s.subtitle}>
            Search for Medicine, Filter by your location
          </p>
        </div>
        <div className={s.list}>
          {randomObjects.map((e, i) => (
            <div key={i} className={s.item}>
              <div className={s.avatarWrapper}>
                <Avatar name={e.name} size="64" fs="32" />
              </div>
              <h3 className={s.name}>{e.name}</h3>
              <p className={s.testimonial}>{e.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Reviews
