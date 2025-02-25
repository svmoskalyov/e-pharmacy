import sprite from '../../../assets/icons/sprite.svg'
import s from './IconChevron.module.scss'

type IconChevronProps = {
  count: 1 | 2
  look: 'left' | 'right'
}

function IconChevron({ count = 1, look = 'right' }: IconChevronProps) {
  return (
    <>
      {Array.from({ length: count }).map(() => (
        <svg
          className={s.icon}
          style={{
            transform: look === 'right' ? '' : 'rotate(180deg)'
          }}
        >
          <use href={sprite + `#chevron-p`} />
        </svg>
      ))}
    </>
  )
}

export default IconChevron
