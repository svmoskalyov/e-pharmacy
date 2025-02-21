import Button from '../ui/Button'
import ButtonLink from '../ui/ButtonLink'
import s from './ProductCard.module.scss'

interface ProductProps {
  id: string
  photo: string
  name: string
  suppliers: string
  price: string
}

function ProductCard({ id, photo, name, suppliers, price }: ProductProps) {
  return (
    <div className={s.productCard}>
      <img className={s.image} src={photo} alt={name} />
      <ul className={s.details}>
        <li className={s.item}>
          <h3 className={s.name}>{name}</h3>
          <p className={s.price}>
            <span className={s.rupee}>&#x9F3;</span>
            {price}
          </p>
        </li>
        <li className={s.item}>
          <p className={s.suppliers}>{suppliers}</p>
        </li>
        <li className={s.item}>
          <Button
            variant="contained"
            size="small"
            onClick={() => console.log('add to cart')}
          >
            Add to cart
          </Button>
          <ButtonLink
            to={`/product/${id}`}
            variant="text"
            style={{ color: 'var(--text-primary)' }}
          >
            Details
          </ButtonLink>
        </li>
      </ul>
    </div>
  )
}

export default ProductCard
