import SectionWrapper from '../SectionWrapper'
import Avatar from '../ui/Avatar'
import s from './Reviews.module.scss'

const reviews: Review[] = [
  {
    name: 'Maria Tkachuk',
    testimonial:
      'I recently used this medical platform to book an appointment with a specialist, and I was impressed by how easy and user-friendly the process was. Highly recommended!'
  },
  {
    name: 'Sergey Rybachok',
    testimonial:
      'I had a great experience using this medical platform to access my health records. This platform is a game-changer for managing my healthcare needs.'
  },
  {
    name: 'Natalia Chatuk',
    testimonial:
      'I recently had a virtual appointment with my doctor through this medical platform, and I was pleasantly surprised by how seamless the experience was.'
  }
]

type Review = {
  name: string
  testimonial: string
}

function Reviews() {
  const getRandomObjects = (arr: Review[], count: number): Review[] => {
    const shuffled = [...arr].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, count)
  }
  const randomObjects = getRandomObjects(reviews, 1)

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
                <Avatar name={e.name} size='64' fs='32'/>
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
