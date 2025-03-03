import { useLocation } from 'react-router'
import Icon from '../ui/Icon'
import ButtonLink from '../ui/ButtonLink'
import DecorLines from '../ui/DecorLines'
import s from './StoreCard.module.scss'

interface StoreCardProps {
  name: string
  rating: number
  address: string
  phone: string
  open: boolean
  website?: string
}

function StoreCard({
  name,
  rating,
  address,
  phone,
  open,
  website
}: StoreCardProps) {
  const { pathname } = useLocation()
  const place = pathname === '/medicine-store' ? true : false

  return (
    <div className={`${s.storeCard} ${place ? s['plc'] : ''}`}>
      <div className={`${s.header} ${place ? s['plc'] : ''}`}>
        <h3 className={s.name}>{name}</h3>
      </div>

      <ul className={s.body}>
        <li className={s.item}>
          <Icon name={'map-pin'} size={'18'} />
          <span className={s.text}>{address}</span>
        </li>
        <li className={s.item}>
          <Icon name={'phone'} size={'18'} />
          <span className={s.text}>{phone}</span>
        </li>
      </ul>

      <div className={`${s.state} ${place ? s['bottom'] : s['top']}`}>
        <div className={s.rating}>
          <Icon name={'star'} size={'16'} color={'var(--star)'} />
          <span>{rating}</span>
        </div>
        <div className={`${s.status} ${open ? s['open'] : s['close']}`}>
          {open ? 'open' : 'close'}
        </div>
      </div>
      <div className={`${s.decor} ${place ? s['top'] : s['bottom']}`}>
        <DecorLines variant='card'/>
      </div>

      {place && (
        <div className={s.footer}>
          <ButtonLink
            to={website || '#'}
            variant={'contained'}
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: '10px 16px', borderRadius: '24px' }}
          >
            Visit Store
          </ButtonLink>
        </div>
      )}
    </div>
  )
}

export default StoreCard
